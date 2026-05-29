# 📝 Todo-easy

바닐라 자바스크립트로 구현한 가장 직관적인 할 일 관리자입니다 [1, 2]. 복잡한 프레임워크나 외부 데이터베이스 없이, 웹의 기본 API만을 활용하여 순수하고 가벼운 생산성 도구를 구축했습니다 [3, 4].

- **개발자:** 2501062 박지성 (GitHub: [Dev2hearts](https://github.com/Dev2hearts)) [1, 5]
- **저장소:** [https://github.com/Dev2hearts/Todo-easy](https://github.com/Dev2hearts/Todo-easy) [5]
- **배포 사이트:** [https://dev2hearts.github.io/Todo-easy/] [6]

---

## 🛠 Tech Stack

- **HTML5 & CSS3**: 시맨틱 마크업 및 직관적인 UI 설계 [3, 7]
- **Vanilla JavaScript**: 외부 라이브러리 의존 없는 순수 DOM 제어 [3]
- **Web API**: 브라우저 내장 `Local Storage`를 활용한 데이터 영속성 확보 [3, 8]

---

## ✨ Key Features

1. **할 일 추가 (`addTodo`)**
    - 입력창에 텍스트 작성 후 추가 버튼을 눌러 새로운 할 일을 생성합니다 [9, 10].
2. **할 일 완료 상태 변경 (`toggleComplete`)**
    - 완료 버튼 클릭 시 `.completed` 클래스가 토글되어 텍스트에 취소선이 생기며 시각적인 완료 피드백을 제공합니다 [10, 11].
3. **할 일 수정 (`editTodo`)**
    - 수정 버튼을 통해 기존에 작성한 할 일의 내용을 간편하게 변경할 수 있습니다 [9, 12].
4. **할 일 삭제 (`deleteTodo`)**
    - 삭제 버튼 클릭 시 DOM에서 즉시 요소를 제거하고, `Local Storage`에서도 해당 데이터를 영구 삭제합니다 [12, 13].
5. **전체 초기화 (`resetTodo`)**
    - 사용자 의도를 묻는 경고창(confirm)을 확인한 후, 화면의 리스트를 비우고 스토리지 데이터를 빈 객체 `{}`로 안전하게 덮어쓰기 하여 리셋합니다 [12, 14].

---

## 🚀 트러블 슈팅 (Troubleshooting)

### 💡 초기 렌더링 시 DOM 요소 접근 및 Local Storage 데이터 로드 문제

- **문제 발생:**
  HTML 문서가 완전히 로드되기 전에 자바스크립트가 실행되어 `.todo-list`와 같은 DOM 요소에 접근하려 할 때 오류가 발생할 위험이 있었습니다. 또한, 사용자가 페이지를 새로고침할 때마다 기존에 저장해둔 할 일 목록이 화면에 안전하게 그려져야 했습니다.
- **해결 과정:**
  스크립트의 실행 시점을 보장하기 위해 `document.addEventListener("DOMContentLoaded", ...)` 이벤트를 활용했습니다 [12, 15]. 이를 통해 페이지의 렌더링이 끝난 후 안전하게 DOM 요소에 접근하고, `localStorage.getItem("todos")`를 호출하여 저장된 데이터를 성공적으로 불러와 초기 할 일 목록을 생성할 수 있도록 구현했습니다 [12, 15].

---

## 📂 Architecture

이 프로젝트는 사용자의 액션이 데이터로 변환되는 과정을 직관적으로 처리합니다 [9].

- **저장 (Save Flow):** `JSON.stringify(todos)`를 통해 자바스크립트 객체를 문자열로 변환하여 브라우저 스토리지에 기록합니다 [8, 12].
- **불러오기 (Load Flow):** `JSON.parse()`를 사용하여 저장된 문자열을 다시 객체로 복원하고 화면에 렌더링합니다 [8, 12].
