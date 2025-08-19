import React, { useState, useEffect, useRef } from "react";
import '../styles/all.css'
import '../styles/root/colors.css'
import '../styles/pages/contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "message") {
      autoResize(e.target);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("The message has been sent, thanks a lot!");
    setFormData({ name: "", email: "", message: "" });
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const autoResize = (el) => {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  useEffect(() => {
    if (textareaRef.current) {
      autoResize(textareaRef.current);
    }
  }, []);

  return (
    <section className="contact section">
      <div className="form" style={{ textAlign: "center" }}>
        <fieldset id="kontak">
          <form onSubmit={handleSubmit}>
            <h3>Contact Me Here</h3>

            <br />

            <div>
              <input
                className="namee"
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <i id="iconnn" className="fa-solid fa-id-card"></i>
            </div>

            <div>
              <input
                className="email"
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <i id="iconnn" className="fa-solid fa-at"></i>
            </div>

            <div>
              <textarea
                ref={textareaRef}
                className="resize-ta textarea"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <br />

            <button className="btn" type="submit">
              Submit
            </button>
            <button
              className="btn"
              type="reset"
              onClick={() => {
                setFormData({ name: "", email: "", message: "" });
                if (textareaRef.current) {
                  textareaRef.current.style.height = "auto";
                }
              }}
            >
              Reset
            </button>
          </form>
        </fieldset>
      </div>
    </section>
  );
}

export default Contact;