function enviar() {

    let emailInput = document.getElementById("email")
    let email = emailInput.value
    
     if (email.value == null ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
     } else {

         window.alert('tudo ok Prossiga' + email)
     }
}