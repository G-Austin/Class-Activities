const classmates = ["Christian", "CJ", "Tammer"];

const wrapper = document.getElementById("wrapper");

for (let i = 0; i < classmates.length; i++) {
  const classmate = classmates[i];

  const button = document.createElement("button");
  button.innerHTML = `How many tacos did ${classmate} eat?`;

  button.addEventListener("click", function() {

    alert(`${classmate} ate ${i *2} tacos."`);

    if (tacoCount > 3) {
      alert("That's a lot of tacos, " + classmate + ".\nTaco 'Bout Hungry!");
    }
  });

  wrapper.appendChild(button);
}