const rapportTab = document.getElementById("nav-report-tab")
const addTab = document.getElementById("nav-add-tab")
const modifyTab = document.getElementById("nav-modify-tab")
const removeTab = document.getElementById("nav-remove-tab")
const chartTab = document.getElementById("nav-chart-tab")

const allTab = [rapportTab, addTab, modifyTab, removeTab, chartTab]

const changeUrl = () => {
    console.log("changeUrl triggered")

    for(tab of allTab){
        console.log(tab.className)
        if(tab.className.includes("active")){
            console.log("This tab is active")
            window.location.href = tab.href
            break
        }
    }
}

rapportTab.addEventListener("click", changeUrl)
chartTab.addEventListener("click", changeUrl)
addTab.addEventListener("click", changeUrl)
removeTab.addEventListener("click", changeUrl)
modifyTab.addEventListener("click", changeUrl)

//rapportTab.addEventListener('shown.bs.tab', changeUrl);