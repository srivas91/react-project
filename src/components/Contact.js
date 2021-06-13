import './Contact.css';
function Contact()
{
    return (
        <div className="mycontact">
        <h4>Contact Form</h4>
        <input type="text" name="name" placeholder="Name"></input><br/>
        <input type="email" name="name" placeholder="Email Id"></input><br/>
        <textarea rows="5" cols="60"></textarea>
        </div>
    );
}

export default Contact;