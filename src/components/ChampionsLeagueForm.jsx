import React, { useState } from 'react';
import SiteLogo from './SiteLogo';

const CHAMPIONS_POSTER = '/Images/championsleague-detailsone.jpeg';

const languages = [
  'English',
  'Kiswahili',
  'French',
  'German',
  'Arabic',
  'Mandarin',
  'Spanish',
  'Sign Language',
  'Indigenous Languages',
];

const categories = [
  'Pre-Primary: Singing Game',
  'Lower Primary (Grade 1-3): Song',
  'Upper Primary (Grade 4-6): Choral Verse',
  'Junior School (Grade 7-9): Modern Dance',
  'Senior School (Grade 10): Skit',
  'Mixed Grades (Grade 1-10): Traditional Dance',
  'Solo Pieces (Any Grade): Solo Verse / Public Speaking / Solo Song / Story Telling',
];

const counties = [
  'Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo-Marakwet', 'Embu', 'Garissa',
  'Homa Bay', 'Isiolo', 'Kajiado', 'Kakamega', 'Kericho', 'Kiambu', 'Kilifi',
  'Kirinyaga', 'Kisii', 'Kisumu', 'Kitui', 'Kwale', 'Laikipia', 'Lamu',
  'Machakos', 'Makueni', 'Mandera', 'Marsabit', 'Meru', 'Migori', 'Mombasa',
  'Murang\'a', 'Nairobi', 'Nakuru', 'Nandi', 'Narok', 'Nyamira', 'Nyandarua',
  'Nyeri', 'Samburu', 'Siaya', 'Taita-Taveta', 'Tana River', 'Tharaka-Nithi',
  'Trans Nzoia', 'Turkana', 'Uasin Gishu', 'Vihiga', 'Wajir', 'West Pokot',
];

const initialState = {
  'school-name': '',
  county: '',
  'contact-person': '',
  email: '',
  phone: '',
  categories: [],
  languages: [],
};

const ChampionsLeagueForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'categories') {
        setFormData(prev => ({
          ...prev,
          categories: checked
            ? [...prev.categories, value]
            : prev.categories.filter(c => c !== value)
        }));
        setErrors(prev => ({ ...prev, categories: undefined }));
      } else if (name === 'languages') {
        setFormData(prev => ({
          ...prev,
          languages: checked
            ? [...prev.languages, value]
            : prev.languages.filter(l => l !== value)
        }));
        setErrors(prev => ({ ...prev, languages: undefined }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData['school-name']) newErrors['school-name'] = 'School name is required.';
    if (!formData.county) newErrors.county = 'County is required.';
    if (!formData['contact-person']) newErrors['contact-person'] = 'Contact person is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    else if (!/^\+254\d{9}$/.test(formData.phone)) newErrors.phone = 'Phone must be in +254xxxxxxxxx format.';
    if (!formData.categories.length) newErrors.categories = 'At least one category is required.';
    if (!formData.languages.length) newErrors.languages = 'At least one language is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setErrors({});

    const form = e.target;
    const formDataObj = new FormData(form);

    formDataObj.delete('categories');
    formData.categories.forEach(category => {
      formDataObj.append('categories', category);
    });

    formDataObj.delete('languages');
    formData.languages.forEach(language => {
      formDataObj.append('languages', language);
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj).toString(),
    })
      .then(() => {
        setSuccess(true);
        setFormData(initialState);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setErrors({ submit: 'Submission failed. Please try again.' });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 animate-fade-in text-center px-4">
        <div className="w-20 h-20 rounded-full bg-teal/20 flex items-center justify-center mb-6 shadow-glow-teal">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="22" fill="none" stroke="#008080" strokeWidth="3" />
            <polyline points="14,25 21,32 34,18" fill="none" stroke="#008080" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-teal mb-2">Registration Successful!</h3>
        <p className="text-olive max-w-md">
          Thank you for registering for the National Champions League Edition 2026.
          We will contact you soon with further details.
        </p>
      </div>
    );
  }

  return (
    <form
      name="champions-league-2026"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="w-full"
    >
      <input type="hidden" name="form-name" value="champions-league-2026" />
      <input type="hidden" name="festival-edition" value="National Champions League Edition 2026" />
      <p style={{ display: 'none' }}>
        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
      </p>

      <div className="text-center mb-8">
        <img
          src={CHAMPIONS_POSTER}
          alt="National Champions League Multilingual Festival 2026 official poster"
          className="w-full max-w-lg mx-auto rounded-xl border border-orange/20 shadow-md mb-6"
          loading="eager"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <SiteLogo className="h-14" />
          <span className="text-2xl text-orange font-light hidden sm:block">&times;</span>
          <img
            src="/Images/kpsa-logo.png"
            alt="Kenya Private Schools Association (KPSA) logo"
            className="h-16 w-16 object-contain bg-white rounded-xl p-1 shadow-sm"
            loading="lazy"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-olive mb-2">
          National Champions League Multilingual Festival 2026
        </h2>
        <p className="partnership-badge mx-auto mb-3 w-fit">
          In partnership with Kenya Private Schools Association (KPSA)
        </p>
        <p className="text-orange font-medium mb-2">
          Borderless Voices, Boundless Solutions — For a Better Tomorrow
        </p>
        <p className="text-olive/80 text-sm md:text-base max-w-lg mx-auto">
          <strong>1 August 2026</strong> · Light Academy, Nyali Mombasa · Nationwide registration for private schools across Kenya
        </p>
        <p className="text-olive/70 text-sm mt-2 max-w-md mx-auto">
          Maximum of 8 items per language. Attractive prizes await winning schools!
        </p>
      </div>

      {errors.submit && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{errors.submit}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="school-name" className="form-label">School Name *</label>
          <input
            id="school-name"
            name="school-name"
            type="text"
            required
            className="form-input"
            value={formData['school-name']}
            onChange={handleChange}
          />
          {errors['school-name'] && <div className="text-red-500 text-sm mt-1">{errors['school-name']}</div>}
        </div>

        <div>
          <label htmlFor="county" className="form-label">County *</label>
          <select
            id="county"
            name="county"
            required
            className="form-input"
            value={formData.county}
            onChange={handleChange}
          >
            <option value="">Select county</option>
            {counties.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.county && <div className="text-red-500 text-sm mt-1">{errors.county}</div>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contact-person" className="form-label">Contact Person *</label>
          <input
            id="contact-person"
            name="contact-person"
            type="text"
            required
            className="form-input"
            value={formData['contact-person']}
            onChange={handleChange}
          />
          {errors['contact-person'] && <div className="text-red-500 text-sm mt-1">{errors['contact-person']}</div>}
        </div>

        <div>
          <label htmlFor="email" className="form-label">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            pattern="\+254\d{9}"
            placeholder="+254xxxxxxxxx"
            required
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
        </div>

        <div>
          <label htmlFor="transaction-code" className="form-label">M-Pesa Transaction Code *</label>
          <input
            id="transaction-code"
            name="transaction-code"
            type="text"
            pattern="[A-Za-z0-9]{10,12}"
            required
            className="form-input"
            value={formData['transaction-code']}
            onChange={handleChange}
          />
          {errors['transaction-code'] && <div className="text-red-500 text-sm mt-1">{errors['transaction-code']}</div>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <span className="form-label">Languages * (Select all that apply)</span>
          <div className="form-checkbox-group">
            {languages.map(lang => (
              <label key={lang} className="flex items-center mb-2 hover:bg-orange/5 p-1.5 rounded-lg cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  name="languages"
                  value={lang}
                  checked={formData.languages.includes(lang)}
                  onChange={handleChange}
                  className="mr-3 w-4 h-4 text-orange rounded focus:ring-orange"
                />
                <span className="text-olive text-sm">{lang}</span>
              </label>
            ))}
          </div>
          {errors.languages && <div className="text-red-500 text-sm mt-1">{errors.languages}</div>}
        </div>

        <div>
          <span className="form-label">Performance Categories * (Select all that apply)</span>
          <div className="form-checkbox-group">
            {categories.map(cat => (
              <label key={cat} className="flex items-center mb-2 hover:bg-orange/5 p-1.5 rounded-lg cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  name="categories"
                  value={cat}
                  checked={formData.categories.includes(cat)}
                  onChange={handleChange}
                  className="mr-3 w-4 h-4 text-orange rounded focus:ring-orange"
                />
                <span className="text-olive text-sm">{cat}</span>
              </label>
            ))}
          </div>
          {errors.categories && <div className="text-red-500 text-sm mt-1">{errors.categories}</div>}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 px-6 rounded-xl bg-orange hover:bg-orange/90 text-cream font-bold
                   transition-all duration-300 shadow-glow-orange hover:shadow-glow-card-hover
                   focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2
                   disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
      >
        {submitting ? 'Submitting...' : 'Register for Champions League'}
      </button>
    </form>
  );
};

export default ChampionsLeagueForm;
