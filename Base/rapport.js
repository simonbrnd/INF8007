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

let surligner = () => {
    
}


let remplirTableau = () => {
    let tbody = document.getElementById("interventions-par-poste")
    let total_cases = 0

    let stats = calculerStatistiques()
    console.log(stats)
    
    for(element of data.nbInterventionsParPDQ){
        let tr = document.createElement("tr")
        let tr_class = ""

        let nbInterventions = element.nbInterventions

        if (nbInterventions == stats.min) {
            tr_class = "bg-success text-light font-weight-bold"
          } else if (nbInterventions == stats.max) {
            tr_class = "bg-danger text-light font-weight-bold" 
          } else if (stats.medianes.includes(nbInterventions)) {
            tr_class = "bg-warning font-weight-bold"
          } 

        tr.className = tr_class
        
        tbody.appendChild(tr)

        let td_PDQ = document.createElement("td")
        td_PDQ.textContent = element.PDQ
        tr.appendChild(td_PDQ)

        let td_Emplacement = document.createElement("td")
        td_Emplacement.textContent = element.Emplacement
        tr.appendChild(td_Emplacement)

        let td_nbInterventions = document.createElement("td")
        td_nbInterventions.textContent = nbInterventions
        td_nbInterventions.className = "text-right"
        total_cases += element.nbInterventions
        tr.appendChild(td_nbInterventions)

    }

    let tr = document.createElement("tr")
    tr.className = "bg-dark text-light"

    tbody.appendChild(tr)

    let th_PDQ = document.createElement("th")
    th_PDQ.textContent = "Total :"
    tr.appendChild(th_PDQ)

    let th_Emplacement = document.createElement("th")
    th_Emplacement.textContent = ""
    tr.appendChild(th_Emplacement)

    let th_nbInterventions = document.createElement("th")
    th_nbInterventions.textContent = total_cases
    th_nbInterventions.className = "text-right"
    tr.appendChild(th_nbInterventions)

}
remplirTableau()