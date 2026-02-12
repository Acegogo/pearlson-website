import React, { useEffect } from 'react';
import FestivalRegistrationForm from '../components/FestivalRegistrationForm';
import PageBackground from '../components/PageBackground';

const FestivalRegister = () => {
  useEffect(() => {
    document.title = 'Festival Registration | Pearlson Languages';
  }, []);
  return (
    <PageBackground
      image="/Images/Past Events/Nairobi Edition/1 (175).jpg"
      className="flex items-center justify-center p-4"
    >
      <div className="relative z-10 w-full flex items-center justify-center py-8">
        <div className="w-full max-w-xl bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg">
          <FestivalRegistrationForm />
        </div>
      </div>
    </PageBackground>
  );
};

export default FestivalRegister; 