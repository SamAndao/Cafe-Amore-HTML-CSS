const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("hidden__desc");
            entry.target.classList.remove("hidden__desc-head");
            entry.target.classList.remove("hidden__best");
            entry.target.classList.remove("hidden__best-head");
            entry.target.classList.remove("hidden__comment");
           
        }
    })
})

const hiddenElements = document.getElementsByClassName("description__card");
const hiddenHead = document.getElementsByClassName("description__head");
const hiddenBest = document.getElementsByClassName("best-sellers__card");
const hiddenBestHead = document.getElementsByClassName("best-sellers__heading ");
const hiddenComment = document.getElementsByClassName("comments__card");

console.log(hiddenElements);

[...hiddenElements, ...hiddenHead, ...hiddenBest, ...hiddenBestHead, ...hiddenComment].forEach((el) => observer.observe(el));