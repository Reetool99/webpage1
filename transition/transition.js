let angle_icon = document.querySelectorAll(".angle_icon");
const contents = document.querySelectorAll(".accord_content")
let accord_li = document.querySelectorAll(".accordli");


// v is element and i is index number 
accord_li.forEach((v, i) => {
    v.addEventListener("click", () => {
        contents[i].classList.toggle("expand");
        angle_icon[i].classList.toggle("rotate");
    })
})