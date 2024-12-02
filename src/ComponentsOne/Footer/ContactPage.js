import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_81km87x', 'template_fcjtiln', formData, '6dP85jFUkwHJrGA72')
      .then((response) => {
        Swal.fire({
          title: 'Success!',
          text: 'Message sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setFormData({ name: '', email: '', message: '' }); 
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to send message. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.error('Email.js error:', error);
      });
  };

  return (
    <div className="contact-us">
     <div>
     <h3 className='contact-h3'>Contact Us</h3>
<p className='contact-p'>At NutriLife Path, we believe in the power of food to nourish not just the body, but also the soul. If you have any questions or concerns about how our blend of traditional Nigerian dishes and international culinary inspirations can fuel your body and satisfy your taste buds, don’t hesitate to reach out. Our team is dedicated to helping you find easy-to-make, wholesome recipes that will leave you feeling nourished and energized. We’ll get back to you as soon as possible!</p>
     </div>
      <div className="contact-info">
        <h3 className='contact-h3'>Get in Touch</h3>
        <p><strong className='contact-info-strong'>Email:</strong> nutrilife456@gmail.com</p>
        <p><strong className='contact-info-strong'>Phone:</strong> 0903 945 3456</p>
        <p><strong className='contact-info-strong'>WhatsApp:</strong> +234 903 9453 456</p>
        <p><strong className='contact-info-strong'>Address:</strong> Plot 309A Norus close, omole phase1, Lagos state.</p>
      </div>

      <div className='contact-form-main-container'>
        <h3 className='contact-h3'>Send Us a Message</h3>
        <form onSubmit={handleSubmit} className='contact-form'>
          <div className='form-input-div'>
          <label htmlFor="name" className='contact-info-strong'>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          </div>
           <div className='form-input-div'>
           <label htmlFor="email" className='contact-info-strong'>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
           </div>
           <div className='form-input-div'>
           <label htmlFor="message" className='contact-info-strong'>Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
           </div>
          <button type="submit" id='contact-form-btn'>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage