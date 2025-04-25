// timer  hero page
const Hari_H = new Date("2025-04-30T10:00:00").getTime();

const countdown = setInterval(() => {
    const sekarang = new Date().getTime();
    const jarak = Hari_H - sekarang;

    if(jarak < 0) {
        clearInterval(countdown);
        document.getElementById("#countdown").innerHTML = "Hari Bahagia Yang Dinantikan Telah Tiba!";
        return;
    };
    // inisiasi hari jam menit detik
    const hari = Math.floor(jarak / (1000* 60 * 60 *24));
    const jam = Math.floor((jarak % (1000*60*60*24)) / (1000*60*60));
    const menit = Math.floor((jarak % (1000*60*60)) / (1000*60))
    const detik = Math.floor((jarak % (1000*60)) / 1000);


    // console.log(hari);
    // masukan ke dalam html
    document.getElementById("hari").innerHTML = hari.toString().padStart(2, 0) + "H";
    document.getElementById("jam").innerHTML = jam.toString().padStart(2, 0) + "J";
    document.getElementById("menit").innerHTML = menit.toString().padStart(2, 0) + "M";
    document.getElementById("detik").innerHTML = detik.toString().padStart(2, 0) + "D";
}, 1000);


// hamburger menu
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navlist");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if(!navbar.contains(e.target) && !hamburger.contains(e.target)){
        navbar.classList.remove("active");
    };
});


// disable scroll saat pertama dibuka
const rootElement = document.querySelector(":root");

function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function (){
        window.scrollTo(scrollTop, scrollLeft);
    }

    rootElement.style.scrollBehavior = "auto";
}

function enableScroll(){
    window.onscroll = function (){
        rootElement.style.scrollBehavior = "smooth";
        localStorage.setItem('opened', 'true');
    }
}

if(!localStorage.getItem('opened')){
    disableScroll()
}
