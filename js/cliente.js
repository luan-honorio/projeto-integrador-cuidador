
var conta = [

]
var senhas =[

]


document.getElementById("buton").addEventListener('click',()=>{


var nome = document.getElementById('nome').value
var cpf = document.getElementById("cpf").value
var cep = document.getElementById("cep").value
var email = document.getElementById("email").value
var senha = document.getElementById("senha").value

let regex =  '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$' 


if(nome ==  '' | cpf ==  ''|cep ==  '' |email ==  ''|senha ==  '' ){

    document.querySelector('.div-al').style.display = "block";
}
else if(!senha == regex){
    document.querySelector('.div-al2').style.display = "block";
}

else{
    
    conta.push(email)
    senhas.push(senha)
    console.log(conta)
    console.log(senhas)
    document.querySelector('.mod').style.display = "block";
}
   

})










