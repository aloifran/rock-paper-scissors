import { Footer as FooterBulma } from "react-bulma-components";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <FooterBulma id="footer">
            2023 - Francisco Aloi{" "}
            <a
                id="icon"
                href="https://github.com/aloifran/rock-paper-scissors"
                target="_blank"
            >
                <FaGithub />
            </a>
        </FooterBulma>
    );
}
