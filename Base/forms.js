const areFormInputsFilled = () => {
    let allOk = true;
    for(input of document.getElementsByClassName("input")) {
        if(input.value === "") {
            allOk = false;
            break;
        }
    }
    return allOk; 
}
const toggleSubmit = () => {
    const submitBtn = document.getElementById("add-submit");
    submitBtn.disabled = !areFormInputsFilled();
}

toggleSubmit()

for(input of document.getElementsByClassName("input")) {
    input.addEventListener("change", toggleSubmit);
}

const isFormTextInputFilled = () => {
    let Ok = true;
    textInput = document.getElementById("modify_no_intervention");
    if(textInput.value === ""){
        Ok = false;
    }
    return Ok;
}
const divModify = document.getElementById("nav-modify").firstElementChild
const formModify = document.getElementById("form-modify-alter")

console.log(divModify.childNodes)
const toggleSearch = () => {
    const searchBtn = document.getElementById("modify-search-submit");
    searchBtn.disabled = !isFormTextInputFilled();
    if(!isFormTextInputFilled() && document.getElementById("form-modify-alter") != null){
        divModify.removeChild(formModify)
    }
}


toggleSearch()

const TextInput = document.getElementById("modify_no_intervention");
TextInput.addEventListener("input", toggleSearch);

const isFormDateInputFilled = () => {
    let Ok = true;
    dateInput = document.getElementById("modify_date_incident");
    if(dateInput.value === ""){
        Ok = false;
    }
    return Ok;
}





const hideForm = (evt) => {
    evt.preventDefault()
    if(!DateBtn.disabled || document.getElementById("form-modify-alter") === null){
        divModify.appendChild(formModify)
        const toggleDate = () => {
            const dateBtn = document.getElementById("modify-alter-submit");
            dateBtn.disabled = !isFormDateInputFilled();
        }
        
        toggleDate()
        
        const DateInput = document.getElementById("modify_date_incident");
        DateInput.addEventListener("change", toggleDate);

    }
}

const DateBtn = document.getElementById("modify-search-submit");
DateBtn.addEventListener("click", hideForm)
