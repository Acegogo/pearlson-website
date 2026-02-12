import React, { useEffect } from 'react';
import WesternFestivalForm from '../components/WesternFestivalForm';
import PageBackground from '../components/PageBackground';

const WesternFestivalRegister = () => {
  useEffect(() => {
    document.title = 'Western Edition 2026 Registration | Pearlson Languages';
  }, []);
  return (
    <PageBackground
      image="/Images/Past Events/Nairobi Edition/1 (201).jpg"
      className="flex items-center justify-center p-4"
    >
      <div className="relative z-10 w-full flex items-center justify-center py-8">
        <div className="w-full max-w-xl bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg">
          <WesternFestivalForm />
        </div>
      </div>
    </PageBackground>
  );
};

export default WesternFestivalRegister;

