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

// Rapport de déclaration d'une intervention

const toggleSubmit = () => {
    const submitBtn = document.getElementById("add-submit"); // Boutton Soumettre le rapport
    submitBtn.disabled = !areFormInputsFilled();
    submitBtn.style.cursor = submitBtn.disabled ? submitBtn.style.cursor = "default" : submitBtn.style.cursor = "pointer";
}

toggleSubmit()

for(input of document.getElementsByClassName("input")) {
    input.addEventListener("change", toggleSubmit);
}

// Mise-à-jour d'un rapport d'intervention

const isFormTextInputFilled = (element_id) => {
    let Ok = true;
    textInput = document.getElementById(element_id);
    if(textInput.value === ""){
        Ok = false;
    }
    return Ok;
}

const divModify = document.getElementById("nav-modify").firstElementChild
const formModify = document.getElementById("form-modify-alter")

const divRemove = document.getElementById("nav-remove").firstElementChild
const formRemove = document.getElementById("form-remove")

const toggleMajSearch = () => {
    const searchBtn = document.getElementById("modify-search-submit");
    searchBtn.disabled = !isFormTextInputFilled("modify_no_intervention");
    searchBtn.style.cursor = searchBtn.disabled ? searchBtn.style.cursor = "default" : searchBtn.style.cursor = "pointer";
    if(!isFormTextInputFilled("modify_no_intervention") && document.getElementById("form-modify-alter") != null){
        divModify.removeChild(formModify)
    }
}

toggleMajSearch()


// Retrait d'un rapport d'intervention

const toggleRemoveSearch = () => {
    const searchBtn = document.getElementById("remove-search-submit");
    searchBtn.disabled = !isFormTextInputFilled("remove_no_intervention");
    searchBtn.style.cursor = searchBtn.disabled ? searchBtn.style.cursor = "default" : searchBtn.style.cursor = "pointer";
    if(!isFormTextInputFilled("remove_no_intervention") && document.getElementById("form-remove") != null){
        divRemove.removeChild(formRemove)
    }
}


toggleRemoveSearch()

const TextInput = document.getElementById("modify_no_intervention");
TextInput.addEventListener("input", toggleMajSearch);

const removeTextInput = document.getElementById("remove_no_intervention");
removeTextInput.addEventListener("input", toggleRemoveSearch);


const isFormDateInputFilled = () => {
    let Ok = true;
    dateInput = document.getElementById("modify_date_incident");
    if(dateInput.value === ""){
        Ok = false;
    }
    return Ok;
}


const hideMajForm = (evt) => {
    evt.preventDefault()
    if(!DateBtn.disabled || document.getElementById("form-modify-alter") === null){
        divModify.appendChild(formModify)

        const DateInput = document.getElementById("modify_date_incident");

        const removeFormAfterClick = (e) => {
            if(isFormDateInputFilled){
                divModify.removeChild(formModify)
                TextInput.value = null
                DateInput.value = null
            }
        }

        const toggleDate = () => {
            const majBtn = document.getElementById("modify-alter-submit");
            majBtn.disabled = !isFormDateInputFilled();
            
            majBtn.style.cursor = majBtn.disabled ? majBtn.style.cursor = "default" : majBtn.style.cursor = "pointer";
            majBtn.addEventListener("click", removeFormAfterClick)
        }
        
        toggleDate()
        
        DateInput.addEventListener("change", toggleDate);

    }
}

const hideRemoveForm = (evt) => {
    evt.preventDefault()
    if(!RemoveDateBtn.disabled || document.getElementById("form-remove") === null){
        divRemove.appendChild(formRemove)

        const removeFormAfterClick = (e) => {
            divRemove.removeChild(formRemove)
            removeTextInput.value = null
        }

        const toggleDate = () => {
            const removeBtn = document.getElementById("remove-submit");
            removeBtn.addEventListener("click", removeFormAfterClick)
        }
        
        toggleDate()

    }
}

const DateBtn = document.getElementById("modify-search-submit");
DateBtn.addEventListener("click", hideMajForm)

const RemoveDateBtn = document.getElementById("remove-search-submit");
RemoveDateBtn.addEventListener("click", hideRemoveForm)