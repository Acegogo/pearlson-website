import React, { useEffect } from 'react';
import ChampionsLeagueForm from '../components/ChampionsLeagueForm';
import PageBackground from '../components/PageBackground';

const ChampionsLeagueRegister = () => {
  useEffect(() => {
    document.title = 'National Champions League 2026 Registration | Pearlson Languages';
  }, []);

  return (
    <PageBackground image="/Images/Past Events/Nairobi Edition/1 (175).jpg" className="p-4">
      <div className="flex items-center justify-center py-8 md:py-12">
        <div className="w-full max-w-3xl glow-card p-6 md:p-10 bg-white">
          <ChampionsLeagueForm />
        </div>
      </div>
    </PageBackground>
  );
};

export default ChampionsLeagueRegister;
