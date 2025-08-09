import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Workbooks = () => {
  useEffect(() => {
    document.title = 'Interactive Workbooks | Pearlson Languages';
  }, []);

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center py-16 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/Images/workbooksbackground.png')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto bg-cream/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-orange">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full bg-[#FF4500]/10 flex items-center justify-center animate-pulse">
                <svg className="w-10 h-10 text-[#FF4500] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Interactive Workbooks</h1>
            <p className="text-gray-700 mb-6 max-w-2xl">
              We are crafting engaging, interactive French and German workbooks tailored for schools. 
              Track progress, assign activities, and make language learning fun.
            </p>
            <div className="inline-flex items-center gap-2 text-[#FF4500] font-semibold bg-[#FF4500]/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-ping"></span>
              Coming Soon
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full">
              {["French A1", "French A2", "German A1"].map((title, i) => (
                <div key={i} className="relative p-6 rounded-xl bg-white/95 backdrop-blur border border-gray-200 shadow hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <svg className="mx-auto w-8 h-8 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2zm10-11V7a4 4 0 10-8 0v3" />
                      </svg>
                      <div className="text-gray-600 font-medium">Locked Preview</div>
                    </div>
                  </div>
                  <div className="h-28 rounded-lg bg-gradient-to-br from-orange/20 to-olive/20 mb-4" />
                  <h3 className="font-semibold text-black">{title}</h3>
                  <p className="text-sm text-gray-600 mt-1">Activities • Quizzes • Progress</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-gray-700">
              Want early access? Email{' '}
              <a href="mailto:info@pearlsonlanguages.com" className="text-[#FF4500] font-semibold underline">info@pearlsonlanguages.com</a>
              {' '}or visit the{' '}
              <Link to="/courses" className="text-[#FF4500] font-semibold underline">Courses</Link>{' '}page.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workbooks;