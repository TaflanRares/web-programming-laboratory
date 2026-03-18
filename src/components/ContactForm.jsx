import {useState} from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const displayName = name.trim() || 'friend';
        setFeedback(`Thank you, ${displayName}! Your message has been received.`);
    }

    return (
        <section className="contact-form-card" aria-label="Contact form">
            <h3 className="contact-form-title">Contact Form</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label className="contact-form-label" htmlFor="contact-name">Name</label>
                <input
                    id="contact-name"
                    className="contact-form-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                />

                <label className="contact-form-label" htmlFor="contact-email">Email</label>
                <input
                    id="contact-email"
                    className="contact-form-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                />

                <label className="contact-form-label" htmlFor="contact-message">Message</label>
                <textarea
                    id="contact-message"
                    className="contact-form-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    required
                />

                <button type="submit" className="contact-form-button">
                    Send
                </button>
            </form>
            {feedback && <p className="contact-form-feedback">{feedback}</p>}
        </section>
    );
}

export default ContactForm;