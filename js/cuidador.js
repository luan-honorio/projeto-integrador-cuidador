document.querySelector("#buton").addEventListener('click',()=>{


    var nome = document.getElementById('nome').value
    var cpf = document.getElementById("cpf").value
    var numero = document.getElementById("numero").value
    var cep = document.getElementById("cep").value
    var email = document.getElementById("email").value
    
    if(nome ==  '' | cpf ==  '' |numero ==  '' |cep ==  '' |email ==  '' ){
    
        alert("campos obrigatorios")
    }
    
    })