import React, { useState, useEffect, useContext } from 'react';
import styles from './Contact.module.css';
import { TextField, Button, Container, Box, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';
import ScrollAnimation from 'react-animate-on-scroll';
import { LanguageContext } from '../contexts/LanguageContext';
import contactTexts from '../texts/ContactTexts';

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
    description,
    successMessage,
    name,
    email,
    message,
    submit,
    submitting,
  } = contactTexts[language] || contactTexts['eng'];

  useEffect(() => {
    emailjs.init(
      import.meta.env.VITE_EMAIL_USER_ID || process.env.EMAIL_USER_ID
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
      import.meta.env.VITE_EMAIL_USER_ID || process.env.EMAIL_USER_ID
    );
    try {
      setLoading(true);
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID || process.env.EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID || process.env.EMAIL_TEMPLATE_ID,
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
        <ScrollAnimation animateIn="fadeIn" duration={0.5}>
          <h1>{title}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={0.5}>
          <p>{description}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={0.5}>
          <Container maxWidth="lg">
            <Box
              sx={{
                mt: 5,
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
                textAlign: 'center',
                backgroundColor: 'rgb(251, 251, 255)',
                width: '100%',
              }}
            >
              {showSuccessMessage && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  {successMessage}
                </Alert>
              )}
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label={name}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{
                    backgroundColor: 'rgb(239, 239, 255)',
                    borderRadius: '5px',
                    '& .MuiInputLabel-root': {
                      color: loading ? 'gray' : 'rgb(0, 43, 87)',
                      borderRadius: '5px',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& > fieldset': {
                        borderColor: 'transparent',
                        borderRadius: '5px',
                      },
                      '&.Mui-disabled > fieldset': {
                        borderColor: 'transparent',
                        backgroundColor: 'rgb(240, 240, 240)',
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
                    backgroundColor: 'rgb(239, 239, 255)',
                    borderRadius: '5px',
                    '& .MuiInputLabel-root': {
                      color: loading ? 'gray' : 'rgb(0, 43, 87)',
                      borderRadius: '5px',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& > fieldset': {
                        borderColor: 'transparent',
                        borderRadius: '5px',
                      },
                      '&.Mui-disabled > fieldset': {
                        borderColor: 'transparent',
                        backgroundColor: 'rgb(240, 240, 240)',
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
                  rows={4}
                  margin="normal"
                  required
                  sx={{
                    backgroundColor: 'rgb(239, 239, 255)',
                    borderRadius: '5px',
                    '& .MuiInputLabel-root': {
                      color: loading ? 'gray' : 'rgb(0, 43, 87)',
                      borderRadius: '5px',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& > fieldset': {
                        borderColor: 'transparent',
                        borderRadius: '5px',
                      },
                      '&.Mui-disabled > fieldset': {
                        borderColor: 'transparent',
                        backgroundColor: 'rgb(240, 240, 240)',
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
                      '&:hover': { backgroundColor: 'rgb(36, 125, 214)' },
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
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Contact;
