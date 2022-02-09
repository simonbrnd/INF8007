let remplirTableau = () => {
    let tbody = document.getElementById("interventions-par-poste")
    
    for(element of data.nbInterventionsParPDQ){
        let tr = document.createElement("tr")
        
        tbody.appendChild(tr)

        let td_PDQ = document.createElement("td")
        td_PDQ.textContent = element.PDQ
        tr.appendChild(td_PDQ)

        let td_nbInterventions = document.createElement("td")
        td_nbInterventions.textContent = element.nbInterventions
        tr.appendChild(td_nbInterventions)

        let td_Emplacement = document.createElement("td")
        td_Emplacement.textContent = element.Emplacement
        td_Emplacement.className = "text-right"
        tr.appendChild(td_Emplacement)

        
    }
}
remplirTableau()