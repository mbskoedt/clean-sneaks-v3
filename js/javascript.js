    <!-- tilhører loading screen -->

    function hideLoader() {
        $('#loading').hide();
    }

    $(window).ready(hideLoader);

    // Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
    setTimeout(hideLoader, 20 * 1000);

    /* Source: https://www.w3schools.com/w3css/w3css_slideshow.asp 

    Anbefalingsslider

    */

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("anbefaling");
        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }



    /* billedeboks */

    function myFunction(imgs) {
        // Get the expanded image
        var expandImg = document.getElementById("expandedImg");
        // Get the image text
        var imgText = document.getElementById("imgtext");
        // Use the same src in the expanded image as the image being clicked on from the grid
        expandImg.src = imgs.src;
        // Use the value of the alt attribute of the clickable image as text inside the expanded image
        imgText.innerHTML = imgs.alt;
        // Show the container element (hidden with CSS)
        expandImg.parentElement.style.display = "block";
    }
