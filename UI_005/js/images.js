const img_0001 = document.querySelector(".img_0001");
const img_0003 = document.querySelector(".img_0003");
const img_0005 = document.querySelector(".img_0005");
const img_0001_click_event = () => {
  //현재 화면에 보이는 페이지를 01.html 페이지로 전환하라
  document.location.href = "./01.html";
};
const img_0003_click_event = () => {
  document.location.href = "./03.html";
};
const img_0005_click_event = () => {
  document.location.href = "./05.html";
};
img_0001.addEventListener("click", img_0001_click_event);
img_0003.addEventListener("click", img_0003_click_event);
img_0005.addEventListener("click", img_0005_click_event);

//누구한테 click event 를 부착할 것인가
//click event 를 부착할 대상(selector)을 찾아서(puery) 있으면 그 친구를 img_0003 변수에 할당하라
//click event가 발생했을 때 실행할 함수 만들기
//event handler를 선언
//click event가 발생하면 해야할 일 지정.
//click event가 발생하면 실행할 event handler 연결
