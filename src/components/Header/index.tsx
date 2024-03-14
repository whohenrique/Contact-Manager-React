import { useState } from 'react';
import { Container } from "./styles";
import CreateContact from '../CreateContact';

export default function Header() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleButtonClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <Container>
      <header className="header">
        <h1 className="header-title">Contact Manager</h1>
        <button onClick={handleButtonClick} className="header-buttonAdd">Create New</button>
      </header>
      {showContactForm && <CreateContact onClose={handleCloseContactForm} />}
    </Container>
  );
}
