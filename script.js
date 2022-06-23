const button = ()=> {
    const mobileMenu = document.querySelector(".mobile-nav");
    mobileMenu.classList.toggle("active")
}

const openMenu = document.querySelector(".fa-solid")
openMenu.addEventListener("click", button)