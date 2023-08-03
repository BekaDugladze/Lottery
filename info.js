const info = document.getElementById("info");
const x = document.getElementById("X");
const rules = document.getElementById("rules")

info.onclick = () => {
    rules.style.opacity = 1;
    rules.style.visibility = 'visible';
}

x.onclick = () => {
    rules.style.opacity = 0;
    rules.style.visibility = 'hidden';
}