function setCarousel(containerId, prevBtnId, nextBtnId) {
    const container = document.getElementById(containerId);
    document.getElementById(nextBtnId).addEventListener("click", () => {
    container.scrollBy({ left: 320, behavior: "smooth" });
    });
    document.getElementById(prevBtnId).addEventListener("click", () => {
    container.scrollBy({ left: -320, behavior: "smooth" });
    });
}

setCarousel("sanguches", "prevSanguches", "nextSanguches");
setCarousel("platos", "prevPlatos", "nextPlatos");
setCarousel("pastas", "prevPastas", "nextPastas");

const bg = document.getElementById("animated-bg");
let hue = 0;
setInterval(() => {
    hue = (hue + 1) % 360;
    bg.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 60%), hsl(${(hue + 60) % 360}, 70%, 60%))`;
}, 60);
