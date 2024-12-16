import "./styles.css";
import { useState } from "react";
import RestartButton from "./restart.png";
import ChristmasPic from "./Christmas.PNG";
import PumpkinPic from "./Pumpkin.PNG";
import SomiSomiPic from "./somisomi.JPEG";

function App() {
  const [endScreen, showEndScreen] = useState(false);
  const [currentButton, setCurrentButton] = useState(0); // Start with button 0

  const handleClick = () => {
    // Cycle through 3 buttons (0 → 1 → 2 → 0 ...)
    let timeout = 0;
    if (currentButton === 14) {
      timeout = 2500;
      setCurrentButton(-1);
    }
    if (currentButton === 19) {
      timeout = 2500;
      setCurrentButton(-2);
      showEndScreen(true);
    }
    if (currentButton === 20) {
      showEndScreen(false);
    }
    setTimeout(() => {
      if (currentButton === -1) {
        setCurrentButton(14);
      }
      if (currentButton === -2) {
        setCurrentButton(19);
      }
      setCurrentButton((currentButton + 1) % 21);
    }, timeout);
  };

  return (
    <div>
      {endScreen && (
        <div class="end-container">
          <iframe
            src="https://giphy.com/embed/XaFRf3kCwnUl2"
            width="600vw"
            height="600vw"
            frameBorder="0"
            className="heart-background"
            allowFullScreen
            style={{
              pointerEvents: "none",
            }}
          ></iframe>
          <h1>I love you Nouh</h1>
          <img
            src={ChristmasPic}
            class="christmas-pic"
            alt="Pictures at The Grove for Christmas"
          />
          <img
            src={PumpkinPic}
            class="pumpkin-pic"
            alt="Pictures of us painting pumpkins"
          />
          <img
            src={SomiSomiPic}
            class="somisomi-pic"
            alt="Picture of us getting Somi Somi"
          />
          {currentButton === 20 && (
            <button onClick={handleClick} class="restart-button">
              <img
                src={RestartButton}
                width="36px"
                style={{ filter: "invert(1) brightness(2)" }}
              />
            </button>
          )}
        </div>
      )}
      {!endScreen && (
        <div class="container">
          <div class="gif-container">
            <iframe
              src="https://giphy.com/embed/UkfUod3TFW66J2BWKK"
              width="600vw"
              height="600vw"
              frameBorder="0"
              className="background-gif"
              title="Cute Cat GIF"
              style={{
                pointerEvents: "none",
              }}
            ></iframe>
          </div>
          <div class="left-side-container">
            <h1>Hey Nouh!</h1>
            <h2>I made you a button</h2>
            <h3>You should click it</h3>
            {currentButton === 0 && (
              <button onClick={handleClick} class="first-button">
                I'm a button
              </button>
            )}
            {currentButton === 1 && (
              <button onClick={handleClick} class="second-button">
                Now I'm over here
              </button>
            )}
            {currentButton === 2 && (
              <button onClick={handleClick} class="third-button">
                Click me!
              </button>
            )}
            {currentButton === 3 && (
              <button onClick={handleClick} class="third-button">
                Click me harder
              </button>
            )}
            {currentButton === 4 && (
              <button onClick={handleClick} class="third-button">
                HARDER DADDY
              </button>
            )}
            {currentButton === 5 && (
              <button onClick={handleClick} class="fourth-button">
                good boy
              </button>
            )}
            {currentButton === 6 && (
              <button onClick={handleClick} class="fifth-button">
                I changed color
              </button>
            )}
            {currentButton === 7 && (
              <button onClick={handleClick} class="sixth-button">
                I did it again
              </button>
            )}
            {currentButton === 8 && (
              <button onClick={handleClick} class="seventh-button">
                hehe
              </button>
            )}
            {currentButton === 9 && (
              <button onClick={handleClick} class="first-button">
                Ok back to purple
              </button>
            )}
            {currentButton === 10 && (
              <button
                onClick={handleClick}
                class="first-button"
                style={{ marginTop: "50px" }}
              >
                I'll stop being silly
              </button>
            )}
            {currentButton === 11 && (
              <button onClick={handleClick} class="eighth-button">
                I lied, I like being silly
              </button>
            )}
            {currentButton === 12 && (
              <button onClick={handleClick} class="ninth-button">
                So silly
              </button>
            )}
            {currentButton === 13 && (
              <button onClick={handleClick} class="tenth-button">
                so smol
              </button>
            )}
            {currentButton === 14 && (
              <button onClick={handleClick} class="eleventh-button">
                less smol
              </button>
            )}
            {currentButton === 15 && (
              <button onClick={handleClick} class="first-button">
                Did you miss me
              </button>
            )}
            {currentButton === 16 && (
              <button onClick={handleClick} class="first-button">
                You're almost there
              </button>
            )}
            {currentButton === 17 && (
              <button onClick={handleClick} class="first-button">
                ur so cute
              </button>
            )}
            {currentButton === 18 && (
              <button onClick={handleClick} class="third-button">
                And you know what?
              </button>
            )}
            {currentButton === 19 && (
              <button onClick={handleClick} class="twelfth-button">
                I love you
              </button>
            )}
          </div>
          <p
            style={{
              position: "relative",
              left: "150vw",
              fontSize: "20px",
              width: "200px",
            }}
          >
            ur cute
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
