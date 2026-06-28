// Aguarda o carregamento do DOM para vincular os eventos
document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. FUNCIONALIDADE DE ALTERNÂNCIA DE TEMA (CLARO/ESCURO) ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    themeToggleBtn.addEventListener("click", function() {
        // Verifica se o tema atual é dark, se for muda para padrão (claro), senão muda para dark
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    });

    // --- 2. VALIDAÇÃO E SIMULAÇÃO DE ENVIO DO FORMULÁRIO DE CONTATO ---
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        // Impede o envio padrão do formulário (recarregamento da página)
        event.preventDefault();

        // Obtém os valores dos campos limpando espaços em branco
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validação simples de campos obrigatórios vazios
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos do formulário antes de enviar.");
            return;
        }

        // Expressão regular para validar o formato de e-mail padrão
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido (exemplo: usuario@dominio.com).");
            return;
        }

        // Se passar por todas as validações, exibe mensagem de sucesso
        alert("Mensagem enviada com sucesso!");

        // Limpa todos os campos do formulário após a simulação de sucesso
        contactForm.reset();
    });
});