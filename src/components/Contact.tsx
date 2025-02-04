function Contact(){
    return(
        <>
            <div id='contact' className="section contact">
                <div className="img-contact"></div>
                <form className="contact-form">
                    <h3>Contact Us</h3>
                    <div className="emai-name-inputs-wrapper">
                        <input placeholder="Name" type="text" name="name" />
                        <input placeholder="Email" type="email" name="email" />
                    </div>
                    <input placeholder="Your Subject" type="text" name="subject" />
                    <div className="textarea-contect-wrapper">
                        <label htmlFor="message-area">Your Message</label>
                        <textarea name="message" id="message-area"></textarea>
                    </div>
                    <div className="btn-wrapper">
                        <button type="submit" className="submit-btn">Send Message</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact