document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        // Evita que o formulário seja enviado automaticamente
        event.preventDefault();

        // Obtém os valores dos campos
        const nome = form.querySelector("#nome").value.trim();
        const email = form.querySelector("#email").value.trim();
        const celular = form.querySelector("#celular").value.trim();
        const mensagem = form.querySelector("#mensagem").value.trim();

        // Verifica se os campos obrigatórios estão preenchidos
        if (nome === "" || email === "" || celular === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
        } else {
            alert("Formulário enviado com sucesso!");
            form.reset(); // Limpa os campos após o envio
        }
    });
});