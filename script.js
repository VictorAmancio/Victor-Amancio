function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "/assets/avatar.png")
  }
}

window.sr = ScrollReveal({ reset: true })
sr.reveal('.row', { duration: 2000 })
sr.reveal('.row', {rotate: { x: 80, y:0, z:0 }, duration: 3000});

