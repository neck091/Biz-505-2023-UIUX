//dom 객체를 변수에 할당하여 js 코드에서 사용할 준비하기

const nav_home = document.querySelector("li.main_nav.home");
const nav_login = document.querySelector("li.main_nav.login");
const nav_join = document.querySelector("li.main_nav.join");

//이벤트 처리기 함수 선언
//public void add(int num1, int num2){}
// navclick handler 는 nav 의 3가지 요소에게 공통 연결
//nav 요소중 어떤걸 클릭해도 동일한 문구 작동
//어떤 요소가 클릭되었는지 확인하기 위해 event 라는 매개변수 설정
//요소 중(li tag) 어떤 부분이 클릭이 되면
//nav click hader 함수 실행, 클릭요소 정보가 이벤트 매개변수를 통하여 전달.
const nav_click_handler = (event) => {
  const target = event.target;
  const nav_text = target.innerText;

  alert(nav_text + " 메뉴 클릭");
};

nav_home.addEventListener("click", nav_click_handler);
nav_login.addEventListener("click", nav_click_handler);
nav_join.addEventListener("click", nav_click_handler);
