










// functions to generate aspects of pages

//should be used upon initial entry of the site
//  TODO make sure password and ID usage are secure - maybe just
//  create throwaways for people to use.
function generateLogin(){

    var loginObj = document.createElement('FORM')
    loginObj.name = "login";
    loginObj.method = "POST";
    loginObj.action = "TODO.TODO";

    var loginTextObj = document.createElement('h2')
    loginTextObj.innerHTML = "Please login below:"

    var usernameObj = document.createElement('input')
    usernameObj.type = "TEXT";
    usernameObj.name = "username";
    usernameObj.placeholder = "Tufts ID"
    usernameObj.required = true;

    var passwordObj = document.createElement('input')
    passwordObj.type = "password";
    passwordObj.name = "password";
    passwordObj.placeholder = "Study Password"
    passwordObj.required = true;

    // TODO prevent automatic redirect from this button (maybe in node js)
    var submitObj = document.createElement('button');
    submitObj.type = "submit";
    submitObj.innerHTML = "Login";
    submitObj.id = "btn"

    loginObj.appendChild(loginTextObj);
    loginObj.appendChild(usernameObj);
    loginObj.appendChild(document.createElement('br'))
    loginObj.appendChild(passwordObj);
    loginObj.appendChild(document.createElement('br'))
    loginObj.appendChild(submitObj);

    var target = document.getElementById("center")
    target.appendChild(loginObj);
}

//function to generate informational logos
// (likely called on most pages)
function generateHeader(){
    // generate logo element
    var tuftsLogoObj = document.createElement('img')
    tuftsLogoObj.src = 'images/Tufts.png'
    tuftsLogoObj.setAttribute("style","position: fixed; top: 10px; left: 10px;"
                            +"margin-left: auto; max-width: 200px;"
                            +" max-height:90px;")
    tuftsLogoObj.setAttribute("alt",'Tufts Logo Image')

    //generate lab name
    var hciLogoObj = document.createElement('h2')
    hciLogoObj.innerHTML = "Human-Computer <br/> Interaction Lab"
    hciLogoObj.setAttribute("style",'position: fixed; top: 10px;'+
                    ' right: 10px; text-align: right; margin-right: auto')

    // put logos in DOM
    document.getElementById('header').appendChild(tuftsLogoObj);
    document.getElementById('header').appendChild(hciLogoObj);
}

window.onload = (event) => {
    console.log("Page is loaded.")
    generateHeader();
    generateLogin();
}
