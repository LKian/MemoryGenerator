const form = document.querySelector("#form");
const memoryInput = document.querySelector(".memory-input");
const allMemories = document.getElementById("memory-ul");
const eraseAllButton = document.querySelector(".delete-all-memories-button");
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

eraseAllButton.addEventListener("click", function(e) {
  e.preventDefault();
  eraseAllMemories();
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
    let singleMemorySpan = document.createElement("span");
    singleMemoryLi.setAttribute("class", "single-memory");
    inputValue = document.createTextNode(inputValue);
    singleMemoryLi.appendChild(singleMemorySpan);
    singleMemoryLi.appendChild(inputValue);
    allMemories.appendChild(singleMemoryLi);

    form.reset();
    warningMessage.innerHTML = "";
    singleMemoryLi.addEventListener("click", function(e) {
      e.preventDefault();
      let currentLi = e.currentTarget;
      currentLi.classList.toggle("forgotten-memory");
    });
  } else {
    warningMessage.innerHTML = "Please enter a memory";
  }
}

function eraseAllMemories() {
  for (
    let memoryCount = allMemories.children.length - 1;
    memoryCount >= 0;
    memoryCount--
  ) {
    allMemories.children.item(memoryCount).remove();
  }
}

function showRandomMemory() {
  let memoryCount = allMemories.children.length;
  let randomMemoryQuote = document.querySelectorAll(".random-memory span");
  let randomNumber = Math.floor(Math.random() * memoryCount);
  randomMemory.innerHTML = allMemories.children[randomNumber].innerHTML;
  randomMemoryQuote[0].innerHTML = '"';
  randomMemoryQuote[1].innerHTML = '"';
  console.log(
    "Quote @ Index",
    randomNumber,
    ":",
    allMemories.children[randomNumber].innerHTML
  );
}

function forgetMemory() {}
