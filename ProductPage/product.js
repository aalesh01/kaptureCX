function showText(id) {
    document.getElementById(id).style.visibility = "visible";
    document.getElementById(id).style.transform = "translateY(-50px)";
    document.getElementById(id).style.color = "black";
    document.getElementById(id).style.userSelect = "none";

}

function hideText(id) {
    document.getElementById(id).style.visibility = "hidden";
    document.getElementById(id).style.transform = "translateY(0)";
    document.getElementById(id).style.color = "#fbf3ec";
    document.getElementById(id).style.userSelect = "none";
}
