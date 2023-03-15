import { Container, Image } from "react-bulma-components";
import { motion } from "framer-motion";
import { useEffect } from "react";

type Option = {
    name: string;
    img: string;
};

interface OptionsProps {
    options: Option[];
    handleChoice: Function;
    disabled: boolean;
}

export default function Options({
    disabled,
    options,
    handleChoice,
}: OptionsProps) {
    const optionButtons = document.getElementById("options");

    useEffect(() => {
        disabled
            ? optionButtons?.classList.add("disabled")
            : optionButtons?.classList.remove("disabled");
    }, [disabled]);

    return (
        <Container
            display="flex"
            flexDirection="column"
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
                >
                    <Image
                        src={option.img}
                        alt={option.name}
                        size={96}
                        onClick={() => {
                            handleChoice(option.name);
                        }}
                    />
                </motion.div>
            ))}
        </Container>
    );
}