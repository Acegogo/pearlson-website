import React, { useEffect } from 'react';
import CoursesRegistrationForm from '../components/CoursesRegistrationForm';
import PageBackground from '../components/PageBackground';

const CoursesRegister = () => {
  useEffect(() => {
    document.title = 'Courses Registration | Pearlson Languages';
  }, []);
  return (
    <PageBackground
      image="/Images/Past Events/Nairobi Edition/1 (163).jpg"
      className="flex items-center justify-center p-4"
    >
      <div className="relative z-10 w-full flex items-center justify-center py-8">
        <div className="w-full max-w-xl bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg">
          <CoursesRegistrationForm />
        </div>
      </div>
    </PageBackground>
  );
};

export default CoursesRegister; 