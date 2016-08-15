TweenLite.from(document.getElementById("intro"), 3, {
    x: 100,
    ease: Cubic.easeOut
});
TweenLite.from(document.getElementById("mail"), 3, {
    y: 100,
    ease: Cubic.easeOut
});
TweenLite.from(document.getElementById("myself"), 5, {
    opacity: 0,
    scale: 0,
    padding: 100,
    ease: Cubic.easeOut
})