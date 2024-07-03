import React from 'react';

const Footer = ({userData}) => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>{userData.fname}</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
