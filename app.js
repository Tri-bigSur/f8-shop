var ulElement = document.getElementsByClassName('header__search-history');
ulElement[0].onmousedown = function (e) {
    e.preventDefault();
}
ulElement.onclick = function (e) {
    console.log(e.target);
}
