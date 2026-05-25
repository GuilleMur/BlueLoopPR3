import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p data-key="footer-copyright">
        &copy; {new Date().getFullYear()} BlueLoop. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;