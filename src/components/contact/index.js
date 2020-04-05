import React from 'react';
import { useForm } from '@formcarry/react';
import Title from '@components/title';
import {
  ContactHeaderCSS,
  ContactCSS,
  ContactFormCSS,
} from './styles';

const Contact = () => {
  const { state, submit } = useForm({
    id: 'tmelrsJNb_Nw',
  });

  return (
    <ContactCSS id="contact">
      <Title title="Contact" color="blue" />
      {state.submitted ? (
        <div className="success">
          Got it! I&#39;ll reply as soon as I can!
        </div>
      ) : (
        <>
          <ContactHeaderCSS>
            <p>
              Got a question or just want to connect? Feel free to use the form below or contact me directly at
            </p>
            <p className="email">
              wingmanjlee@gmail.com
            </p>
          </ContactHeaderCSS>
          <ContactFormCSS onSubmit={submit}>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" />
            </div>
            <div className="input-container">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
            </div>
            <button type="submit">Send</button>
          </ContactFormCSS>
        </>
      )}
    </ContactCSS>
  );
};

export default Contact;
