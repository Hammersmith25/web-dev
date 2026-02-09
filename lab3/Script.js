function addCard() {
    const input = document.querySelector(".text");
    const main = document.getElementById("main");

    const value = input.value.trim();
    if (value === "") return;

    const card = document.createElement("div");
    card.classList.add("card");

    const text = document.createElement("span");
    text.classList.add("card-text");
    text.textContent = value;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        const cardEl = this.closest(".card");
        if (!cardEl) return;

        cardEl.classList.toggle("completed", this.checked);
    });

    const deleteBtn = document.createElement("img");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.src = "bin.png";
    deleteBtn.width = 20;
    deleteBtn.height = 20;
    deleteBtn.style.cursor = "pointer";

    deleteBtn.onclick = function () {
        deleteCard(this);
    };

    const actions = document.createElement("div");
    actions.classList.add("card-actions");
    actions.appendChild(checkbox);
    actions.appendChild(deleteBtn);

    card.appendChild(text);
    card.appendChild(actions);

    main.appendChild(card);
    input.value = "";
}
function deleteCard(button) {
    const card = button.closest(".card");
    if (card) {
        card.remove();
    }
}
