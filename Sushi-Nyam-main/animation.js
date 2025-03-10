const scroll = () => {
  // получили все элементы
  const item = document.querySelectorAll(".row-item");

  const boxRolls = document.querySelector(".boxRolls");

  const glow = document.querySelector(".glow");
  // полуичли расстояние до верха страницы
  let boxRollsTop = boxRolls.getBoundingClientRect().top;
  // от glow до верха страницы
  let glowTop = glow.getBoundingClientRect().top;
  // получили высотку экрана
  let windowHeight = window.innerHeight;
  if (boxRollsTop < windowHeight) {
    boxRolls.classList.add("boxRolls-visible");
    glow.classList.add("glow-visible");
  } else {
    boxRolls.classList.remove("boxRolls-visible");
    glow.classList.remove("glow-visible");
  }

  item.forEach((elem) => {
    let boxTop = elem.getBoundingClientRect().top;
    console.log(boxTop);

    let windowHeight = window.innerHeight; // высота экрана
    console.log(windowHeight);

    if (boxTop < windowHeight) {
      elem.classList.add("row-item-visible");
    } else {
      elem.classList.remove("row-item-visible");
    }
  });
};

scroll();
window.addEventListener("scroll", scroll);
