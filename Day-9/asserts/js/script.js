let cards = document.querySelectorAll(".card");
booked = 0;
function flipCard() {
  if (this.classList[1] == "flip-card") {
    setTimeout(() => {
      this.classList.remove("flip-card");
    }, 100);
    booked -= 1;
  } else {
    this.classList.add("flip-card");
    booked += 1;
  }
  document.getElementById("booked").innerHTML = `${booked}`;
  document.getElementById("unbooked").innerHTML = `${36 - booked}`;
}

cards.forEach((card) => card.addEventListener("click", flipCard));
