const form = document.querySelector("#form");

const memoryul = document.getElementById("memory-ul");
const memoryInput = document.querySelector(".memory-input");
const memoryText = form.querySelector('input[type="text"]').innerHTML;
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const li = document.createElement("li");
  memoryul.appendChild(li);
  li.innerHTML = memoryText;
});
