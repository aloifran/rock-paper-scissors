import options from "../../assets/options.json";
import { Container, Image, Button } from "react-bulma-components";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface OptionsProps {
    handleChoice: Function;
    disabled: boolean;
    resetGame: Function;
}

export default function Options({
    disabled,
    handleChoice,
    resetGame,
}: OptionsProps) {
    const optionButtons = document.getElementById("options");

    useEffect(() => {
        disabled
            ? optionButtons?.classList.add("disabled")
            : optionButtons?.classList.remove("disabled");
    }, [disabled]);

    return (
        <>
            <Container
                display="flex"
                justifyContent="center"
                alignItems="center"
                id="options"
            >
                {options.map((option) => (
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{
                            scale: 0.9,
                            transition: { duration: 0.3 },
                        }}
                        key={option.name}
                        data-test={`option-${option.name}`}
                    >
                        <Image
                            src={option.img}
                            alt={option.name}
                            size={96}
                            onClick={() => handleChoice(option.name)}
                        />
                    </motion.div>
                ))}
            </Container>
            <Container>
                <Button
                    data-test="btn-reset"
                    size="large"
                    onClick={() => resetGame()}
                >
                    NEW GAME
                </Button>
            </Container>
        </>
    );
}
