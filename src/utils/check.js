const check = {
    checkPhone(phone){
        const phoneRegex = /^1[3-9]\d{9}$/;
        if(!phoneRegex.test(phone)){
            return false;
        }
        return true;
    },
    checkEmail(email){
         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         console.log(emailRegex.test(email))
         return emailRegex.test(email);
    }
}

module.exports = check;