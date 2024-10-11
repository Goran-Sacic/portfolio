import React, { useState, useEffect, useContext } from 'react';
import styles from './Contact.module.css';
import { TextField, Button, Container, Box, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';
import { LanguageContext } from '../contexts/LanguageContext';
import contactTexts from '../texts/ContactTexts';
import servicesTexts from '../texts/ServicesTexts';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormProps>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;

  const {
    title,
    /* description, */
    successMessage,
    name,
    email,
    message,
    submit,
    submitting,
  } = contactTexts[language] || contactTexts['eng'];

  const {
    servicesTitle,
    customWebsiteDevelopment,
    webApplicationDevelopment,
    portfolioAndPersonalWebsites,
  } = servicesTexts[language] || servicesTexts['eng'];

  useEffect(() => {
    emailjs.init(
      import.meta.env.VITE_EMAIL_USER_ID || import.meta.env.EMAIL_USER_ID
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setShowSuccessMessage(false);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccessMessage(false);
    emailjs.init(
      import.meta.env.VITE_EMAIL_USER_ID || import.meta.env.EMAIL_USER_ID
    );
    try {
      setLoading(true);
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID ||
          import.meta.env.EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID ||
          import.meta.env.EMAIL_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );
      setLoading(false);
      setShowSuccessMessage(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.titleAndServices}>
          <h1>{servicesTitle}</h1>
          <div className={styles.services}>
            <ul>
              <li>
                <h3>{customWebsiteDevelopment.title}</h3>
                <p>{customWebsiteDevelopment.description}</p>
              </li>
              <li>
                <h3>{webApplicationDevelopment.title}</h3>
                <p>{webApplicationDevelopment.description}</p>
              </li>
              <li>
                <h3>{portfolioAndPersonalWebsites.title}</h3>
                <p>{portfolioAndPersonalWebsites.description}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contactForm}>
          <div className={styles.container}>
            <Container
              disableGutters
              sx={{
                marginTop: '20px',
                marginBottom: '20px',
              }}
            >
              <Box
                sx={{
                  p: 3,
                  paddingRight: '0',
                  paddingTop: '0',
                  boxShadow: 0,
                  borderRadius: 2,
                  textAlign: 'center',
                  backgroundColor: 'rgb(240, 248, 255)',
                }}
              >
                <form onSubmit={handleSubmit}>
                  <div className={styles.contactTitle}>
                    <h1>{title}</h1>
                  </div>
                  {showSuccessMessage && (
                    <Alert severity="success" sx={{ mb: 2, mt: 3 }}>
                      {successMessage}
                    </Alert>
                  )}
                  <TextField
                    fullWidth
                    label={name}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.158)',
                      borderRadius: '5px',

                      '& .MuiInputLabel-root': {
                        color: loading ? 'gray' : 'rgb(0, 43, 87)',
                        borderRadius: '5px',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.15)',
                          borderRadius: '5px',
                        },
                        '&:hover > fieldset': {
                          borderColor: 'rgb(0, 43, 87)',
                        },
                        '&.Mui-disabled > fieldset': {
                          borderColor: 'transparent',
                          backgroundColor: 'rgb(240, 240, 240)',
                        },
                        '&.Mui-focused > fieldset': {
                          borderColor: 'rgb(0, 43, 87)',
                        },
                      },
                      '&.Mui-disabled': {
                        backgroundColor: 'rgb(200, 200, 200)',
                      },
                    }}
                    disabled={loading}
                  />
                  <TextField
                    fullWidth
                    label={email}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.158)',
                      borderRadius: '5px',
                      '& .MuiInputLabel-root': {
                        color: loading ? 'gray' : 'rgb(0, 43, 87)',
                        borderRadius: '5px',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.15)',
                          borderRadius: '5px',
                        },
                        '&:hover > fieldset': {
                          borderColor: 'rgb(0, 43, 87)',
                        },
                        '&.Mui-disabled > fieldset': {
                          borderColor: 'transparent',
                          backgroundColor: 'rgb(240, 240, 240)',
                        },
                        '&.Mui-focused > fieldset': {
                          borderColor: 'rgb(0, 43, 87)',
                        },
                      },
                      '&.Mui-disabled': {
                        backgroundColor: 'rgb(200, 200, 200)',
                      },
                    }}
                    disabled={loading}
                  />
                  <TextField
                    fullWidth
                    label={message}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={7}
                    margin="normal"
                    required
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.158)',
                      borderRadius: '5px',
                      '& .MuiInputLabel-root': {
                        color: loading ? 'gray' : 'rgb(0, 43, 87)',
                        borderRadius: '5px',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.15)',
                          borderRadius: '5px',
                        },
                        '&:hover > fieldset': {
                          borderColor: 'rgb(0, 43, 87)',
                        },
                        '&.Mui-disabled > fieldset': {
                          borderColor: 'transparent',
                          backgroundColor: 'rgb(240, 240, 240)',
                        },
                        '&.Mui-focused > fieldset': {
                          borderColor: 'rgb(0, 43, 87)',
                        },
                      },
                      '&.Mui-disabled': {
                        backgroundColor: 'rgb(200, 200, 200)',
                      },
                    }}
                    disabled={loading}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      mt: 3,
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{
                        width: '250px',
                        padding: '10px 20px',
                        backgroundColor: 'rgb(0, 43, 87)',
                        '&:hover': {
                          backgroundColor: 'rgb(0, 77, 153)',
                          boxShadow: 'rgba(0, 0, 0, 0.1) 2px 4px 25px;',
                        },
                        '&.Mui-disabled': {
                          backgroundColor: 'rgb(36, 125, 214)',
                          color: 'white',
                        },
                      }}
                      disabled={loading}
                    >
                      {loading ? submitting : submit}
                    </Button>
                  </Box>
                </form>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
