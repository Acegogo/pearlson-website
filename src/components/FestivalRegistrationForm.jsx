import React, { useState } from 'react';

const initialState = {
  schoolName: '',
  contactPerson: '',
  email: '',
  phone: '',
  transactionCode: '',
  categories: [],
};

const categories = [
  'Kindergarten: singing game',
  'Lower primary: song and dance',
  'Lower primary: choral poem',
  'Upper primary: choral verse',
  'Upper primary: song and dance',
  'Upper primary: rap',
  'Junior school: skit/play',
  'Junior school: modern dance',
  'Solo pieces: solo verse',
  'Solo pieces: public speaking',
  'Solo pieces: solo song',
];

function validate(values) {
  const errors = {};
  if (!values.schoolName) errors.schoolName = 'School name is required.';
  if (!values.contactPerson) errors.contactPerson = 'Contact person is required.';
  if (!values.email) errors.email = 'Email is required.';
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Invalid email address.';
  if (!values.phone) errors.phone = 'Phone number is required.';
  else if (!/^\+254\d{9}$/.test(values.phone)) errors.phone = 'Phone must be in +254xxxxxxxxx format.';
  if (!values.transactionCode) errors.transactionCode = 'M-Pesa transaction code is required.';
  else if (!/^[A-Za-z0-9]{10,12}$/.test(values.transactionCode)) errors.transactionCode = 'Transaction code must be 10-12 alphanumeric characters.';
  if (!values.categories.length) errors.categories = 'At least one category is required.';
  return errors;
}

const FestivalRegistrationForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'categories') {
      setValues(v => ({ 
        ...v, 
        categories: checked 
          ? [...v.categories, value] 
          : v.categories.filter(c => c !== value) 
      }));
      setErrors({ ...errors, categories: undefined });
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
      const res = await fetch('/.netlify/functions/submit-festival-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setSuccess(true);
        setValues(initialState);
      } else {
        setServerError(data.error || `Submission failed (${res.status}). Please try again.`);
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
      <h2 className="text-2xl font-bold mb-4 text-[#FF4500]">Multilingual Festival Registration (Mombasa Edition)</h2>
      <p className="mb-4 text-gray-200">
        Pay <span className="font-bold">Ksh 3,500</span> registration fee via M-Pesa Pay-Bill <span className="font-bold">522522</span>, account <span className="font-bold">6359999</span> before submitting.<br/>
        Each pupil pays <span className="font-bold">Ksh 500</span> entry fee on event day using the same Pay-Bill. <span className="font-bold">No cash accepted.</span>
      </p>
      {success && (
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
      )}
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
        <label htmlFor="transactionCode" className="block font-semibold mb-1">M-Pesa Transaction Code</label>
        <input
          id="transactionCode"
          name="transactionCode"
          type="text"
          className="w-full p-2 rounded border focus:ring-2 focus:ring-[#FF4500] text-black"
          value={values.transactionCode}
          onChange={handleChange}
          aria-invalid={!!errors.transactionCode}
          aria-describedby="transactionCode-error"
        />
        {errors.transactionCode && <div id="transactionCode-error" className="text-red-600 text-sm mt-1">{errors.transactionCode}</div>}
      </div>
      <div className="mb-4">
        <span className="block font-semibold mb-1">Category/Item (Select all that apply)</span>
        <div className="max-h-48 overflow-y-auto border border-gray-300 rounded p-3 bg-white">
          {categories.map(cat => (
            <label key={cat} className="flex items-center mb-2 hover:bg-gray-50 p-1 rounded cursor-pointer">
              <input
                type="checkbox"
                id={`category-${cat}`}
                name="categories"
                value={cat}
                checked={values.categories.includes(cat)}
                onChange={handleChange}
                className="mr-3 w-4 h-4 text-[#FF4500] bg-gray-100 border-gray-300 rounded focus:ring-[#FF4500] focus:ring-2"
              />
              <span className="text-gray-800 text-sm">{cat}</span>
            </label>
          ))}
        </div>
        {errors.categories && <div className="text-red-600 text-sm mt-1">{errors.categories}</div>}
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 rounded bg-[#FF4500] hover:bg-[#cc3700] text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:ring-offset-2 disabled:opacity-60"
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : 'Register'}
      </button>
    </form>
  );
};

export default FestivalRegistrationForm; 