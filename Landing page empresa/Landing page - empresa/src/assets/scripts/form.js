const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    email_user();
});


// E-mail
const email_user = () => {
    const email = document.getElementById("email-user");
    const emailError = document.getElementById("emailError");

    // Pegando o valor
    const email_usuario = email.value;

    emailError.textContent = "";

    if (email_usuario.trim() == "") {
        const textEmailError = document.createTextNode("Não é permitido espaços e número no inicio");

        email.style.cssText =`
            outline: 2px solid #f55353;
        `;
        emailError.style.cssText = "display: block;";
        emailError.appendChild(textEmailError);

    } else {
        email.style.cssText =`
            border: 1px solid #ccc;
        `;
    }
}

// Lembrar-me


