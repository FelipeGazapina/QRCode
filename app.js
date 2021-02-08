// pegar informação
const mensagem = document.querySelector('.texto')
const github = document.querySelector('.github')
// pegar botões
const cancel = document.querySelector('.cancel')
const create = document.querySelector('.create')
const print = document.querySelector('.print')

// print QR Code
const qrcode = document.querySelector('.qrcode')
const titulo = document.querySelector('.inserido')

// addEventListener Functions
cancel.addEventListener('click',e => {
    
    e.preventDefault()

    mensagem.value = ''
    titulo.innerHTML = ''
    qrcode.innerHTML = ''
    
})

create.addEventListener('click', e =>{
    e.preventDefault()

    qrcode.innerHTML = ''
    if(mensagem.value[0] == '@'){
        titulo.innerHTML = `http://twitter.com/${mensagem.value.substring(1)}`
        new QRCode(qrcode, {
            text: `http://twitter.com/${mensagem.value.substring(1)}`,
            width: 250,
            height: 250,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        })
    }else if(github.checked){
        titulo.innerHTML = `http://github.com/${mensagem.value}`
        new QRCode(qrcode, {
            text: `http://github.com/${mensagem.value}`,
            width: 250,
            height: 250,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        })
    }else{
        titulo.innerHTML = mensagem.value
        new QRCode(qrcode, {
            text: mensagem.value,
            width: 250,
            height: 250,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        })
    }
    
})

print.addEventListener('click', e =>{
    e.preventDefault()
    if(qrcode.value != ''){
        window.print()
    }
    
})