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
      document.location.href = "./login.html";
    } else if (nav_text === "회원가입") {
      document.location.href = "./join.html";
    }
  }
  // alert("main nav 클릭" + nav_text);
});
