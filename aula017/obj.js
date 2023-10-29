let amigo = {
    nome: 'Júlio', 
    sexo: 'masculino', 
    peso: 63,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
        }
    }

amigo.engordar(5)
console.log(amigo.peso)