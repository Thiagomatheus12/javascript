function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    setInterval(() => {
        var data = new Date()
        var hora = data.getHours()
        var minuto = data.getMinutes()
        var segundos = data.getSeconds()
        msg.innerHTML = `Agora são ${hora} horas ${minuto} minutos e ${segundos} segundos.`
        if (hora >= 0 && hora < 12) {
            img.src = 'fotomanha.png'
            document.body.style.background = '#fdc868'
            //bom dia
        } else if (hora >= 12 && hora <= 18) {
            //boa tarde
            img.src = 'fototarde.png'
            document.body.style.background = '#9a4b11'
        } else {
            //boa noite
            img.src = 'fotonoite.png'
            document.body.style.background = '#403253'
        }
    }, 1000);

}

