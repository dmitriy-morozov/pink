$(document).ready(function () {
    $(".main-nav__header").removeClass("main-nav__header--no-js"), $(".main-nav__list").removeClass("main-nav__list--no-js"), $(".main-nav__button").click(function (n) {
        $(".main-nav__list").toggleClass("main-nav__list--closed", 5e3), $(".main-nav__button").toggleClass("main-nav__button--close"), $(".main-nav__header").toggleClass("main-nav__header--open")
    })
});