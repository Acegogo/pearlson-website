import React from 'react';
import { motion } from 'framer-motion';

const PageBackground = ({ image, children, className = "" }) => {
    return (
        <div className={`relative min-h-screen w-full overflow-hidden ${className}`}>
            {/* Background Image Layer */}
            <div className="fixed inset-0 z-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    {/* Actual Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                    {/* Overlay for transparency/faded effect */}
                    {/* Using cream/white usage from theme to ensure text readability */}
                    <div className="absolute inset-0 bg-cream/90 backdrop-blur-[2px]" />
                </motion.div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default PageBackground;
