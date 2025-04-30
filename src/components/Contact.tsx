import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  const whatsappNumber = '923001234567'; // Replace with your actual WhatsApp number

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Let's Connect!</h1>
          <p>Need to discuss something? Tap below and start chatting instantly on WhatsApp.</p>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            className="whatsapp-button"
            onClick={() => window.open(`https://wa.me/${+923224960064}`, '_blank')}
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;