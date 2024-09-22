const scrollContainer = document.querySelector(".gallery");
const back = document.querySelector("#backbtn");
const next = document.querySelector("#nextbtn");

scrollContainer.addEventListener("wheel" , e => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "auto";

})

    nextbtn.addEventListener("click" , () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
    })

    backbtn.addEventListener("click" , () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 900;
    })