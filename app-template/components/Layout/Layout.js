import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';

function Layout({ children }) {
  return (
    <div className="Layout">
      <Navigation />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
