const inputValue = document.getElementById("input");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  if (inputValue.value === "") {
    alert("Please type something to add. ");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputValue.value;
    listContainer.appendChild(list);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    list.appendChild(span);
    inputValue.value = "";
    saveData();
  }
};

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    } else return;
  },
  false
);
