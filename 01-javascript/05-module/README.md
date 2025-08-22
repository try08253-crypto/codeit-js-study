# 모듈 시스템

## 모듈

- 기능적으로 분리된 코드
- 모듈을 제작하는 사람
  - 유지 및 보수의 편의성
- 모듈을 사용하는 사람
  - 재사용성, 오픈 소스 = 서드 파티 모듈
- 패키지
  - 모듈의 집합
  - 디렉토리(폴더)에 package.json 파일이 존재하면 해당 디렉토리는 패키지다.
  - package.json
    - name: 패키지의 고유한 이름입니다.
    - version: 패키지의 버전입니다.
      - X.Y.Z(semantic version)
      - X: 메이저(이전 버전과 호환 X)
      - Y: 마이너(이전 버전과 호환 O, 기능 추가)
      - Z: 패치(이전 버전과 호환 O, 버그 수정)
      - ^: 메이저 버전은 고정한다
    - main: 패키지 코드 실행을 위해 제일 처음 실행해야하는 파일입니다.
    - scripts: npm run [command]로 사용할 command를 등록할 수 있습니다.
    - dependencies: 패키지를 실행시키기 위해 설치된 의존성 패키지 목록입니다. npm install [package]로 설치합니다.
    - devDependencies: 패키지를 실행시키기 위해 설치된 의존성 패키지 목록입니다. 개발 과정에서만 사용되는 패키지는 이곳에 명시합니다. npm install -D [package_name]로 설치합니다.

## 히스토리

- 에크마 인터네셔널에서 JS의 공식 표준 스펙(에크마 스크립트)을 정의
  - ES1, ES2, ES3, ES4(중도 포기), ES5
  - 도대체 모듈 시스템은 언제 공식적으로 지원되나요?
    - CJS(Common JS)
      - 브라우저 바깥 환경에서 작동하는 JS 모듈 스펙을 정의
      - CJS랑 JS 실행 엔진을 결합해보자: Node.js
    - AMD
      - 브라우저에서 작동하는 JS 모듈 스펙을 정의
    - UMD
      - CJS랑 ADM를 호환시키기 위해서 나온 분기 처리 방식의 코드 작성 템플릿 제안
- ESM = CJS와 ADM를 모두 포함
  - ES6(ES2015) 스펙이 발표됨
  - ES6에 공식적으로 정의된 JS "표준" 모듈 시스템 스펙이 포함됨
  - 이때부터, 뒤에 연도를 붙여서 발표하기로 했다.
- 현재 2025년 CJS, ESM(표준) 2가지 모듈 시스템을 사용중입니다.

## CJS VS ESM 결정 방법

- .cjs: CJS. package.json의 type 필드를 무시합니다.
- .mjs: ESM. package.json의 type 필드를 무시합니다.
- .js: 해당 파일이 속한 디렉토리의 package.json의 type 필드로 결정합니다.
  - "type": 필드가 없는 경우: CJS
  - "type": "commonjs": CJS
  - "type": "module": ESM

## 사용법

- CJS
  - 내보내는 쪽
    - 모듈 객체 = module.exports(id, 메타 데이터 등을 가지고 있음)
    - exports = module.exports의 참조
    - exports 또는 module.exports에 속성을 부여한다
    - module.exports 객체를 재정의한다
  - 로드하는 쪽
    - require("모듈의 상대 경로");
    - require("패키지 이름");
    - 확장자를 생략한 경우 3가지를 찾는다.
      - .js(.cjs): module.exports 객체를 돌려준다
      - .json: json 파일을 읽어서 객체로 돌려준다
      - .node: C++ 코드
      - 그래도 없다? 그러면 그런 모듈은 없다고 에러를 발생시킨다.
- ESM
  - 내보내는 쪽
    - named export
      - 선언과 동시에 내보내기
        - export const v = 1;
        - export const obj = {};
        - export const func = () => {};
      - 선언 후 이름으로 내보내기
        - const v = 1;
        - const obj = {};
        - const const func = () => {};
        - export { v, obj, func };
    - default export
      - 하나의 모듈에서 단 한 번만 사용할 수 있으며 모듈의 기본값을 내보냅니다.
      - const func = () => {};
      - export default func;
  - 가져오는 쪽
    - named import, default import
      - import 모듈, {모듈} from 파일
    - as: 별명을 붙일 수 있다
    - 확장자를 생략하면 안된다.
    - 확장자를 명시하는 경우 불러올 수 있는 파일은
      - .js
      - .mjs
      - .cjs
      - 그러면 그런 모듈은 없다고 에러를 발생시킨다.

## 차이점

- 동적, 정적
  - CJS는 동적으로 모듈을 로드한다.
    - 동적 타이밍에 모듈의 의존성을 불러온다.
  - ESM은 정적으로 모듈을 로드한다.
    - 정적 타이밍에 모듈간의 의존성을 전부 분석하고
    - 필요한 모든 모듈을 병렬로 불러온다.
    - 요즘엔 번들링을 통해서 모듈을 1개로 합쳐서 불러온다.

## 문제 상황

- ESM 모듈에서 CJS 모듈을 불러와야 하는 상황
  - 내가 개발하는 프로젝트는 ESM 표준 모듈 시스템을 사용해서 개발하고 있는데, 의존성 패키지는 CJS 모듈 시스템을 사용하고 있는 경우
  - ESM 모듈은 CJS 모듈을 로드할 수 있다.
  - CJS의 module.exports를 ESM의 export default로 인식한다.
- CJS 모듈에서 ESM 모듈을 불러와야 하는 상황
  - 내가 개발하는 프로젝트는 CJS 모듈 시스템을 사용하는 레거시 프로젝트인데, 의존성 패키지는 ESM 모듈 시스템을 사용하고 있는 경우
  - CJS 모듈은 ESM 모듈을 로드할 수 없다. 그러나...
  - 반드시 해야 하는 경우에는 비동기 동적 import를 할 수 있다.

## 심화

- CJS 작동 방식

- ESM 작동 방식