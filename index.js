const inputText = document.getElementById("todo-text");
const ulContainer = document.getElementById("card-content");

function addTodo() {
  //   let inputValue = inputText.value;

  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";

  ulContainer.appendChild(li);
  li.innerHTML = inputText.value;
  if (inputText.value == "") {
    alert("You must enter a ToDo");
    li.remove();
  } else {
    li.appendChild(span);
  }
  inputText.value = "";
  setItem();
}

ulContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    setItem();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    setItem();
  }
});

function setItem() {
  localStorage.setItem("data", ulContainer.innerHTML);
}

function getItem() {
  let data = localStorage.getItem("data");
  console.log(data);
  ulContainer.innerHTML = data;
}

getItem();
