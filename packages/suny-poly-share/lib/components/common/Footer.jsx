import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const Footer = props => {
  return (
    <div className="footer"><a href="https://github.com/LEKrensta/Poly-Assignment-Share"><FormattedMessage id="github"/></a></div>
  )
}

Footer.displayName = "Footer";

registerComponent({ name: 'Footer', component: Footer });