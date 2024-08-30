function logar() {
    let name = document.getElementById("name").value;
    let pass = document.getElementById("password").value;

    const user = {
        usuario: name,
        senha: pass
    };

    // localStorage.setItem('users', JSON.stringify(user))
    const users = JSON.parse(localStorage.getItem('users'));
    // console.log(`Objeto:\nUsúario: ${user.usuario}\nSenha: ${user.senha}`);
    console.log(users);
}