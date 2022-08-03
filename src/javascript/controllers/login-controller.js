import { adminServices } from "../services/login-services.js";

const loginForm = document.querySelector('[data-login]')
const errMsg = document.querySelector('.error-message');

const obtainAdmins = async ()=>{
    const emailInput = loginForm.querySelector('[data-email]');
    const passwordInput = loginForm.querySelector('[data-password]');

    try{
        const admin = await adminServices.adminsList();
        admin.forEach(({email, password}) => {
            if(emailInput.value === email && passwordInput.value === password){
                window.location.href = '/administrador.html';
            }else{
                errMsg.classList.add(('show-err'));
                emailInput.classList.add('error');
                passwordInput.classList.add('error');

                setTimeout(function(){
                    errMsg.classList.add('hide-err');
                    emailInput.classList.remove('error');
                    passwordInput.classList.remove('error');

                    emailInput.value = '';
                    passwordInput.value= '';
                },1200);
            }
        });

    }catch(error){
        console.log(error);
    }
}

loginForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    obtainAdmins();
})