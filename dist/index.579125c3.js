document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        scrollFunction();
    };
    function scrollFunction() {
        if (window.scrollY > 100) document.getElementById("scrollTopButton").style.display = "block";
        else document.getElementById("scrollTopButton").style.display = "none";
    }
    function scrollTopFunction() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    document.getElementById("scrollTopButton").addEventListener("click", scrollTopFunction);
});

//# sourceMappingURL=index.579125c3.js.map
