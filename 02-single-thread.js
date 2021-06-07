//Testar com:
//10
//100
//1000
//2000

function heavyCount(n, start) {
  for (var i = 0; i <= start; i++) {
    for (var j = i; j >= 0; j--) {
      if (i == n && j == 0) {
        return start;
      }
    }
  }

  return heavyCount(n, ++start);
}

var label = document.createElement("label");

var inputText = document.createElement("input");

var button = document.createElement("button");
button.innerHTML = "Contar";

button.addEventListener("click", () => {
  label.innerHTML = heavyCount(inputText.value, 0);
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.append(label);
  document.body.append(inputText);
  document.body.append(button);
});
