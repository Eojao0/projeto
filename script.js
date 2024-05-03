function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = documento.querySelector("#profile img")
    
    if (html.classList.contains("light")) {

       img.setAttribute("src", "./assets/avatars.png")
        
    } else {
            img.setAttribute("src","./assets/avatar.png")
        }

    
    }

