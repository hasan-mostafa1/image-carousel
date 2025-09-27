function createNavCircles() {
  const slides = document.querySelectorAll(".slides img");
  const navCirclesList = document.querySelector(".slider ul");
  slides.forEach((slide, index) => {
    const li = document.createElement("li");
    const circleBtn = document.createElement("button");
    circleBtn.classList.add("circle");
    if (index === 0) {
      circleBtn.classList.add("fill");
    }
    circleBtn.dataset.slideOrder = index + 1;
    li.appendChild(circleBtn);
    navCirclesList.appendChild(li);
  });
}

export { createNavCircles };
