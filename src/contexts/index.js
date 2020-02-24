import React from 'react';
import PropTypes from 'prop-types';

export const AppContext = React.createContext({});

export default function AppContextProvider({ children }) {
  const value = {};
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.defaultProps = {
  children: null,
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};

