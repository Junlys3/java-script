function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.querySelector('#ano')
   var resul = document.querySelector('#resul')
   if(fano.value == 0 || fano.value > ano) {
    window.alert('Tente novamente')
   }else{
    var fsex = document.getElementsByName('nsex')
    var idade = ano - fano.value
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
      genero = 'Homem'
      if(idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', 'bebê-homem.png')
      } else if(idade < 19){
        //jovem
        img.setAttribute('src', 'jovem-homem.png')
      } else if(idade < 50){
        //adulto
        img.setAttribute('src', 'adulto-homem.png')
      } else {
        //idoso
        img.setAttribute('src', 'idoso-homem.png')
      }
      
    }else if (fsex[1].checked){
      genero = 'Mulher'
      if(idade >= 0 && idade < 10){
       //criança
       img.setAttribute('src', 'bebê-mulher.png')
      }else if(idade < 19){
      //jovem
      img.setAttribute('src', 'jovem-mulher.png')
      }else if(idade < 50){
     //adulto
     img.setAttribute('src', 'adulto-mulher.png')
      }else{
      //idoso
      img.setAttribute('src', 'idosa-mulher.png')
      }
    }
    resul.innerHTML = `Detectamos ${genero} com ${idade} anos`
    resul.appendChild(img)
   }
  
}
