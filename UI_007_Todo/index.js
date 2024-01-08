/*DOMContentLoaded 화면에 dom 요소들이 모두 완성되면
이 이벤트를 설정하므로써 문서(dom)가 모두 화면에 나타난 후에
비로소 js 를 실행하기 시작
js 코드가 html 위 아래 어디 있던 상관없이 실행가능
*/

document.addEventListener("DOMContentLoaded", () => {
  const ulContent = document.querySelector("section.list ul");
  const todoInput = document.querySelector("section.input input");
  /**
   * 3개의 요소를 갖는 리스트
   */
  const todoList = ["체육관가기", "html 책 읽기", "책상 정리", "영화보기", "라면먹기"];

  const createLiTag = (todoContent) => {
    const spanComplete = document.createElement("SPAN");
    const spanTodo = document.createElement("SPAN");
    const spanClose = document.createElement("SPAN");
    const liTag = document.createElement("LI");

    spanComplete.classList.add("complete");
    spanTodo.classList.add("todo");
    spanClose.classList.add("close");

    spanComplete.innerHTML = "&check;";
    spanTodo.innerHTML = todoContent;
    spanClose.innerHTML = "&times;";

    liTag.appendChild(spanComplete);
    liTag.appendChild(spanTodo);
    liTag.appendChild(spanClose);

    ulContent.appendChild(liTag);
  };

  const createTodoList = () => {
    ulContent.innerHTML = "";
    todoList.forEach((item) => createLiTag(item));
  };

  createTodoList();

  /* 화면 상에 li tag가 여러개 있는데 querySelector 을 사용하면
    최초로 발견되는 요소만 select가 됨*/
  ulContent.addEventListener("click", (event) => {
    /* ul tag에 이벤트를 설정하고 실제로는 li tag에 대해 이벤트 코드를 처리
    이때 실제 제일 먼저 클릭된 요소는 event.target이 된다
    이 화면에서 event.target 은 Span tag 가 된다 그러면 span이 아닌 li tag에 
    대하여 어떤 처리를 하려 함
     */
    const target = event.target;
    if (target.tagName === "SPAN") {
      //스팬 태그에 클래스가 붙어있나
      if (target.className === "close") {
        //삭제할지 물어보기
        if (confirm("삭제할까요?")) {
          //삭제를 허락하면 현재 스팬의 부모인 리스트를 감추기
          target.closest("LI").style.display = " none";
        }
        return false;
      }

      /* target.closest 
        클릭된 요소를 감싸고 있는 부모들 중에 가장 가까이 있는 LI tag*/

      const liTag = target.closest("LI");
      /**
       * li tagh에 complete 라는 클래스를 추가하라
       * li class = complet 와 같은 코드가 됨
       *
       */
      //   liTag.classList.add( "complete");

      /**
       * tag 요소에 class 속성이 설정되면 classList 에 해당 클래스 명이 배열로 저장되어있음
       * 즉, liTag(LI)에  class 속성이 있고, 값이 complete 이면 제거
       * 만약 없으면 추가
       *
       * 클래스변수?.aa : 클래스 변수가 null 이 아닌 경우에만 실행.
       * 만약 클래스 변수가 null 이면 건너띰
       */
      liTag?.classList.toggle("complete");
    }
  });

  const addBtn = document.querySelector("section.input button");
  addBtn?.addEventListener("click", () => {
    const todo = todoInput.value;
    if (!todo) {
      alert("내용을 입력 바람");
      todoInput.select();
      return false;
    }
    //list  배열의 끝에 새로운 값 추가하기
    todoList.push(todo);
    createTodoList(todo);
    todoInput.value = "";
  });

  const closeBtn = document.querySelector("");
});
