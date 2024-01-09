// js 코드를 html 어디에 있던지 정상 실행되도록 하기 위한 코드
document.addEventListener("DOMContentLoaded", () => {
  const btn_login = document.querySelector("button.btn_login");
  const input_username = document.querySelector("input[name='username']");
  const input_password = document.querySelector("#password");

  //화면에 form 이 모두 그려진 시점에 input box에 입력된 값을 catch 하여 각 변수에 저장
  //   const txt_username=input_username.value;
  //   const txt_passward=input_passward.value;

  btn_login.addEventListener("click", () => {
    /**
     * 로그인을 시도(버튼이 눌렸을 때)하는 시점에 input box에 입력된 값을 catchㅎㅏ라
     */
    const txt_username = input_username.value;
    const txt_password = input_password.value;

    if (!txt_username) {
      alert("USER NAME을 입력해주세요");
      input_username.focus();
      //js에서는 코드를 멈추고 싶을 때 리턴 펄스를 사용/
      return false;
    }

    if (!txt_password) {
      alert("PASSWARD을 입력해주세요");
      input_password.focus();
      return false;
    }

    //여기에 코드가 도달하면
    //유저네임이랑 비번이 입력된 상태
    //데이터를 서버로 전송

    // document.querySelector("form").submit();
    const form = document.querySelector("form");
    form.submit();
  });
});
