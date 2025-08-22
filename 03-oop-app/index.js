import App from "./app.js";
import CSVFileManager from "./file-manager/csv-file-manager.js";
import UserRepository from "./repository/user-repository.js";
import AuthService from "./service/auth-service.js";
import AuthScreen from "./ui/auth-screen.js";
import config from "./config.js";

// 의존성 주입
const csvFileManager = new CSVFileManager();
const userRepository = new UserRepository(csvFileManager, config);
const authService = new AuthService(userRepository);
const authScreen = new AuthScreen(authService);
const app = new App(authScreen);

app.run();

// 좋은 코드를 쓰는 방법
// 1. 분리를 잘한다: 단일 책임의 원칙을 지킨다, 클래스를 잘 설계한다(this, 생성자, 인스턴스 속성, 인스턴스 메소드, 스태틱 속성, 스태틱 메소드)
// 2. 협력을 잘한다: 캡슐화, 의존성 주입
// 3. 공통을 묶는다: 상속, 다형성, 제네릭, 추상 클래스

// 객체 지향 프로그래밍

// 4대 특성
// 1. 추상화: 클래스를 설계할 때, 내부 동작 원리를 몰라도, 객체를 사용하는 쪽에서 쉽게 사용할 수 있도록 설계해야 한다.
// 2. 캡슐화: 객체 내부의 속성을 객체 자신만 관리할 수 있도록 해야 한다.
// 3. 상속: 서로 다른 두 클래스에 공통 속성 또는 메소드가 존재하면 부모 클래스로부터 상속 받아서 사용한다.
// 4. 다형성: 같은 형식으로 다양한 기능을 수행할 수 있다.

// 5대 원칙
// 1. 단일 책임의 원칙: 클래스를 설계할 때, 책임 분리가 명확하게 되도록 설계해야 한다.
// 2. 개방 폐쇄의 원칙:
// 3. 인터페이스 분리의 원칙:
// 4. 의존성 역전의 원칙:
// 5. 리스코프 치환의 원칙: