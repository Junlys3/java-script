function tabuada (){
    let num = document.querySelector('#inum')
    let tab = document.querySelector('#iselect')
  if (num.value.length == 0){
    window.alert('Digite um número!')
    

}else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while (c <= 10){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}` 
        item.value = `tab ${c}`
        tab.appendChild(item)
        c++
    }
 }
}