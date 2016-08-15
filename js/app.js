TweenLite.from(document.getElementById("intro"), 3, {
    x: 100,
    ease: Cubic.easeOut
});
TweenLite.from(document.getElementById("mail"), 3, {
    y: 100,
    ease: Linear.easeOut
});
TweenLite.from(document.getElementById("myself"), 5, {
    opacity: 0,
    scale: 0,
    padding: 100,
    ease: Cubic.easeOut
})
var h2 = document.getElementsByTagName('h2');
TweenLite.from(h2, 5, {
    opacity: 0,
    y: 50
})
var form = document.getElementsByTagName('form');
TweenLite.from(form, 3, {
    autoAlpha: 0,
    delay: 5
})