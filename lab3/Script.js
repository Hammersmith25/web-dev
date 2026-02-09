function addCard() {
    const input = document.querySelector(".text");
    const main = document.getElementById("main");

    const value = input.value.trim();
    if (value === "") return;

    const card = document.createElement("div");
    card.classList.add("card");

    const text = document.createElement("span");
    text.textContent = value;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const deleteBtn = document.createElement("img");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.src = "bin.png";
    deleteBtn.width = 20;
    deleteBtn.height = 20;
    deleteBtn.style.cursor = "pointer";

    deleteBtn.onclick = function () {
        deleteCard(this);
    };

    card.appendChild(text);
    card.appendChild(checkbox);
    card.appendChild(deleteBtn);

    main.appendChild(card);
    input.value = "";
}
function deleteCard(button) {
    const card = button.parentElement;
    card.remove();
}
