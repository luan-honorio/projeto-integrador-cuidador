var conta = [
  "karine@gmail.com",
  "lucas@gmail.com",
  "luan@gmail.com",
  "veida@gmail.com",
];

document.getElementById("btnlog").addEventListener("click", () => {
  let email = document.querySelector("#loginName").value;
  let password = document.querySelector("#loginSenha").value;

  if (conta.includes(email)) {
   return window.location.href = "../pages/homeCuidador.html"
    

  } else {
    alert("usuario existe");
  }
});
