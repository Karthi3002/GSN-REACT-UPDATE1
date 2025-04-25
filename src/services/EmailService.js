import emailjs from 'emailjs-com';

const sendAutoReply = (userEmail) => {
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  const templateParams = {
    to_email: userEmail,
    // Add other template parameters here if needed
  };

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.error('FAILED...', error);
    });
};

export default sendAutoReply;