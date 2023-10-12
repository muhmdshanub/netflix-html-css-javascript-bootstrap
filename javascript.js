document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var scroll = window.scrollY || window.pageYOffset;

        var navbar = document.querySelector(".netflix-navbar");
        if (scroll > 100) {
            navbar.style.background = "#0C0C0C";
        } else {
            navbar.style.background = "transparent";
        }
    });
});
