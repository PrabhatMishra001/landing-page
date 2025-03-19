import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background: #f0f4ff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 350px;
  margin: 20px auto;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #6200ea;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #3700b3;
    box-shadow: 0 0 6px rgba(98, 0, 234, 0.4);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #6200ea;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #3700b3;
    box-shadow: 0 0 6px rgba(98, 0, 234, 0.4);
  }
`;

const Button = styled.button`
  background: #6200ea;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #3700b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError('All fields are required.');
      setSuccess(false);
      return;
    }

    setError('');
    setSuccess(true);

    // Clear form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSuccess(false);
    }, 2000);
  };

  return (
    <FormContainer>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextArea
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <Button type="submit">Submit</Button>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>Message Sent Successfully!</SuccessMessage>}
      </form>
    </FormContainer>
  );
};

export default ContactForm;
