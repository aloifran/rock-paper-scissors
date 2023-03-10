import { useState, useEffect } from "react";
import {
    Columns,
    Container,
    Section,
    Media,
    Hero,
    Card,
    Heading,
    Button,
    Image,
} from "react-bulma-components";
import { motion } from "framer-motion";
import "./App.sass";

function App() {
    const [playerChoice, setPlayerChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [gameResult, setGameResult] = useState("");
    const [roundResult, setRoundResult] = useState("");

    const optionButtons = document.getElementById("options");

    const options = [
        {
            name: "rock",
            img: "rock.png",
        },
        {
            name: "paper",
            img: "paper.png",
        },
        {
            name: "scissors",
            img: "scissors.png",
        },
    ];

    const resultMessages = [
        "ROCK BEATS SCISSORS",
        "SCISSORS BEAT PAPER",
        "PAPER BEATS ROCK",
        "DRAW",
    ];

    useEffect(() => {
        checkRoundResult();
    }, [computerChoice]);

    useEffect(() => {
        checkGameResult();
    }, [playerScore, computerScore]);

    const generateComputerChoice = () => {
        const i = Math.floor(Math.random() * options.length);
        const randomChoice = options[i].name;
        setComputerChoice("");
        // set after 1s
        setTimeout(() => {
            setComputerChoice(randomChoice);
        }, 1000);
    };

    const handleRound = (choice: string) => {
        setPlayerChoice(choice);
        generateComputerChoice();
    };

    const checkRoundResult = () => {
        // rock beats scissors
        if (playerChoice === "rock" && computerChoice === "scissors") {
            setPlayerScore(playerScore + 1);
            setRoundResult(resultMessages[0]);
        } else if (computerChoice === "rock" && playerChoice === "scissors") {
            setComputerScore(computerScore + 1);
            setRoundResult(resultMessages[0]);
        }

        // scissors beat paper
        if (playerChoice === "scissors" && computerChoice === "paper") {
            setPlayerScore(playerScore + 1);
            setRoundResult(resultMessages[1]);
        } else if (computerChoice === "scissors" && playerChoice === "paper") {
            setComputerScore(computerScore + 1);
            setRoundResult(resultMessages[1]);
        }

        // paper beats rock
        if (playerChoice === "paper" && computerChoice === "rock") {
            setPlayerScore(playerScore + 1);
            setRoundResult(resultMessages[2]);
        } else if (computerChoice === "paper" && playerChoice === "rock") {
            setComputerScore(computerScore + 1);
            setRoundResult(resultMessages[2]);
        }

        if (playerChoice != "" && playerChoice === computerChoice) {
            setRoundResult(resultMessages[3]);
        }
    };

    const checkGameResult = () => {
        if (playerScore === 3 || computerScore === 3) {
            optionButtons?.classList.add("disabled");

            if (playerScore === computerScore) {
                setGameResult("IT'S A DRAW!");
            } else if (playerScore > computerScore) {
                setGameResult("YOU WIN!");
            } else {
                setGameResult("COMPUTER WINS!");
            }
        }
    };

    const resetGame = () => {
        setPlayerChoice("");
        setComputerChoice("");
        setPlayerScore(0);
        setComputerScore(0);
        setGameResult("");
        setRoundResult("");
        optionButtons?.classList.remove("disabled");
    };

    return (
        <>
            <Hero>
                <Heading>ROCK PAPER SCISSORS</Heading>
                {/* <Button onClick={() => document.body.classList.toggle("dark")}>
                    Light/Dark
                </Button> */}
                <Hero.Body>
                    <Heading size={4}>{roundResult}</Heading>
                    <Heading size={3}>{gameResult}</Heading>
                </Hero.Body>
            </Hero>

            <Columns>
                <Columns.Column>
                    <Card>
                        <Card.Header>
                            <Card.Header.Title justifyContent="center">
                                COMPUTER
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Content>
                            <Media display="flex" justifyContent="center">
                                <Image
                                    src={computerChoice + ".png"}
                                    alt={computerChoice}
                                    size={128}
                                />
                            </Media>
                        </Card.Content>
                        <Heading size={4}>{computerScore}</Heading>
                    </Card>
                </Columns.Column>

                <Columns.Column>
                    <Card>
                        <Card.Header>
                            <Card.Header.Title justifyContent="center">
                                YOU
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Content>
                            <Media display="flex" justifyContent="center">
                                <motion.div>
                                    <Image
                                        src={playerChoice + ".png"}
                                        alt={playerChoice}
                                        size={128}
                                    />
                                </motion.div>
                            </Media>
                        </Card.Content>
                        <Heading size={4}>{playerScore}</Heading>
                    </Card>
                </Columns.Column>

                <Columns.Column>
                    <Container
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        id="options"
                    >
                        {options.map((option) => (
                            <motion.div whileTap={{ scale: 0.85 }}>
                                <Image
                                    key={option.name}
                                    src={option.img}
                                    alt={option.name}
                                    size={96}
                                    onClick={() => {
                                        handleRound(option.name);
                                    }}
                                />
                            </motion.div>
                        ))}
                    </Container>
                </Columns.Column>
            </Columns>
            <Section>
                <Button size="large" onClick={resetGame}>
                    NEW GAME
                </Button>
            </Section>
        </>
    );
}

export default App;
