import React, { useEffect } from 'react';
import NairobiFestivalForm from '../components/NairobiFestivalForm';
import PageBackground from '../components/PageBackground';

const NairobiFestivalRegister = () => {
  useEffect(() => {
    document.title = 'Nairobi Edition 2026 Registration | Pearlson Languages';
  }, []);
  return (
    <PageBackground
      image="/Images/Past Events/Nairobi Edition/1 (175).jpg"
      className="flex items-center justify-center p-4"
    >
      <div className="relative z-10 w-full flex items-center justify-center py-8">
        <div className="w-full max-w-xl bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg">
          <NairobiFestivalForm />
        </div>
      </div>
    </PageBackground>
  );
};

export default NairobiFestivalRegister;

