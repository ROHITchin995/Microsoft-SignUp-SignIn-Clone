// validate email address
export const emailValidation = (email)=>{
 return String(email).toLowerCase()
 .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

// validate password if it is blank or less than 8 or greater than 15
export const passwordValidation = (password)=>{
    if(password === ''){
        return {condition: false, message: "Enter password please"}
    }
    if(password.length < 8){
        return {condition: false, message: "Please enter password with more than 8 characters"}

    }if(password.length > 15){
        return {condition: false, message: "Password length can't be greater than 15 characters"}
    }
    return {condition: true, message:"valid password"}
}