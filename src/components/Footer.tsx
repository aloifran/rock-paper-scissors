import { Footer as FooterBulma, Container } from "react-bulma-components";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <FooterBulma id="footer">
            <Container
                flexDirection="row"
                flexWrap="nowrap"
                justifyContent="center"
                alignItems="center"
            >
                <span>2023 - Francisco Aloi </span>
                <a
                    id="icon"
                    className="pl-2"
                    href="https://github.com/aloifran/rock-paper-scissors"
                    target="_blank"
                >
                    <FaGithub size={16} />
                </a>
            </Container>
        </FooterBulma>
    );
}
