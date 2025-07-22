function AgeCounter() {
    const startYear = new Date("2009-05-17");
    const now = new Date();

    const years = now.getTime() - startYear.getTime();
    const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const age = years / msPerYear;
    const ageElement = document.getElementById("years-counter");
    if (ageElement) {
        ageElement.textContent = age.toFixed(9) + " years";
    }
}
setInterval(AgeCounter, 50);


