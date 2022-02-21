let calculerStatistiques = () => {
    let list_of_values = []

    for(element of data.nbInterventionsParPDQ){
        list_of_values.push(element.nbInterventions)
    }

    list_of_values.sort(function (a, b) {  return a - b;  })

    let min = list_of_values[0]
    let max = list_of_values[list_of_values.length - 1]
    let med_index = list_of_values.length/2
    let meds = []

    if(Number.isInteger(med_index)){
        meds.push(list_of_values[med_index-1])
        meds.push(list_of_values[med_index])
    }
    else{
        meds.push(list_of_values[Math.ceil(med_index)])
    }

    return {"min" : min, "max" : max, "medianes" : meds}
}

let surligner = (stats) => {

    let tr_rows = document.getElementsByName("dataframe-row")
    let td_nb_inters = document.getElementsByName("nb-interventions")
    let td_emplacements = document.getElementsByName("emplacement")

    for(i in td_nb_inters){
        let tr_row = tr_rows[i]
        let td_nb_inter = td_nb_inters[i]
        let td_emplacement = td_emplacements[i]
        let nbInterventions = td_nb_inter.textContent
        let tr_class = ""
        
        if (nbInterventions == stats.min) {
            tr_class = "bg-success text-light font-weight-bold"
            let badge = document.createElement("span")
            badge.setAttribute("class", "badge badge-light text-wrap")
            badge.textContent = "région la moins touchée"
            td_emplacement.appendChild(badge)
          } else if (nbInterventions == stats.max) {
            tr_class = "bg-danger text-light font-weight-bold" 
            let badge = document.createElement("span")
            badge.setAttribute("class", "badge badge-light text-wrap")
            badge.textContent = "région la plus touchée"
            td_emplacement.appendChild(badge)
          } else if (stats.medianes.includes(parseInt(nbInterventions))) {
            tr_class = "bg-warning font-weight-bold"
            let badge = document.createElement("span")
            badge.setAttribute("class", "badge badge-light text-wrap")
            badge.textContent = "région moyennement touchée"
            td_emplacement.appendChild(badge)
          } 

        tr_row.className = tr_class
    } 

}


let remplirTableau = () => {
    let tbody = document.getElementById("interventions-par-poste")
    let total_cases = 0
    
    // Remplissage dynamique de l'ensemble des colonnes du tableau
    for(element of data.nbInterventionsParPDQ){
        let tr = document.createElement("tr")
        tr.setAttribute("name", "dataframe-row")
        tbody.appendChild(tr)

        let td_PDQ = document.createElement("td")
        td_PDQ.setAttribute("name", "pqd")
        td_PDQ.textContent = element.PDQ
        tr.appendChild(td_PDQ)

        let td_Emplacement = document.createElement("td")
        td_Emplacement.setAttribute("name", "emplacement")
        td_Emplacement.textContent = element.Emplacement + " "
        tr.appendChild(td_Emplacement)

        let td_nbInterventions = document.createElement("td")
        td_nbInterventions.textContent = element.nbInterventions
        td_nbInterventions.setAttribute("name", "nb-interventions")
        td_nbInterventions.className = "text-right"
        total_cases += element.nbInterventions
        tr.appendChild(td_nbInterventions)
    }

    // Ajout de la dernière colonne "Total"
    let tr = document.createElement("tr")
    tr.className = "bg-dark text-light"

    tbody.appendChild(tr)

    let th_PDQ = document.createElement("th")
    th_PDQ.textContent = "Total :"
    tr.appendChild(th_PDQ)

    let th_Emplacement = document.createElement("th")
    tr.appendChild(th_Emplacement)

    let th_nbInterventions = document.createElement("th")
    th_nbInterventions.textContent = total_cases
    th_nbInterventions.className = "text-right"
    tr.appendChild(th_nbInterventions)

    // Calcul des statistiques des données et surlignage des colonnes particulières
    let statistiques = calculerStatistiques()
    window.setTimeout(() =>  {surligner(statistiques)}, 1000)

    // Ajout du texte au niveau du footer
    let h6_footer = document.getElementById("derniere-mise-a-jour")
    let dateDebut = data.dateDebut
    let dateMAJ = data.dateMAJ
    let footer_text_content = "* " + dateDebut + " à aujourd'hui, dernière mise à jour des données : " + dateMAJ 
    h6_footer.textContent = footer_text_content
    h6_footer.setAttribute("class", "font-weight-bold")
}
remplirTableau()