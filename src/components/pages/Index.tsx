import React from 'react';
import AuthRedirectHome from '../../helpers/AuthRedirectHome'

const Index: React.FC= () => {
  return (
    <AuthRedirectHome>
      <p>TOP</p>
    </AuthRedirectHome>
  );
};

export default Index;
