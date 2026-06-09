import React, { useEffect } from 'react';
import CoursesRegistrationForm from '../components/CoursesRegistrationForm';
import PageBackground from '../components/PageBackground';

const CoursesRegister = () => {
  useEffect(() => {
    document.title = 'Courses Registration | Pearlson Languages';
  }, []);

  return (
    <PageBackground image="/Images/Past Events/Nairobi Edition/1 (163).jpg" className="p-4">
      <div className="flex items-center justify-center py-8 md:py-12">
        <div className="w-full max-w-xl glow-card p-6 md:p-10 bg-white">
          <CoursesRegistrationForm />
        </div>
      </div>
    </PageBackground>
  );
};

export default CoursesRegister;
