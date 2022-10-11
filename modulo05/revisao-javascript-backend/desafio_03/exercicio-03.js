
const contasCadastradas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]


const login = (email = '', password = '') =>{

    switch(email.includes("@") && password.length >=6){
        case true :
            return "Login efetuado com sucesso"
            break;
        case (email.includes("@")):
            return "E-mail precisa ter @"
            break;
        case (password.length >=6):
            return "Senha precisa ter mais de 6 digitos"
            break;
        default:
    }
    

}

console.log(login("astrodev@labenu.com", "235556"))


