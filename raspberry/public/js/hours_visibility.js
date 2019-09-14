const currentTime = new Date();
const hours = currentTime.getHours();
const newButton = document.getElementById("downloadList");

if(hours>22 && hours<24) {
    newButton.classList.remove("invisible")
}