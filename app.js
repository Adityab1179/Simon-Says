let gameseq = [];
let userseq = [];
let h2 = document.querySelector("h2");
let started = false;
let level = 0;
let btns = document.querySelectorAll(".box");
document.addEventListener("keypress", start);
function start(){
  if (started == false) {
    level=0;
    console.log("started");
    started = true;
    setTimeout(() => {
      levelUp();
    }, 500);
  }
}
function levelUp() {
  level++;
  h2.innerText = `level ${level}`;
  let n = Math.floor(Math.random() * 4);
  blink(btns[n]);
  gameseq.push(btns[n].getAttribute("id"));
  console.log(gameseq);
  userseq=[];
}

function blink(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function btnclicked() {
  if (started) {
    let btn = this;
    userseq.push(btn.getAttribute("id"));
    btn.classList.add("flash-green");
    setTimeout(function () {
      btn.classList.remove("flash-green");
    }, 250);
    console.log(userseq);
    validate(userseq.length - 1);
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", btnclicked);
});

function validate(size) {
    if (userseq[size] === gameseq[size]) {
      if (userseq.length === gameseq.length) {
        setTimeout(levelUp, 1000);
        console.log("right");
      }
    } else {
      h2.innerText = "Game Over! Press any key to start";
      started = false;
      document.removeEventListener("keypress", start);
      document.addEventListener("keypress", start);
    }
  }
  
