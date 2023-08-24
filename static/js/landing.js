const createTaskBtn = document.getElementById("createTaskBtn");
const overlay = document.getElementById("overlay");
const overlayBackground = document.getElementById("overlayBackground");
const saveTaskButton = document.getElementById("saveTaskButton");

function dropFunc() {
    $("#dropdown").toggleClass("show");
}

$(document).on("click", function(event) {
    if(!$(event.target).closest('.drop-btn').length && !$(event.target).closest('.drop-content').length) {
        $(".drop-content").removeClass("show");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
        })
    })
});

createTaskBtn.addEventListener("click", () => {
    overlay.style.display = "block";
    overlayBackground.style.display = "block";
});

saveTaskButton.addEventListener("click", () => {
    // Handle saving the task here
    overlay.style.display = "none";
    overlayBackground.style.display = "none";
});

overlayBackground.addEventListener("click", () => {
    overlay.style.display = "none";
    overlayBackground.style.display = "none";
});
