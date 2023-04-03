import './contact-section.css';


const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="tell-us">
                <div className="briefcase-icon"></div>
                <div className="title">Want to work together?</div>
                <div className="description">Amazing. Tell us about your project!</div>
            </div>
            <div className="contact-us">
                <div className="mail-icon"></div>
                <div className="title">Contact us</div>
                <div className="description">Get in touch</div>
            </div>
        </section>
    );
}

export default ContactSection