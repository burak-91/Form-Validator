const form = document.getElementById("form");
const password1Element = document.getElementById("password1");
const password2Element = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");


let isValid = false;
let passwordMatch =false;



eventListener=()=>{
    form.addEventListener("submit",(e)=>processFromData(e))
}
eventListener()





processFromData=(e)=>{
    e.preventDefault();
    
     isValid=form.checkValidity();
   

    if(!isValid){
        message.textContent="Please fill out all fields";
        message.style.color="red";
        messageContainer.style.borderColor="red";
        return;
    }

    if(password1Element.value === password2Element.value){
        passwordMatch=true;
        password1Element.style.borderColor="green";
        password2Element.style.borderColor="green";

    }else{
        passwordMatch=false;
        message.textContent="Make sure passwords match";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        password1Element.borderColor="red";
        password2Element.borderColor="red";
        return;
    }

    if(isValid && passwordMatch){
        message.textContent="Successfully Registered";
        message.style.color="green";
        messageContainer.style.borderColor = "green";
        storageInformation()
    }

    
   
}


storageInformation=()=>{
    const user = {
        name:form.name.value,
        phone: form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value
    }
    console.log(user)
}

