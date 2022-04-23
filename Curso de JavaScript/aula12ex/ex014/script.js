function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Bom dia <p>Agora são <strong>${hora} Horas</strong>.</p>`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = `manhã.jpg`
        document.body.style.background = '#A69F75'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        msg.innerHTML = `Bom Tarde! <p>Agora são <strong>${hora} Horas</strong>.</p>`
        img.src = `tarde.jpg`
        document.body.style.background = '#714B88'
    } else {
        //Boa Noite!
        msg.innerHTML = `Bom Noite! <p>Agora são <strong>${hora} Horas</strong>.</p>`
        img.src = `noite.jpg`
        document.body.style.background = '#27221F'
    }
    
}
