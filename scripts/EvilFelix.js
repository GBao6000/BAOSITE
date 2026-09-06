const StalinJumpscareButtonElement = document.querySelector(
  '.stalin-jumpscare-button',
);
const StalinJumpscareButton2Element = document.querySelector(
  '.stalin-jumpscare-button-2',
);
StalinJumpscareButtonElement.addEventListener('click', () => {
  openEvilFelix();
});
StalinJumpscareButton2Element.addEventListener('click', () => {
  openEvilFelix();
});
function openEvilFelix() {
  const tab = window.open('', '_self');
  tab.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              html, body {
                width: 100%;
                height: 100%;
                margin: 0;
              }
              body {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
              }
              img {
                position: absolute;
                width: 100vw;
                height: 100vh;
              }
              div {
                position: absolute;
                left: 28%;
                top: 2%;
                color: red;
                font-size: 8rem;
                z-index: 100;
              }
              div p {
                margin: 0;
                paddign: 0;
              }
            </style>
          </head>
          <body>
            <div>
              <p>FELIX IS EVIL!!!</p>
              <p>FELIX IS EVIL!!!</p>
              <p>FELIX IS EVIL!!!</p>
              <p>FELIX IS EVIL!!!</p>
            </div>
            <img src="images/EvilFelix.jpeg">
            <audio id="jumpscare-audio">
              <source src="sounds/jumpscareSound.mpeg" type="audio/mpeg">
            </audio>
            <script>
              const jumpscareAudioElement = document.getElementById('jumpscare-audio');
              document.addEventListener("click", () => {
                  jumpscareAudioElement.play();
                }, {once: true});
            </script>
          </body>
        </html>
    `);
}
