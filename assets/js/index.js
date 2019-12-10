const form = document.querySelector("#form");
const memoryInput = document.querySelector(".memory-input");
const allMemories = document.getElementById("memory-ul");
const deleteButton = document.querySelector(".delete-memory");
const showRandomMemoryButton = document.querySelector(".show-random-memory");
const randomMemory = document.querySelector(".random-memory h3");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  addMemory();
  if (allMemories.children.length === 1) {
    console.log(allMemories.children.length + " dream");
  } else {
    console.log(allMemories.children.length + " dreams");
  }
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
  let warningMessage = document.querySelector(".warning-message p");
  if (inputValue.length > 0) {
    let singleMemoryLi = document.createElement("li");
    singleMemoryLi.setAttribute("class", "single-memory");
    inputValue = document.createTextNode(inputValue);
    singleMemoryLi.appendChild(inputValue);
    allMemories.appendChild(singleMemoryLi);
    form.reset();
    warningMessage.innerHTML = "";
    singleMemoryLi.addEventListener("click", function(e) {
      e.preventDefault();
      strikethroughMemory();
    });
  } else {
    warningMessage.innerHTML = "Please enter a memory";
  }
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
  let randomMemoryQuote = document.querySelectorAll(".random-memory span");
  let randomNumber = Math.floor(Math.random() * memoryCount);
  randomMemory.innerHTML = allMemories.children[randomNumber].innerHTML;
  randomMemoryQuote[0].innerHTML = '"';
  randomMemoryQuote[1].innerHTML = '"';
  console.log("Index: ", randomNumber);
  console.log(
    "Quote @ Index",
    randomNumber,
    ":",
    allMemories.children[randomNumber].innerHTML
  );
}
