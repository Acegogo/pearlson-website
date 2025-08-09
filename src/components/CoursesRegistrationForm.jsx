import React, { useState } from 'react';

const initialState = {
  schoolName: '',
  contactPerson: '',
  email: '',
  phone: '',
  numLearners: '',
  languages: [],
  services: [],
};

const languageOptions = [
  { label: 'French', value: 'French' },
  { label: 'German', value: 'German' },
];
const serviceOptions = [
  { label: 'Interactive workbooks', value: 'workbooks' },
  { label: 'School uniforms', value: 'uniforms' },
];

function validate(values) {
  const errors = {};
  if (!values.schoolName) errors.schoolName = 'School name is required.';
  if (!values.contactPerson) errors.contactPerson = 'Contact person is required.';
  if (!values.email) errors.email = 'Email is required.';
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Invalid email address.';
  if (!values.phone) errors.phone = 'Phone number is required.';
  else if (!/^\+254\d{9}$/.test(values.phone)) errors.phone = 'Phone must be in +254xxxxxxxxx format.';
  if (!values.numLearners) errors.numLearners = 'Number of learners is required.';
  else if (isNaN(values.numLearners) || values.numLearners < 1) errors.numLearners = 'Enter a valid number.';
  if (!values.languages.length) errors.languages = 'Select at least one language.';
  return errors;
}

const CoursesRegistrationForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'languages') {
      setValues(v => ({ ...v, languages: checked ? [...v.languages, value] : v.languages.filter(l => l !== value) }));
      setErrors({ ...errors, languages: undefined });
    } else if (type === 'checkbox' && name === 'services') {
      setValues(v => ({ ...v, services: checked ? [...v.services, value] : v.services.filter(s => s !== value) }));
    } else {
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;
    setSubmitting(true);
    setServerError('');
    try {
      const res = await fetch('/.netlify/functions/submit-courses-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      let data = {};
      let raw = '';
      try {
        raw = await res.text();
        data = raw ? JSON.parse(raw) : {};
      } catch (_) {
        // ignore JSON parse errors; we'll fall back to status
      }
      if (res.ok) {
        setSuccess(true);
        setValues(initialState);
      } else {
        setServerError((data && data.error) || `Submission failed (${res.status}). Please try again.`);
      }
    } catch (err) {
      console.error('Network error:', err);
      setServerError('Network error. Please check your internet connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-green-800 p-8 rounded-lg shadow-lg text-amber-700 mt-8 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[#FF4500]">Courses Registration</h2>
      <p className="mb-4 text-gray-200">
        Contact <a href="mailto:info@pearlsonlanguages.com" className="underline text-[#FF4500]">info@pearlsonlanguages.com</a> for payment details after submission.<br/>
        <span className="font-bold">Pricing:</span> Ksh 1,000 (150–350 learners), Ksh 800 (351–650 learners), Ksh 600 (&gt;650 learners).
      </p>
      {success ? (
        <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
          <svg width="80" height="80" viewBox="0 0 80 80" className="mb-4">
            <circle cx="40" cy="40" r="38" fill="#fff" stroke="#66D9A8" strokeWidth="4" />
            <polyline points="24,44 36,56 56,32" fill="none" stroke="#66D9A8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="points" dur="0.5s" values="24,44 36,56 36,56;24,44 36,56 56,32" fill="freeze" />
            </polyline>
          </svg>
          <div className="text-2xl font-bold text-green-400 mb-2">Registration Successful!</div>
          <div className="text-lg text-amber-700">Thank you for registering. We will contact you soon.</div>
        </div>
      ) : (
        <>
          {success && <div className="mb-4 text-green-400">Registration successful! We will contact you soon.</div>}
          {serverError && <div className="mb-4 text-red-600">{serverError}</div>}
          <div className="mb-4">
            <label htmlFor="schoolName" className="block font-semibold mb-1">School Name</label>
            <input
              id="schoolName"
              name="schoolName"
              type="text"
              className="w-full p-2 rounded border focus:ring-2 focus:ring-[#FF4500] text-black"
              value={values.schoolName}
              onChange={handleChange}
              aria-invalid={!!errors.schoolName}
              aria-describedby="schoolName-error"
            />
            {errors.schoolName && <div id="schoolName-error" className="text-red-600 text-sm mt-1">{errors.schoolName}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="contactPerson" className="block font-semibold mb-1">Contact Person</label>
            <input
              id="contactPerson"
              name="contactPerson"
              type="text"
              className="w-full p-2 rounded border focus:ring-2 focus:ring-[#FF4500] text-black"
              value={values.contactPerson}
              onChange={handleChange}
              aria-invalid={!!errors.contactPerson}
              aria-describedby="contactPerson-error"
            />
            {errors.contactPerson && <div id="contactPerson-error" className="text-red-600 text-sm mt-1">{errors.contactPerson}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-2 rounded border focus:ring-2 focus:ring-[#FF4500] text-black"
              value={values.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            {errors.email && <div id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-semibold mb-1">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="+254xxxxxxxxx"
              className="w-full p-2 rounded border focus:ring-2 focus:ring-[#FF4500] text-black"
              value={values.phone}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
              aria-describedby="phone-error"
            />
            {errors.phone && <div id="phone-error" className="text-red-600 text-sm mt-1">{errors.phone}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="numLearners" className="block font-semibold mb-1">Number of Learners</label>
            <input
              id="numLearners"
              name="numLearners"
              type="number"
              min="1"
              className="w-full p-2 rounded border focus:ring-2 focus:ring-[#FF4500] text-black"
              value={values.numLearners}
              onChange={handleChange}
              aria-invalid={!!errors.numLearners}
              aria-describedby="numLearners-error"
            />
            {errors.numLearners && <div id="numLearners-error" className="text-red-600 text-sm mt-1">{errors.numLearners}</div>}
          </div>
          <div className="mb-4">
            <span className="block font-semibold mb-1">Preferred Language(s)</span>
            <div className="flex flex-wrap gap-4">
              {languageOptions.map(opt => (
                <label key={opt.value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="languages"
                    value={opt.value}
                    checked={values.languages.includes(opt.value)}
                    onChange={handleChange}
                    className="accent-[#FF4500] focus:ring-2 focus:ring-[#FF4500]"
                    aria-checked={values.languages.includes(opt.value)}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
            {errors.languages && <div className="text-red-600 text-sm mt-1">{errors.languages}</div>}
          </div>
          <div className="mb-4">
            <span className="block font-semibold mb-1">Optional Services</span>
            <div className="flex flex-wrap gap-4">
              {serviceOptions.map(opt => (
                <label key={opt.value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value={opt.value}
                    checked={values.services.includes(opt.value)}
                    onChange={handleChange}
                    className="accent-[#FF4500] focus:ring-2 focus:ring-[#FF4500]"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded bg-[#FF4500] hover:bg-[#cc3700] text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:ring-offset-2 disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Register'}
          </button>
        </>
      )}
    </form>
  );
};

export default CoursesRegistrationForm; 