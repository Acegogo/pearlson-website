import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ChampionsLeagueForm from '../components/ChampionsLeagueForm';
import PageBackground from '../components/PageBackground';

const ChampionsLeagueRegister = () => {
  useEffect(() => {
    document.title = 'National Champions League 2026 Registration | Pearlson Languages';
  }, []);

  return (
    <PageBackground
      image="/Images/Past Events/Nairobi Edition/1 (175).jpg"
      className="flex items-center justify-center p-4"
    >
      <div className="relative z-10 w-full flex items-center justify-center py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl glow-card p-6 md:p-10 shadow-glow-card"
        >
          <ChampionsLeagueForm />
        </motion.div>
      </div>
    </PageBackground>
  );
};

export default ChampionsLeagueRegister;
