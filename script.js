// Selecionar os elementos
const description = document.getElementById("description");
const toggleButton = document.getElementById("toggleButton");

// Adicionar um evento de clique ao botão
toggleButton.addEventListener("click", () => {
    // Verificar se a descrição está visível
    if (description.classList.contains("hidden")) {
        // Mostrar a descrição
        description.classList.remove("hidden");
        toggleButton.textContent = "Ocultar Descrição";
    } else {
        // Ocultar a descrição
        description.classList.add("hidden");
        toggleButton.textContent = "Mostrar Descrição";
    }
});
