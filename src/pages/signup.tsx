import React from 'react';

import User from 'src/components/User';

const SignUp: React.FC<void> = () => {
  return (
    <div className="fixed top-16 left-0 w-full h-full flex justify-center items-center">
      <User />
    </div>
  );
};

export default SignUp;
