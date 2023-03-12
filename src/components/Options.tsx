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

export default function Options(props: OptionsProps) {
    const optionButtons = document.getElementById("options");

    useEffect(() => {
        props.disabled
            ? optionButtons?.classList.add("disabled")
            : optionButtons?.classList.remove("disabled");
    }, [props.disabled]);

    return (
        <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            id="options"
        >
            {props.options.map((option) => (
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
                            props.handleChoice(option.name);
                        }}
                    />
                </motion.div>
            ))}
        </Container>
    );
}
