const playground = document.querySelector("#playground")   
playground.addEventListener("click", (e) => {   
    const circle = document.createElement("div")   
    circle.classList.add("circle")   
    circle.style.left = e.clientX + "px"   
    circle.style.top = e.clientY + "px"   
    playground.append(circle)   
});



