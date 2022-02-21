const adaptCursor = (btnDiv) => {
    if(btnDiv.disabled){
        btnDiv.style.cursor = "default"
    }
    else{
        btnDiv.style.cursor = "pointer"
    }
}

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
    submitBtn.addEventListener("mouseover", () => {adaptCursor(submitBtn)})
}

toggleSubmit()

for(input of document.getElementsByClassName("input")) {
    input.addEventListener("change", toggleSubmit);
}

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
    if(!isFormTextInputFilled("modify_no_intervention") && document.getElementById("form-modify-alter") != null){
        divModify.removeChild(formModify)
    }
}

const toggleRemoveSearch = () => {
    const searchBtn = document.getElementById("remove-search-submit");
    searchBtn.disabled = !isFormTextInputFilled("remove_no_intervention");
    if(!isFormTextInputFilled("remove_no_intervention") && document.getElementById("form-remove") != null){
        divRemove.removeChild(formRemove)
    }
}

toggleMajSearch()
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
                //e.preventDefault()
                divModify.removeChild(formModify)
                TextInput.value = null
                DateInput.value = null
            }
        }

        const toggleDate = () => {
            const majBtn = document.getElementById("modify-alter-submit");
            majBtn.disabled = !isFormDateInputFilled();
            majBtn.addEventListener("click", removeFormAfterClick)
            majBtn.addEventListener("mouseover", () => {adaptCursor(majBtn)})
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
            //e.preventDefault()
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
DateBtn.addEventListener("mouseover", () => {adaptCursor(DateBtn)})
DateBtn.addEventListener("click", hideMajForm)

const RemoveDateBtn = document.getElementById("remove-search-submit");
RemoveDateBtn.addEventListener("mouseover", () => {adaptCursor(RemoveDateBtn)})
RemoveDateBtn.addEventListener("click", hideRemoveForm)