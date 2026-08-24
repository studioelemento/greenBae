import SEO from '../../components/SEO';
import ContactHero from "./components/ContactHero";
import QuickAnswers from "./components/QuickAnswers";
import MovementCTA from "./components/MovementCTA";

const ContactUs = () => {
  return (
    <>
      <SEO 
        title="Contact Us | Greenbae" 
        description="Get in touch with the Greenbae team for inquiries, support, and feedback." 
        url="https://www.greenbae.in/contact-us" 
      />
      <ContactHero />
      <QuickAnswers />
      {/* <MovementCTA /> */}
    </>
  );
};

export default ContactUs;