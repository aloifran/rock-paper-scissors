import { useState, useEffect } from "react";
import { Columns, Hero, Heading } from "react-bulma-components";
import "./App.sass";
import options from "./assets/options.json";
import PlayerCard from "./components/PlayerCard/PlayerCard";
import Options from "./components/Options/Options";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [userChoice, setUserChoice] = useState<choice>(null);
  const [computerChoice, setComputerChoice] = useState<choice>(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userWon, setUserWins] = useState(false);
  const [computerWon, setComputerWins] = useState(false);
  const [roundResultMsg, setRoundResultMsg] = useState("");
  const [gameResultMsg, setGameResultMsg] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    checkRoundResult();
  }, [computerChoice]);

  useEffect(() => {
    checkGameResult();
  }, [userScore, computerScore]);

  const resultMessages = ["ROCK BEATS SCISSORS", "SCISSORS BEAT PAPER", "PAPER BEATS ROCK", "DRAW"];

  const generateComputerChoice = () => {
    const i = Math.floor(Math.random() * options.length);
    const randomChoice = options[i].name as choice;
    setComputerChoice(randomChoice);
  };

  const handleChoice = (choice: choice) => {
    setUserChoice(null);
    setComputerChoice(null);

    setTimeout(() => {
      setUserChoice(choice);
      generateComputerChoice();
    }, 400);
  };

  const setRoundWinner = (player: string) => {
    if (player === "user") {
      setUserWins(true);
      setComputerWins(false);
    } else if (player === "computer") {
      setUserWins(false);
      setComputerWins(true);
    } else {
      setUserWins(false);
      setComputerWins(false);
    }
  };

  const checkRoundResult = () => {
    // rock beats scissors
    if (userChoice === "rock" && computerChoice === "scissors") {
      setUserScore(userScore + 1);
      setRoundResultMsg(resultMessages[0]);
      setRoundWinner("user");
    } else if (computerChoice === "rock" && userChoice === "scissors") {
      setComputerScore(computerScore + 1);
      setRoundResultMsg(resultMessages[0]);
      setRoundWinner("computer");
    }

    // scissors beat paper
    if (userChoice === "scissors" && computerChoice === "paper") {
      setUserScore(userScore + 1);
      setRoundResultMsg(resultMessages[1]);
      setRoundWinner("user");
    } else if (computerChoice === "scissors" && userChoice === "paper") {
      setComputerScore(computerScore + 1);
      setRoundResultMsg(resultMessages[1]);
      setRoundWinner("computer");
    }

    // paper beats rock
    if (userChoice === "paper" && computerChoice === "rock") {
      setUserScore(userScore + 1);
      setRoundResultMsg(resultMessages[2]);
      setRoundWinner("user");
    } else if (computerChoice === "paper" && userChoice === "rock") {
      setComputerScore(computerScore + 1);
      setRoundResultMsg(resultMessages[2]);
      setRoundWinner("computer");
    }

    // draw
    if (userChoice && userChoice === computerChoice) {
      setRoundResultMsg(resultMessages[3]);
      setRoundWinner("draw");
    }
  };

  const checkGameResult = () => {
    if (userScore === 2 || computerScore === 2) {
      setIsGameOver(true);

      if (userScore > computerScore) {
        setGameResultMsg("YOU WON!");
      } else {
        setGameResultMsg("COMPUTER WON!");
      }
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setUserScore(0);
    setComputerScore(0);
    setGameResultMsg("");
    setRoundResultMsg("");
    setUserWins(false);
    setComputerWins(false);
    setIsGameOver(false);
  };

  return (
    <>
      <NavBar />
      <Hero>
        <Heading size={5}>{gameResultMsg || roundResultMsg}</Heading>
      </Hero>

      <Columns breakpoint="mobile" centered>
        <Columns.Column narrow>
          <PlayerCard
            playerName="COMPUTER"
            playerChoice={computerChoice}
            playerScore={computerScore}
            isWinner={computerWon}
          />
        </Columns.Column>
        <Columns.Column narrow>
          <PlayerCard
            playerName="YOU"
            playerChoice={userChoice}
            playerScore={userScore}
            isWinner={userWon}
          />
        </Columns.Column>
      </Columns>

      <Options handleChoice={handleChoice} resetGame={resetGame} disabled={isGameOver} />
      <Footer />
    </>
  );
}

export default App;
