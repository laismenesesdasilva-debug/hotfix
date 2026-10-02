const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

if (nome === "" || email === "" || senha === "") {

 alert("Preencha todos os campos!");
 return false;

}

// Salva o nome do usuário
sessionStorage.setItem("nome", nome);

// Salva o horário de início da sessão
sessionStorage.setItem("inicioSessao", Date.now());

window.location.href = "index.html";

return false;
    
</script>
```
