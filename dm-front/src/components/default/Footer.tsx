import React from 'react';

// import { Container } from './styles';

const Footer: React.FC = () => {
  
  return (
    <footer className="fixed-bottom text-center">
      <p>&copy; DropMagic | {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;