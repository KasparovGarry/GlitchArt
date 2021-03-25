const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");
  const navLink = document.querySelectorAll(".navlink a");
  const bg = document.querySelector(".navbar-darkBG");

  burger.addEventListener("click", () => {
    nav.classList.toggle("navActive");
    burger.classList.toggle("change");
    bg.classList.toggle("show");
  });

  bg.addEventListener("click", () => {
    nav.classList.toggle("navActive");
    burger.classList.toggle("change");
    bg.classList.toggle("show");
  });

  navLink.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      nav.classList.toggle("navActive");
      burger.classList.toggle("change");
      bg.classList.toggle("show");
    });
  });
};

navSlide();
