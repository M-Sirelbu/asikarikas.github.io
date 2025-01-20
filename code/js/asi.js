document.addEventListener("DOMContentLoaded", function() {
    if (document.cookie == "") {
        document.cookie = "b1";
    }
    document.getElementById(document.cookie).className = "active";
    document.getElementById(document.cookie+"-view").hidden = false;
});
function buttonClick(id) {
    if (document.cookie != id) {
        document.getElementById(document.cookie).className = "inactive";
        document.getElementById(document.cookie+"-view").hidden = true;
        document.getElementById(id).className = "active";
        document.getElementById(id+"-view").hidden = false;
        document.cookie = id;
    }
}