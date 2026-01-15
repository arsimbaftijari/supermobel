let scrollBtn = document.getElementById('scrollToTop');

window.onscroll = function() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "flex";
    }

    else {
        scrollBtn.style.display = "none";
    }
}

scrollBtn.onclick = function() {
    window.scrollTo({
        top: 0
    })
}
