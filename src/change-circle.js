function changeCircle(currentSlideOrder, targetSlideOrder) {
  const currentCircle = document.querySelector(
    `.slider .circle[data-slide-order='${currentSlideOrder}']`,
  );
  currentCircle.classList.remove("fill");

  const nextCircle = document.querySelector(
    `.slider .circle[data-slide-order='${targetSlideOrder}']`,
  );
  nextCircle.classList.add("fill");
}

export { changeCircle };
