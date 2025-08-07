import React, { useEffect } from 'react';
import FestivalRegistrationForm from '../components/FestivalRegistrationForm';

const FestivalRegister = () => {
  useEffect(() => {
    document.title = 'Festival Registration | Pearlson Languages';
  }, []);
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/Images/Past Events/Nairobi Edition/1 (175).jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
      <div className="relative z-10 w-full flex items-center justify-center py-8">
        <div className="w-full max-w-xl bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg">
          <FestivalRegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default FestivalRegister; 