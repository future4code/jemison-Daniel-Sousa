enum roles {
    USER = 'user',
    ADMIN = 'admin'
}

type usuario ={
    name: string,
    email: string,
    role: roles
}

const listaUsuarios:usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: roles.USER},
	{name: "Ademir", email: "ademir@email.com", role: roles.ADMIN},
	{name: "Aline", email: "aline@email.com", role: roles.USER},
	{name: "Jéssica", email: "jessica@email.com", role: roles.USER},  
	{name: "Adilson", email: "adilson@email.com", role: roles.USER},  
	{name: "Carina", email: "carina@email.com", role: roles.ADMIN}      
] 

function filterEmailAdmin (list:Array<usuario>){
    const filterAdmin = list.filter((usuer)=>{
        if(usuer.role === "admin"){
            return usuer.email
        }
    })
    const mapAdmin = filterAdmin.map(userEmail => userEmail.email)

    return mapAdmin
}

console.log(filterEmailAdmin(listaUsuarios))
