import options from "../../assets/options.json";
import { Container, Box, Media, Card, Heading } from "react-bulma-components";
import { motion, Variants } from "framer-motion";

interface PlayerCardProps {
    playerName: string;
    playerChoice: string;
    playerScore: number;
    isWinner: boolean;
}

export default function PlayerCard({
    playerName,
    playerChoice,
    playerScore,
    isWinner,
}: PlayerCardProps) {
    const variants: Variants = {
        winner: {
            backgroundColor: ["rgb(255, 255, 255)", "rgba(132, 255, 183, 0.6)"],
            transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
        notWinner: {
            backgroundColor: "rgb(255, 255, 255)",
        },
    };

    return (
        <Container>
            <Card>
                <motion.div
                    animate={isWinner ? "winner" : "notWinner"}
                    variants={variants}
                >
                    <Card.Header>
                        <Card.Header.Title justifyContent="center">
                            {playerName}
                        </Card.Header.Title>
                    </Card.Header>
                </motion.div>
                <Card.Content>
                    <Media display="flex" justifyContent="center">
                        {playerChoice != "" && (
                            <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    bounce: 0.3,
                                }}
                                src={
                                    options.filter(
                                        (option) => option.name === playerChoice
                                    )[0].img
                                }
                                alt={playerChoice}
                                data-test={`choice-${playerName}`}
                            />
                        )}
                    </Media>
                </Card.Content>
            </Card>
            <Box shadowless>
                <Heading size={4} data-test={`score-${playerName}`}>
                    {playerScore}
                </Heading>
            </Box>
        </Container>
    );
}
