let num = document.querySelector('#ni')
let list = document.querySelector('#opcao')
let resul = document.querySelector('#resul')
let valores = []

function numero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}
function nalista(n, l){
 if(l.indexOf(Number(n)) != -1){
  return true
 }else{
   return false
 }
}



function adicionar(){
 if(numero(num.value) && !nalista(num.value, valores)){
  valores.push(Number(num.value))
  let item = document.createElement('option')
  item.text = `Valor ${num.value} Adicionado`
  list.appendChild(item)
  resul.innerHTML = ''
 }else{
  window.alert('Valor já na lista ou invalido')
 }
 num.value = ''
 num.focus()
}


function finalizar(){
  if(valores.length == 0){
    window.alert('Adicione valores')
  }else{
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
      soma += valores[pos]
      if(valores[pos] > maior)
          maior = valores[pos]
      if(valores[pos] < menor)
          menor = valores[pos]
    }
    media = soma/tot

    resul.innerHTML = ''
    resul.innerHTML += `<p> Ao todo ${tot}.</p>`
    resul.innerHTML += `<p> O maior valor foi de ${maior}.</p>`
    resul.innerHTML += `<p> O menor valor foi de ${menor}.</p>`
    resul.innerHTML += `<p> A soma ${soma}.</p>`
    resul.innerHTML += `<p>A media foi ${media}.</p>`
  }
}