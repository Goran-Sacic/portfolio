interface ContactTexts {
  title: string;
  description: string;
  successMessage: string;
  name: string;
  email: string;
  message: string;
  submit: string;
  submitting: string;
}

interface SupportedLanguages {
  eng: ContactTexts;
  cro: ContactTexts;
}

const contactTexts: SupportedLanguages = {
  eng: {
    title: 'CONTACT',
    description:
      'Feel free to Contact me by submitting the form below and I will get back to you as soon as possible',
    successMessage: 'Message sent successfully!',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Submit',
    submitting: 'Submitting...',
  },
  cro: {
    title: 'CONTACT',
    description:
      'Slobodno me kontaktirajte slanjem obrasca ispod i javit ću Vam se što je prije moguće',
    successMessage: 'Poruka uspješno poslana!',
    name: 'Ime',
    email: 'E-pošta',
    message: 'Poruka',
    submit: 'Pošalji',
    submitting: 'Šaljem...',
  },
};

export default contactTexts;
