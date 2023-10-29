function contar() {
    let ini = document.querySelector('#iini')
    let fim = document.querySelector('#iime')
    let passo = document.querySelector('#ipass')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
      window.alert('Erro')  
    } else {
      res.innerHTML ='Contando: '
      let i = Number(ini.value)
      let fi = Number(fim.value)
      let pass = Number(passo.value)
      if(i < fi){
      for(let c = i; c <= fi; c += pass){
       res.innerHTML += `${c} \u{1F449}`
       }
      }else {
        for(let c = i; c >= fi; c -= pass){
          res.innerHTML += `${c} \u{1F449}`
        }
      }
        res.innerHTML += `\u{1F3C1}`
      
 }
}