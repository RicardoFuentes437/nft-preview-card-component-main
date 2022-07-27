var overlay = document.querySelector('.overlay')
var image = document.querySelector('.image-equilibrium')
var title = document.querySelector('.card-title')
var creator = document.querySelector('.creator-name')

image.addEventListener('mouseover', (event) => {
    overlay.style["display"] = "flex"
    image.style["cursor"] = "pointer"
})

image.addEventListener('mouseout', (event) => {
    overlay.style["display"] = "none"
})

title.addEventListener('mouseover', (event) => {
    title.style["color"] = "hsl(178, 100%, 50%)"
    title.style["cursor"] = "pointer"
})

title.addEventListener('mouseout', (event) => {
    title.style["color"] = "white"
})

creator.addEventListener('mouseover', (event) => {
    creator.style["color"] = "hsl(178, 100%, 50%)"
    creator.style["cursor"] = "pointer"
})

creator.addEventListener('mouseout', (event) => {
    creator.style["color"] = "white"
})

