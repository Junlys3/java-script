function carregar(){
var msg = document.querySelector('#msg')
var img = document.querySelector('#img')
var data = new Date()
//var hora = data.getHours()
var hora = 18
msg.innerHTML =`Agora são ${hora} horas` 
 if (hora >= 0 && hora < 12) {
  img.src = 'manha.png'
  document.body.style.background = "#ebeb0e"
 } else if (hora >= 12 && hora < 18) {
  img.src = 'tarde.png'
  document.body.style.background = "orange"
 } else {
    img.src = 'noite.png'
    document.body.style.background = "black"
 }
}