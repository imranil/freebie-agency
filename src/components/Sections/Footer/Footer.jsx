import './footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="address">
                3rd Floor, Santa Monica Beach, CA, San Francisco
            </div>
            <div className="contacts">
                (359) 0 123 456 789 - info@yourmail.com
            </div>
            <div className="social">
                <div className="icon facebook-logo"></div>
                <div className="icon twitter-logo"></div>
                <div className="icon pinterest-logo"></div>
            </div>
        </footer>
    );
}

export default Footer;