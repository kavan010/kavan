function AgeCounter() {
    var startYear = new Date("2009-05-17");
    var now = new Date();
    var years = now.getTime() - startYear.getTime();
    var msPerYear = 1000 * 60 * 60 * 24 * 365.25;
    var age = years / msPerYear;
    var ageElement = document.getElementById("years-counter");
    if (ageElement) {
        ageElement.textContent = age.toFixed(9) + " years";
    }
}
setInterval(AgeCounter, 50);
