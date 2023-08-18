function dropFunc() {
    $("#dropdown").toggleClass("show");
}

$document.on("click", function(event) {
    if(!$(event.target).closest('.drop-btn').length) {
        $(".drop-content").removeClass("show");
    }
});
