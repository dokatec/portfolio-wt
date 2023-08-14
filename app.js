let projects = document.querySelectorAll(".project-card");

projects.forEach((card, index) => {
  let closeBtn = card.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    card.classList.remove("active");
  });

  card.addEventListener("click", (e) => {
    console.log(e);
    if (e.pointerId[1] != closeBtn) {
      card.classList.add("active");
    }
  });
});

/**
 * 
 * if (e.path != closeBtn) {
      projects.forEach((item, i) => {
        if (i != index) {
          item.classList.add("blur");
        }
      });

      */
