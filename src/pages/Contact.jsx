import ContactForm from '../components/ContactForm.jsx';
import GithubProfile from '../components/GithubProfile.jsx';

function Contact() {
    return (
        <footer id="contact">
            <h2>Contact</h2>
            <div className="section-collapsable">
                <ul>
                    <li>
                        Email:
                        <a href="mailto:rarestaflan25@gmail.com">
                            rarestaflan25@gmail.com
                        </a>
                    </li>
                    <li>
                        LinkedIn:
                        <a href="https://www.linkedin.com/in/rarestaflan/">
                            Taflan Rareș
                        </a>
                    </li>
                </ul>
                <h3>GitHub</h3>
                <div className="section-content section-collapsable">
                    <GithubProfile />
                </div>
                <ContactForm />
            </div>
            <br />
            <p style={{ textAlign: 'center' }}>&copy; 2026 Taflan Rareș. All rights reserved.</p>
        </footer>
    );
}
export default Contact;