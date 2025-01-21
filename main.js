const userText = prompt("Text kiriting");
const userTextColor = prompt("Text rangini kiriting");
const userTextpx = prompt("Text kattaligini kiriting sonda (50,25,18)");
const userBgColor = prompt("Body rangini kiriting");
const bodyText = document.createElement("h3");

if(userText == ""){
    bodyText.textContent("Text kiritilmagan")
}else if(userTextColor == ""){
    bodyText.style.color = "red";
    bodyText.textContent == "Rang kiritilmagan";
}else if(userTextpx == ""){
    bodyText.textContent = "??px kiritilmagan";
}else if(userBgColor == ""){
    bodyText.textContent = "Body rangi kiritilmagan";
}else{
    bodyText.textContent = (userText);
    bodyText.style.color = userTextColor;
    bodyText.style.fontSize = `${userTextpx}px`
    document.body.style.backgroundColor = userBgColor;
}
document.body.appendChild(bodyText);