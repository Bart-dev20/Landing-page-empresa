const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    name_user();
    email_user();
    password();
    confirm_password();
});

// Nome
const name_user = () => {
    const name = document.getElementById("name-user");
    const nomeErrorRegister = document.getElementById("nomeErrorRegister");

    // Pegando o valor
    const nome_usuario = name.value;

    nomeErrorRegister.textContent = "";

    if (nome_usuario.toLowerCase().length <= 8 || nome_usuario.trim() == "") {
        const textErroLogin = document.createTextNode("Não é permitido espaço ou nome muito curto");

        name.style.cssText =`
            border: 1px solid #f55353;
        `;
        nomeErrorRegister.style.cssText = "display: block;"
        nomeErrorRegister.appendChild(textErroLogin);
    }
    else {
        name.style.cssText =`
            border: 1px solid #ccc;
        `;
    }
};

// E-mail
const email_user = () => {
    const email = document.getElementById("email-user");
    const emailErrorRegister = document.getElementById("emailErrorRegister");

    // Pegando o valor
    const email_usuario = email.value;

    emailErrorRegister.textContent = "";

    if (email_usuario.trim() == "") {
        const textEmailError = document.createTextNode("Não é permitido espaços e número no inicio");

        email.style.cssText =`
            border: 1px solid #f55353;
        `;
        emailErrorRegister.style.cssText = "display: block;";
        emailErrorRegister.appendChild(textEmailError);

    } else {
        email.style.cssText =`
            border: 1px solid #ccc;
        `;
    }
}

// Password
const password = () => {
    const password_user = document.getElementById("password-user");
    const passwordErrorRegister = document.getElementById("passwordErrorRegister");

    // Pegando o valor
    const palavra_passe = password_user.value;
    passwordErrorRegister.textContent = "";

    if (palavra_passe.trim() == "") {
        const textPasswordError = document.createTextNode("Não é permitido espaços");

        password_user.style.cssText =`
            border: 1px solid #f55353;
        `;
        passwordErrorRegister.style.cssText = "display: block;";
        passwordErrorRegister.appendChild(textPasswordError);

    }
    
    else if (palavra_passe.trim().length < 8) {
        const textPasswordError = document.createTextNode("Palavra-passe insegura");

        password_user.style.cssText =`
            border: 1px solid #f55353;
        `;
        passwordErrorRegister.style.cssText = "display: block;";
        passwordErrorRegister.appendChild(textPasswordError);

    } else {
        password_user.style.cssText =`
            border: 1px solid #ccc;
        `;
    }
};

// Confirmação de password
const confirm_password = () => {
    const password_user = document.getElementById("password-user");
    const confirm_password_user = document.getElementById("confirm-password-user");
    const confirmPassowrdErrorRegister = document.getElementById("confirmPassowrdErrorRegister");

    // Pegando o valor
    const palavra_passe = password_user.value;
    const confirm_password = confirm_password_user.value;
    confirmPassowrdErrorRegister.textContent = "";

    if (confirm_password.trim() == "") {
        const textConfirmPasswordError = document.createTextNode("Não é permitido espaços");

        confirm_password_user.style.cssText =`
            border: 1px solid #f55353;
        `;
        confirmPassowrdErrorRegister.style.cssText = "display: block;";
        confirmPassowrdErrorRegister.appendChild(textConfirmPasswordError);

    }
    
    else if (confirm_password.trim().length < 8) {
        const textConfirmPasswordError = document.createTextNode("Palavra-passe insegura");

        confirm_password_user.style.cssText =`
            border: 1px solid #f55353;
        `;
        confirmPassowrdErrorRegister.style.cssText = "display: block;";
        confirmPassowrdErrorRegister.appendChild(textConfirmPasswordError);

    }
    
    else if (confirm_password !== palavra_passe) {
        const textConfirmPasswordError = document.createTextNode("Palavra-passe não confirmada");

        confirm_password_user.style.cssText =`
            border: 1px solid #f55353;
        `;
        confirmPassowrdErrorRegister.style.cssText = "display: block;";
        confirmPassowrdErrorRegister.appendChild(textConfirmPasswordError);
    }
    else {
        confirm_password_user.style.cssText =`
            border: 1px solid #ccc;
        `;
    }
};
