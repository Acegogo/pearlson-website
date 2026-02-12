import React, { useEffect } from 'react';
import RiftValleyFestivalForm from '../components/RiftValleyFestivalForm';
import PageBackground from '../components/PageBackground';

const RiftValleyFestivalRegister = () => {
  useEffect(() => {
    document.title = 'Rift Valley Edition 2026 Registration | Pearlson Languages';
  }, []);
  return (
    <PageBackground
      image="/Images/Past Events/Nairobi Edition/1 (185).jpg"
      className="flex items-center justify-center p-4"
    >
      <div className="relative z-10 w-full flex items-center justify-center py-8">
        <div className="w-full max-w-xl bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg">
          <RiftValleyFestivalForm />
        </div>
      </div>
    </PageBackground>
  );
};

export default RiftValleyFestivalRegister;

