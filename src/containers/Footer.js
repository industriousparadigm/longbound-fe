import React from 'react';

const Footer = () => {
  return (
    <div id="footer">
      <p>
        {`Copyright © ${new Date().getFullYear()} The Innovation Brothers`}
        <br />
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
