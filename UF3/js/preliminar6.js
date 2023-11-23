let user = document.querySelector('#user');
let pass = document.querySelector('#pass');
let send = document.querySelector('#send');

send.addEventListener('click', (e) => {
    e.preventDefault();
    if(vadlidarFormulario() == true) {
        console.log('Formulario correcto');
    } else {
        console.log('Formulario incorrecto');
    }
})

function vadlidarFormulario() {
    //let expReg = /^[A-Za-z]{5,10}$/; //con test de una cadena
    let userValue = user.value;
    if(userValue == '') {
        console.log('El campo usuario no puede estar vacio');
        return false;
    }

    let passValue = pass.value;
    if(passValue == '') {
        console.log('El campo password no puede estar vacio');
        return false;
    }
    
    //si todo se cumple
    return true;
}

/* send.disabled = true;

user.addEventListener('blur', () => {
    if (/^[a-zA-Z]{5-10}$/.test(user)) {
        let usercheck = true;
    } else {
        let usercheck = false;
    }
})

pass.addEventListener('blur', () => {
    if (/^[a-zA-Z]{3-10}$/.test(pass)) {
        let passcheck = true;
    } else {
        let passcheck = false;
    }
})

if (usercheck == true && passcheck == true) {
    send.disabled = false;
} */