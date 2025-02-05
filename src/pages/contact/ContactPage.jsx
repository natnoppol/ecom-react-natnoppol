import React, { useState } from 'react';

const ContactPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });

  // State for form errors
  const [errors, setErrors] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (formData.fullName.length < 3) {
      formErrors.fullName = 'Full name must be at least 3 characters.';
      isValid = false;
    }
    if (formData.subject.length < 3) {
      formErrors.subject = 'Subject must be at least 3 characters.';
      isValid = false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (formData.body.length < 3) {
      formErrors.body = 'Body must be at least 3 characters.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // If the form is valid, log the data to the console
      console.log('Form submitted:', formData);
      // Clear the form (optional)
      setFormData({
        fullName: '',
        subject: '',
        email: '',
        body: '',
      });
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="body">Message Body</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
          {errors.body && <p className="error">{errors.body}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;