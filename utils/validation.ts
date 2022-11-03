  
  export const isNotEmpty = (value: string) => {
    if(value==""){
      return "required field"
    }
    else{
      return ""
    }
  }


    export const isEmail = (value: string) => { 
        if(value==""){
            return "Required field"
        }
        else{
            if(!value.includes("@")){
            return "Invalid email"
            }
            else{
            return ""
            }
        }
        }

    export const isPassword = (value: string) => {
        if(value==""){
            return "Required field"
        }
        else{
            if(value.length<8){
            return "Password must be at least 8 characters"
            }
            else{
            return ""
            }
        }
        }
    
    export const isPasswordMatch = (value: string, value2: string) => {
        if(value==""){
            return "Required field"
        }
        else{
            if(value!=value2){
            return "Passwords do not match"
            }
            else{
            return ""
            }
        }
        }

    