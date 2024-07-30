import "./Footer.css";
import "bulma/css/bulma.min.css";

function Footer()
{
    return(
        <footer>
            <ul>
                <li>Akhil Deshpande</li>
                <li>
                    <a
                        href="https://github.com/adeshpande03"
                        target="_blank"
                        >
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </li>
            </ul>
        </footer>
    )
}
export default Footer;