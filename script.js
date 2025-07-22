function AgeCounter() {
    var startYear = new Date("2009-05-17");
    var now = new Date();
    var years = now.getTime() - startYear.getTime();
    var msPerYear = 1000 * 60 * 60 * 24 * 365.25;
    var age = years / msPerYear;
    var ageElement = document.getElementById("years-counter");
    if (ageElement) {
        ageElement.textContent = "I am " + age.toFixed(9) + " years";
    }
}
setInterval(AgeCounter, 50);
function renderManualCarousel() {
    var videos = [
        {
            id: "_YbGWoUaZg0",
            title: "How I Made a Discord Bot in 24 Hours",
            thumbnail: "https://img.youtube.com/vi/_YbGWoUaZg0/mqdefault.jpg",
            url: "https://www.youtube.com/watch?v=_YbGWoUaZg0"
        },
        {
            id: "M52vKLkx9iQ",
            title: "React Portfolio Website Tutorial",
            thumbnail: "https://img.youtube.com/vi/M52vKLkx9iQ/mqdefault.jpg",
            url: "https://www.youtube.com/watch?v=M52vKLkx9iQ&t=137s"
        },
        {
            id: "bMafjv76YJk",
            title: "Building a Game in JavaScript",
            thumbnail: "https://img.youtube.com/vi/bMafjv76YJk/mqdefault.jpg",
            url: "https://www.youtube.com/watch?v=bMafjv76YJk&t=82s"
        },
        {
            id: "8HX_T3ThhOM",
            title: "My First Hackathon Experience",
            thumbnail: "https://img.youtube.com/vi/8HX_T3ThhOM/mqdefault.jpg",
            url: "https://www.youtube.com/watch?v=8HX_T3ThhOM&t=30s"
        },
        {
            id: "wdbPBMiG4yY",
            title: "Learning TypeScript Fast",
            thumbnail: "https://img.youtube.com/vi/wdbPBMiG4yY/mqdefault.jpg",
            url: "https://www.youtube.com/watch?v=wdbPBMiG4yY&t=165s"
        },
        {
            id: "Wms0TnTzi9I",
            title: "Deploying to GitHub Pages",
            thumbnail: "https://img.youtube.com/vi/Wms0TnTzi9I/mqdefault.jpg",
            url: "https://www.youtube.com/watch?v=Wms0TnTzi9I&t=653s"
        }
    ];
    var carousel = document.getElementById("video-carousel");
    if (!carousel)
        return;
    carousel.innerHTML = "";
    videos.forEach(function (video) {
        var div = document.createElement("div");
        div.className = "carousel-item";
        div.innerHTML = "\n            <a href=\"".concat(video.url, "\" target=\"_blank\">\n                <img src=\"").concat(video.thumbnail, "\" alt=\"").concat(video.title, "\">\n                <div class=\"carousel-item-title\">").concat(video.title, "</div>\n            </a>\n        ");
        carousel.appendChild(div);
    });
}
renderManualCarousel();
