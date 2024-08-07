import "./Footer.css";
import "bulma/css/bulma.min.css";

function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <a
                        href="https://github.com/adeshpande03"
                        target="_blank"
                    >
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li>Akhil Deshpande</li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/akhil-deshpande/"
                        target="_blank"
                    >
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}
export default Footer;