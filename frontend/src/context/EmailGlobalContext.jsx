import { createContext, useEffect, useState } from 'react';

const EmailGlobalContext = createContext();

const EmailGlobalProvider = ({ children }) => {
  const [email, setEmail] = useState(() => {
    const storedEmail = localStorage.getItem('email');
    return storedEmail || '';
  });

  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email]);

  return (
    <EmailGlobalContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailGlobalContext.Provider>
  );
};

export { EmailGlobalProvider, EmailGlobalContext };