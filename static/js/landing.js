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
})
