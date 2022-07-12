const up1 = document.querySelector(`#up1`);
const up2 = document.querySelector(`#up2`);
const down1 = document.querySelector(`#down1`);
const down2 = document.querySelector(`#down2`);
const toggleImage = document.querySelectorAll(`.scoreToggle`);
const winner = document.createElement(`div`)
winner.setAttribute(`id` , `winner`)
   
// <-------------------------------- Variables --------------------------------->
let chances = 3;
let p1Score = 0;
let p2Score = 0;
// <-------------------------------- /Variables --------------------------------->

// <-------------------------------- Extracting Chances --------------------------------->

  const select = document.querySelector(`#uptoSelector`);
  select.addEventListener(`click`, (event) => {
    chances = Number(event.target.value);
  });

// <-------------------------------- /Extracting Chances --------------------------------->

// <-------------------------------- Scores Updation --------------------------------->

  up1.addEventListener(`click`, () => {
    const p1Display = document.querySelector(`#p1Display`);
    if (p1Score < chances && p2Score < chances) {
      p1Score += 1;
      p1Display.innerText = p1Score;
    }
    if (p1Score === chances) {
      document.querySelector(`#wrapper`).style.background = `#fca417 url("https://i.gifer.com/XZ5V.gif") center/cover`
      p1Display.style.color = `green`
      up1.disabled = true;
      up2.disabled = true;
      down1.disabled = true;
      down2.disabled = true;
      for (let image of toggleImage) {
        image.style.opacity = `0.5`
      }
      winner.innerText = `PlayerOne Won!`
      p2Display.after(winner)
    }
  });
  down1.addEventListener(`click`, () => {
    if (p1Score >= 1) {
      p1Score -= 1;
      p1Display.innerText = p1Score;
    } else {
      alert(`Scores Can't be Negitive`);
    }
  });
  up2.addEventListener(`click`, () => {
    const p2Display = document.querySelector(`#p2Display`);
    if (p1Score < chances && p2Score < chances) {
      p2Score += 1;
      p2Display.innerText = p2Score;
    }
    if (p2Score === chances) {
      document.querySelector(`#wrapper`).style.background = `#fca417 url("https://i.gifer.com/XZ5V.gif") center/cover`
      p2Display.style.color = `green`
      up1.disabled = true;
      up2.disabled = true;
      down1.disabled = true;
      down2.disabled = true;
      for (let image of toggleImage) {
        image.style.opacity = `0.5`
      }
      winner.innerText = `PlayerTwo Won!`
      p2Display.after(winner)
    }
  });
  down2.addEventListener(`click`, () => {
    if (p2Score >= 1) {
      p2Score -= 1;
      p2Display.innerText = p2Score;
    } else {
      alert(`Scores Can't be Negitive`);
    }
  });

// <-------------------------------- /Scores Updation --------------------------------->

// <-------------------------------- /Reset --------------------------------->
  const reset = document.querySelector(`#reset`);
  reset.addEventListener(`click`, () => {
    p1Score = 0;
    p2Score = 0;
    select.value = 3;
    p1Display.innerText = `0`;
    p2Display.innerText = `0`;
    up1.disabled = false;
    up2.disabled = false;
    down1.disabled = false;
    down2.disabled = false;
    for (let image of toggleImage) {
      image.style.opacity = `1`
    }
    winner.remove()
    p1Display.style.color = `black`
    p2Display.style.color = `black`
    document.querySelector(`#wrapper`).style.background = `#fca417`
  });
// <-------------------------------- /Reset --------------------------------->


