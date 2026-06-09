import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import PageBackground from '../components/PageBackground';

const SLIDESHOW_IMAGES = {
  nairobi: [
    '1 (286).jpg', '1 (253).jpg', '1 (175).jpg', '1 (163).jpg', '1 (94).jpg', '1 (55).jpg',
  ],
  coast: [
    'IMG-20250410-WA0027.jpg', 'IMG-20250410-WA0083.jpg', 'IMG-20250410-WA0093.jpg',
    'IMG-20250410-WA0105.jpg', 'IMG-20250410-WA0022.jpg', 'IMG-20250410-WA0025.jpg',
  ],
};

function calculateCountdown(targetDate) {
  const distance = targetDate.getTime() - Date.now();
  if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance % 86400000) / 3600000),
    minutes: Math.floor((distance % 3600000) / 60000),
    seconds: Math.floor((distance % 60000) / 1000),
  };
}

function LightSlideshow({ images, basePath, altPrefix }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full rounded-xl overflow-hidden mb-4 border border-orange/20">
      <div className="relative w-full aspect-video bg-olive/10">
        <img
          src={`${basePath}${images[index]}`}
          alt={`${altPrefix} ${index + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex justify-center gap-1.5 py-2 bg-cream">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-orange' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

const EVENTS = [
  {
    id: 'champions-league-2026',
    name: 'National Champions League Edition 2026',
    date: new Date('2026-08-01T08:00:00+03:00'),
    location: 'Nationwide, Kenya',
    description: 'The grand national finale in partnership with KPSA — private schools across Kenya unite',
    tagline: 'Where young linguists shine! Over 25 schools competing across 8 languages.',
    theme: "Innovate, Unite, and Transform: Africa's Journey Ahead",
    categories: 'Kindergarten to Junior School competitions',
    prizes: 'Trophies, medals, and school grants for winners!',
    registerRoute: '/champions-league-register',
    poster: '/Images/poster_4_nairobi_v2.png',
    partnership: true,
  },
];

const TOUR_2026 = [
  {
    title: 'Multilingual Festival - Nairobi Edition 2026',
    date: 'March 28, 2026',
    location: 'Nairobi, Kenya',
    description: 'Kickstarting our national tour in the capital city. Over 25 schools competed across 8 languages under the theme "Innovate, Unite, and Transform: Africa\'s Journey Ahead".',
    poster: '/Images/poster_4_nairobi_v2.png',
  },
  {
    title: 'Multilingual Festival - Western Edition 2026',
    date: 'March 21, 2026',
    location: 'Western Region, Kenya',
    description: 'Grand finale celebration of our national tour in Western Kenya. Schools showcased performances from Kindergarten through Junior School with trophies, medals, and school grants awarded.',
    poster: '/Images/poster_3_western_v2.png',
  },
  {
    title: 'Multilingual Festival - Coast Edition 2026',
    date: 'March 14, 2026',
    location: 'Coast Region, Kenya',
    description: 'Celebrating coastal diversity and cultural fusion. Students from across the Coast region performed in English, Kiswahili, French, German, Arabic, and more.',
    poster: '/Images/poster_2_coast_v2.png',
  },
  {
    title: 'Multilingual Festival - Rift Valley Edition 2026',
    date: 'March 7, 2026',
    location: 'Rift Valley Region, Kenya',
    description: 'Expanding horizons across the entire Rift Valley region. Young linguists from over 25 schools competed in songs, poems, skits, and choral verse.',
    poster: '/Images/poster_1_rift_valley_v2.png',
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [countdown, setCountdown] = useState(calculateCountdown(EVENTS[0].date));

  useEffect(() => {
    document.title = 'Events | Pearlson Languages';
  }, []);

  useEffect(() => {
    if (activeTab !== 'upcoming') return;
    const interval = setInterval(() => {
      setCountdown(calculateCountdown(EVENTS[0].date));
    }, 1000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const pastEvents = [
    ...TOUR_2026.map(e => ({ ...e, type: 'tour2026' })),
    {
      title: '2025 Coast Multilingual Edition',
      date: 'September 27, 2025',
      location: 'Coast Region, Kenya',
      description: 'The 2025 Coast Multilingual Festival brought together schools from across the coastal region for a vibrant celebration of language diversity. Students showcased their talents in multiple languages including English, Swahili, French, German, and local languages.',
      slideshow: 'coast',
    },
    {
      title: 'Multilingual Festival Nairobi Edition',
      date: 'June 21, 2025',
      location: 'Nyayo Stadium, Nairobi',
      description: 'On June 21, 2025, Nyayo Stadium hosted the Multilingual Fest Nairobi Edition, where over 17 primary schools showcased performances in English, Swahili, French, German, Arabic, and indigenous languages. With more than 425 students participating, the event was broadcasted on KTN and TV47.',
      slideshow: 'nairobi',
    },
    {
      title: 'Multilingual Festival Western Edition',
      date: 'March 2024',
      location: 'Western Kenya',
      description: 'A successful celebration of language diversity featuring student performances and cultural exchange.',
      images: [
        '/Images/IMG-20250410-WA0086.jpg',
        '/Images/IMG-20250410-WA0087.jpg',
        '/Images/IMG-20250410-WA0088.jpg',
      ],
    },
    {
      title: 'Language Exchange Program',
      date: 'January 2024',
      location: 'Various Schools',
      description: 'A series of language exchange programs connecting students with native speakers.',
      images: [
        '/Images/IMG-20250410-WA0092.jpg',
        '/Images/IMG-20250410-WA0093.jpg',
        '/Images/IMG-20250410-WA0094.jpg',
      ],
    },
  ];

  return (
    <PageBackground image="/Images/Past Events/Nairobi Edition/1 (253).jpg">
      <section
        className="relative py-16 md:py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/Past Events/Nairobi Edition/1 (286).jpg')" }}
      >
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-cream mb-4">
            Events & Celebrations
          </h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
            Join us in celebrating languages and cultural diversity through exciting events
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-xl border border-orange/30 p-1 bg-white">
              <button
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${activeTab === 'upcoming' ? 'bg-orange text-cream' : 'text-olive hover:bg-orange/10'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Events
              </button>
              <button
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${activeTab === 'past' ? 'bg-orange text-cream' : 'text-olive hover:bg-orange/10'}`}
                onClick={() => setActiveTab('past')}
              >
                Past Events
              </button>
            </div>
          </div>

          {activeTab === 'upcoming' && (
            <div className="max-w-3xl mx-auto">
              {EVENTS.map((event) => (
                <Card key={event.id} glow className="overflow-hidden bg-white">
                  <div className="p-6 md:p-8 pb-0">
                    {event.partnership && (
                      <div className="flex items-center justify-center gap-4 mb-6">
                        <img src="/Images/PLS_logo.png" alt="Pearlson Languages" className="h-12 bg-white rounded-xl p-1 shadow-sm" loading="lazy" />
                        <span className="text-orange text-xl">&times;</span>
                        <img src="/Images/kpsa-logo.png" alt="KPSA" className="h-14 w-14 object-contain bg-white rounded-xl p-1 shadow-sm" loading="lazy" />
                      </div>
                    )}
                    <h2 className="font-bold text-2xl md:text-3xl mb-2 text-olive text-center">{event.name}</h2>
                    <p className="italic text-orange text-center mb-2">{event.description}</p>
                    <p className="text-orange font-semibold text-center mb-4">{event.tagline}</p>
                    {event.partnership && (
                      <p className="partnership-badge mx-auto mb-4 w-fit">
                        In partnership with Kenya Private Schools Association (KPSA)
                      </p>
                    )}
                  </div>
                  {event.poster && (
                    <div className="px-6 md:px-8 mb-4">
                      <img src={event.poster} alt={`${event.name} poster`} className="w-full h-auto rounded-xl border border-orange/15 object-contain" loading="lazy" />
                    </div>
                  )}
                  <div className="px-6 md:px-8 pb-8 text-center">
                    <p className="text-lg font-bold text-olive mb-1">
                      {event.date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p className="text-olive/80 mb-4">{event.location}</p>
                    <div className="font-mono text-lg bg-orange/10 px-4 py-3 rounded-xl text-orange border border-orange/20 inline-block mb-6">
                      {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
                    </div>
                    <div className="space-y-1 text-olive/80 mb-6 text-sm md:text-base">
                      <p><strong>Theme:</strong> {event.theme}</p>
                      <p><strong>Categories:</strong> {event.categories}</p>
                      <p><strong>Prizes:</strong> {event.prizes}</p>
                    </div>
                    <Link to={event.registerRoute} className="btn-primary px-8 py-3 inline-block">
                      Register Now
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'past' && (
            <div className="space-y-8">
              {pastEvents.map((event, index) => (
                <Card key={index} glow className="overflow-hidden bg-white">
                  {event.type === 'tour2026' && event.poster && (
                    <div className="p-4 pb-0">
                      <img src={event.poster} alt={event.title} className="w-full h-auto rounded-xl border border-orange/15 object-contain" loading="lazy" />
                    </div>
                  )}
                  {event.slideshow === 'nairobi' && (
                    <div className="p-4 pb-0">
                      <LightSlideshow
                        images={SLIDESHOW_IMAGES.nairobi}
                        basePath="/Images/Past Events/Nairobi Edition/"
                        altPrefix="Nairobi Edition"
                      />
                    </div>
                  )}
                  {event.slideshow === 'coast' && (
                    <div className="p-4 pb-0">
                      <LightSlideshow
                        images={SLIDESHOW_IMAGES.coast}
                        basePath="/Images/"
                        altPrefix="Coast Edition"
                      />
                    </div>
                  )}
                  {event.images && (
                    <div className="grid grid-cols-3 gap-2 p-4 pb-0">
                      {event.images.map((img, i) => (
                        <img key={i} src={img} alt="" className="w-full h-24 object-cover rounded-lg" loading="lazy" decoding="async" />
                      ))}
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-olive">{event.title}</h3>
                    <p className="text-olive/70 text-sm mb-1">{event.date} · {event.location}</p>
                    <p className="text-olive/80">{event.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageBackground>
  );
};

export default Events;
