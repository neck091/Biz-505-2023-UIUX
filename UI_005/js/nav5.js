//화면의 네비 요소들인 li 태그들을 클릭했을 때
//반응하는 이벤트 핸들러를 설정하고 싶다
//각각의 li 태그들을 querySelector 하여 개별적인 이벤트 핸들러를 설정할 수 있음
//허나 li tag의 개수가 많아지면 그만큼 코드 길이가 길어지고
//또한 유사한 코드가 중복되어 작성됨.
//이럴때 li 태그의 부모 태그 요소에 이벤트를 설정하고 이번트 bubblig을 역으로 이용해
//이벤트 처리를 간소화한다.

//nav main nav tag 에 이벤트를 설정하고 li 태그가 클릭되었을 때 할일 지정.

const main_nav = document.querySelector("nav.main_nav");

main_nav.addEventListener("click", (event) => {
  const target = event.target;
  const tag_name = event.target.tagName;
  const nav_text = target.innerText;

  if (tag_name === "LI") {
    alert("네비요소클릭" + nav_text);
    if (nav_text === "HOME") {
      document.location.href = "./index.html";
    } else if (nav_text === "로그인") {
      improtHTML(image, "./login.html");
    } else if (nav_text === "회원가입") {
      improtHTML(image, "./join.html");
    }
  }
  // alert("main nav 클릭" + nav_text);
});
