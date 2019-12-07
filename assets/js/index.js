const form = document.querySelector("#form");
const memoryInput = document.querySelector(".memory-input");
const allMemories = document.getElementById("memory-ul");
const deleteButton = document.querySelector(".delete-memory");
const showRandomMemoryButton = document.querySelector(".show-random-memory");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  addMemory();
  console.log(allMemories.children.length);
});

deleteButton.addEventListener("click", function(e) {
  e.preventDefault();
  deleteMemories();
});

showRandomMemoryButton.addEventListener("click", function(e) {
  e.preventDefault();
  showRandomMemory();
});

function addMemory() {
  let inputValue = memoryInput.value;
  let singleMemoryLi = document.createElement("li");
  singleMemoryLi.setAttribute("class", "single-memory");
  inputValue = document.createTextNode(inputValue);
  singleMemoryLi.appendChild(inputValue);
  allMemories.appendChild(singleMemoryLi);
  form.reset();
  singleMemoryLi.addEventListener("click", function(e) {
    e.preventDefault();
    strikethroughMemory();
  });
}

function deleteMemories() {
  for (
    let memoryCount = allMemories.children.length - 1;
    memoryCount >= 0;
    memoryCount--
  ) {
    allMemories.children.item(memoryCount).remove();
  }
}

function strikethroughMemory() {
  console.log("STRIKEthrough");
}

function showRandomMemory() {
  let memoryCount = allMemories.children.length;
  let randomNumber = Math.floor(Math.random() * memoryCount) + 1;
  console.log(
    randomNumber + 1 + ":" + allMemories.children[randomNumber].innerHTML
  );
}
