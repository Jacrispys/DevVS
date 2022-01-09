function toggle() {
    var element = document.getElementById("hiddenElements");

    if (element.style.visibility === "hidden") {
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
}