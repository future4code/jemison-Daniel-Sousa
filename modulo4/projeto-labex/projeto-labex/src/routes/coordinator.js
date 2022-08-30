

export const goToListTripsPage = (navigate) => {
    navigate("/trips/list")
}

export const gotoApplicationFormPage = (navigate) =>{
    navigate("/trips/application")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToAdminHomePag = (navigate) =>{
    navigate("/admin/trips/list")
}

export const goToCreateTripPage = (navigate) =>{
    navigate("/admin/trips/create")
}

export const goToTripDetailsPage = (navigate) =>{
    navigate("/admin/trips/:id")
}


export const goToHome = (navigate) =>{
    navigate("/")
}
export const goUut = (navigate) =>{
    navigate(-1)
}