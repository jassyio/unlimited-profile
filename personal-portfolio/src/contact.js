// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Importing the CSS file
import Tetris from './tetris';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    services: [],
  });

  const servicesList = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Fullstack Development',
    'UI/UX Design',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: formData.email,
      services: formData.services,
    };

    // Log templateParams for debugging
    console.log('Template Params:', templateParams);

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Your request has been sent successfully!');
        // Reset form
        setFormData({ email: '', services: [] });
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        alert('Failed to send your request. Please try again.');
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Services you are interested in:</label>
          {servicesList.map((service) => (
            <div key={service} className="checkbox">
              <label>
                {service}
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={handleChange}
                />
              </label>
            </div>
          ))}
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
      <Tetris /> {/* Adding Tetris component */}
    </section>
  );
}

export default Contact;
