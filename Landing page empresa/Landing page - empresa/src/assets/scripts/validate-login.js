const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    name_user();
    email_user();
    password();
});

const name_user = () => {
    const name = document.getElementById("name-user");
    const nomeErroLogin = document.getElementById("nomeErroLogin");

    // Pegando o valor
    const nome_usuario = name.value;

    nomeErroLogin.textContent = "";

    if (nome_usuario.toLowerCase().length <= 8 || nome_usuario.trim() == "") {
        const textoErroLogin = document.createTextNode("Não é permitido espaço ou nome muito curto");

        name.style.cssText =`
            border: 1px solid #f55353;
        `;
        nomeErroLogin.style.cssText = "display: block;"
        nomeErroLogin.appendChild(textoErroLogin);
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
    const emailErroLogin = document.getElementById("emailErroLogin");

    // Pegando o valor
    const email_usuario = email.value;

    emailErroLogin.textContent = "";

    if (email_usuario.trim() == "") {
        const textoEmailError = document.createTextNode("Não é permitido espaços e número no inicio");

        email.style.cssText =`
            border: 1px solid #f55353;
        `;
        emailErroLogin.style.cssText = "display: block;";
        emailErroLogin.appendChild(textoEmailError);

    } else {
        email.style.cssText =`
            border: 1px solid #ccc;
        `;
    }
}

// Password
const password = () => {
    const password_user = document.getElementById("password-user");
    const passwordErroLogin = document.getElementById("passwordErroLogin");

    // Pegando o valor
    const palavra_passe = password_user.value;
    passwordErroLogin.textContent = "";

    if (palavra_passe.trim() == "") {
        const textoPasswordError = document.createTextNode("Não é permitido espaços");

        password_user.style.cssText =`
            border: 1px solid #f55353;
        `;
        passwordErroLogin.style.cssText = "display: block;";
        passwordErroLogin.appendChild(textoPasswordError);

    }
    
    else if (palavra_passe.trim().length < 8) {
        const textoPasswordError = document.createTextNode("Palavra-passe insegura");

        password_user.style.cssText =`
            border: 1px solid #f55353;
        `;
        passwordErroLogin.style.cssText = "display: block;";
        passwordErroLogin.appendChild(textoPasswordError);

    } else {
        password_user.style.cssText =`
            border: 1px solid #ccc;
        `;
    }
};
