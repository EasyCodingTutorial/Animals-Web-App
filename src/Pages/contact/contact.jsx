import ContactHeader from "../../Images/7.jpg";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <img src={ContactHeader} alt="" />
      </div>

      {/* Contact Form */}
      <div className="contact_form container">
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <form action="">
              <h6>Contact us Now</h6>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Your number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="">How We Can help you</label>
                <textarea
                  rows="6"
                  className="form-control"
                  required
                  placeholder="How We Can Help you"
                ></textarea>
              </div>

              <button className="btn">Submit Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
