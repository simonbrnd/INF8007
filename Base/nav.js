// Liens clickables

const rapportTab = document.getElementById("nav-report-tab")
const addTab = document.getElementById("nav-add-tab")
const modifyTab = document.getElementById("nav-modify-tab")
const removeTab = document.getElementById("nav-remove-tab")
const chartTab = document.getElementById("nav-chart-tab")

// Divisions de contenu

const rapportDiv = document.getElementById("nav-report")
const addDiv = document.getElementById("nav-add")
const modifyDiv = document.getElementById("nav-modify")
const removeDiv = document.getElementById("nav-remove")
const chartDiv = document.getElementById("nav-chart")

// Dropdown toggle
const nav = document.getElementById("nav");

// Initialisation de listes pour les boucles for

const dropdown = ["nav-add", "nav-modify", "nav-remove"]
const allTab = [rapportTab, addTab, modifyTab, removeTab, chartTab]
const allDiv = [rapportDiv, addDiv, modifyDiv, removeDiv, chartDiv]

// Mise-à-jour de la partie #hash de l’URL suite aux actions de l’utilisateur

let changeUrl = (hash) => {
    window.location.hash = hash
}

for(tab of allTab){
    let hash = tab.hash
    tab.addEventListener("click", () => {changeUrl(hash)})
}

// Extraction de la partie #hash de l’URL et activation du panneau correspondant

let URLchange = (hash) => {
    let changed = false // variable permettant de savoir si un panneau correspond au hash de l'url (sinon, on affiche la division de rapport)
    nav.className = "nav-link dropdown-toggle" // réinitialisation des noms des classes
    for (tab of allTab) {
        if (hash == tab.hash) { // un panneau correspond au hash de l'url
            tab.className += " active"
            changed = true
            if (dropdown.includes(hash.substr(1))) { // il faut activer le dropdown
                nav.className += " active"
            }
        }
        else { // réinitialisation des noms des classes
            if (dropdown.includes(tab.hash.substr(1))) { tab.className = "dropdown-item" }
            else {
                tab.className = "nav-link"
            }
        }
    }
    for (div of allDiv) {
        if (hash.substr(1) == div.id) { // on affiche la division correspondante
            div.className += " show active"
        }
        else { // réinitialisation des noms des classes
            div.className = "tab-pane fade"
        }
    }
    if (!changed) { // cas où on affiche la division de rapport par défaut
        rapportTab.className += " active"
        rapportDiv.className += " show active"
    }


}

window.addEventListener("load", () => { URLchange(window.location.hash) }) // Au chargement de la page
window.addEventListener("hashchange", () => {URLchange(window.location.hash) }) // Au changement du hash (facultatif ?)