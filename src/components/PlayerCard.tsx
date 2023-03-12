import { Box, Media, Card, Heading } from "react-bulma-components";
import { motion, Variants } from "framer-motion";

interface PlayerCardProps {
    playerName: string;
    playerChoice: string;
    playerScore: number;
    isWinner: boolean;
}

export default function PlayerCard(props: PlayerCardProps) {
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
        <>
            <Card>
                <motion.div
                    animate={props.isWinner ? "winner" : "notWinner"}
                    variants={variants}
                >
                    <Card.Header>
                        <Card.Header.Title justifyContent="center">
                            {props.playerName}
                        </Card.Header.Title>
                    </Card.Header>
                </motion.div>
                <Card.Content>
                    <Media display="flex" justifyContent="center">
                        {props.playerChoice != "" && (
                            <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    bounce: 0.3,
                                }}
                                src={props.playerChoice + ".png"}
                                alt={props.playerChoice}
                            />
                        )}
                    </Media>
                </Card.Content>
            </Card>
            <Box shadowless>
                <Heading size={4}>{props.playerScore}</Heading>
            </Box>
        </>
    );
}
