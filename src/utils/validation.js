export const checkvaliddata=(email,password)=>{
    const emailRegexvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!emailRegexvalid) return "Email is not valid"
    if(!passwordRegex) return "Password is not valid"


    return null
    

}