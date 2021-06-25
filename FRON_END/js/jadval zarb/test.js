var table = document.createElement("table")

var number = Number(prompt("number: "))

for (let i=1; i<= number; i++){
    let tr = document.createElement("tr")
    for (let j=1; j<=number; j++){
        let td=document.createElement("td")
        td.innerText = i * j
        tr.append(td)
    }
    table.append(tr)
}
let body = document.getElementsByTagName("body")
body[0].append(table)