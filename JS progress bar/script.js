const BAR = document.getElementById("progress-bag");

window.addEventListener("scroll", function (e) {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHigth = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let visibilitiScroll = scrollTop / scrollHigth * 100;
    BAR.style.width = visibilitiScroll + "%";
})