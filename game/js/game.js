// Code by FelixM
const sounds = {
  glitch: new Audio("assets/glitch.mp3"),
  startradio: new Audio("assets/startradio.mp3"),
  radio: new Audio("assets/radio.mp3"),
};

let ship = {
  health: 1000,
  fuel: 500,
  damage: 50,
  stage: 0,
};

function print(txt = "", css = "") {
  s(".output").innerHTML += `<pre style="${css}">${txt}</pre>`;
}

async function sendchoose(properties) {
  return new Promise((resolve, reject) => {
    if (typeof properties === "object") {
      print(properties.txt);
      properties.buttons.forEach((button, index) => {
        properties.buttons[index].element = makeElement(
          "button",
          button.txt,
          s(".output"),
          [{ style: "animation-delay: " + index + "s;" }],
          ["btn"]
        );
      });
      properties.buttons.forEach((button) => {
        button.element.addEventListener("click", () => {
          button.code();
          properties.buttons.forEach((button2) => {
            button2.element.disabled = true;
          });
        });
        resolve(btn.code);
      });
    } else {
      reject("wrong parameter, put an object bruh -_-");
    }
  });
}

async function radio(txt = "", autodelay = true, you = false, css = "") {
  let output;
  if (you) {
    output = "SENT";
  } else {
    output = "RECEIVED";
  }
  sounds.startradio.play();
  sounds.radio.play();
  s(
    ".output"
  ).innerHTML += `<pre style="${css}">[RADIO] [${output}] ${txt}</pre>`;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(txt.length * 100);
    }, txt.length * 100);
  });
}

function clear() {
  s(".output").innerHTML = "";
}

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

const game = {
  async showStats() {
    print(`-----------------------
  Statistics     /\\
  ${ship.health} HP       (  )
  ${ship.fuel} Fuel      (  )
  ${ship.damage} Damage   /|/\\|\\
  Stage ${ship.stage}     /_||||_\\
                ####
                 ##
-----------------------`);
  },
  async begin() {
    await delay(2000);
    ship.stage = 1;
    clear();
    await radio("victor, do you copy?");
    await radio("crash landing on T452. we need backup");
    await radio("copy that", true, true);
    await radio("where are you?", true, true);
    await delay(2000);
    await radio("i see what looks like a forest");
    await radio("lots of vegetation");
    await delay(1000);
    await radio("take some samples", true, true);
    await radio("we gotta call hq", true, true);
    await radio("where is our ship?", true, true);
    await delay(2000);
    await radio("i found the ship");
    await radio("coordinates?", true, true);
    await delay(2000);
    await radio("im at 20 10 34.7 N 155 49 25.9 W");
    await delay(1000);
    await sendchoose({
      txt: "choose an option",
      buttons: [
        {
          txt: "come to coordinates",
          code: () => {
            alert("option 1 coords");
          },
        },
        {
          txt: "call backup to location",
          code: () => {
            alert("option 2 backup");
          },
        },
      ],
    });
  },
};

const start = () => {
  s("#year").innerHTML = "";
  document.documentElement.onclick = function () {};
  setTimeout(() => {
    typeEffect(s("#year"), "6452 AD", 100, () => {
      s("#year").classList.add("done");
      setTimeout(() => {
        s("#year").style.display = "none";
        game.begin();
      }, 3000);
    });
  }, 500);
};
