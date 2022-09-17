let arr = []
const input = document.getElementById("input-el")
let inputbtn = document.getElementById("input-btn")
let savetab = document.getElementById("save-tab")
let deletebtn = document.getElementById("delete-btn")
const ulel = document.getElementById("ul-el")
const leadsformlocalstorage = JSON.parse(localStorage.getItem("arr"))
if(leadsformlocalstorage){
    arr = leadsformlocalstorage
    render()
}
inputbtn.addEventListener("click", function(){
    arr.push(input.value)
     input.value = ""
     localStorage.setItem("arr", JSON.stringify(arr))
     render(arr)

})
function render(){
    let list = ""
    for(let i=0; i<arr.length; i++){
    list += `<li>
    <a target="_black" href="${arr[i]}">${arr[i]}</a>
    </li>`
    }
    ulel.innerHTML = list
}
deletebtn.addEventListener("click", function(){
    localStorage.clear()
    arr = []
    render(arr)


})
savetab.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow:true} ,function(tabs){
        arr.push(tabs[0].url)
        localStorage.setItem("arr",JSON.stringify(arr))
        render(arr)

    })
 
})



