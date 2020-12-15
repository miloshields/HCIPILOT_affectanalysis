function generateHeader(){
    // generate logo element
    var tuftslogo = document.createElement('img')
    tuftslogo.src = 'images/Tufts.png'
    tuftslogo.setAttribute("style","position: fixed; top: 10px; left: 10px;"
                            +"margin-left: auto; max-width: 200px;"
                            +" max-height:90px;")
    tuftslogo.setAttribute("alt",'Tufts Logo Image')

    //generate lab name
    var hcilogo = document.createElement('h2')
    hcilogo.innerHTML = "Human-Computer <br/> Interaction Lab"
    hcilogo.setAttribute("style",'position: fixed; top: 10px;'+
                    ' right: 10px; text-align: right; margin-right: auto')

    // put logos in DOM
    document.getElementById('header').appendChild(tuftslogo);
    document.getElementById('header').appendChild(hcilogo);
}

window.onload = (event) => {
    console.log("Page is loaded.")
    generateHeader()
}
