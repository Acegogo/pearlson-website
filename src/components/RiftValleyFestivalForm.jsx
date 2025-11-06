import React, { useState } from 'react';

const categories = [
  'Kindergarten: Singing game',
  'Lower primary (grade 1-3): Song/song and dance/choral poem',
  'Upper primary (grade 4-6): Choral verse/song and dance/rap',
  'Junior school (grade 7-9): Skit/play/modern dance',
  'Secondary school: Skit, song, poem, choral verse',
  'Solo pieces (any grade): Solo verse/public speaking/solo song',
];

const RiftValleyFestivalForm = () => {
  const [formData, setFormData] = useState({
    'school-name': '',
    'contact-person': '',
    email: '',
    phone: '',
    'transaction-code': '',
    categories: [],
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'categories') {
      setFormData(prev => ({
        ...prev,
        categories: checked
          ? [...prev.categories, value]
          : prev.categories.filter(c => c !== value)
      }));
      setErrors(prev => ({ ...prev, categories: undefined }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData['school-name']) newErrors['school-name'] = 'School name is required.';
    if (!formData['contact-person']) newErrors['contact-person'] = 'Contact person is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    else if (!/^\+254\d{9}$/.test(formData.phone)) newErrors.phone = 'Phone must be in +254xxxxxxxxx format.';
    if (!formData['transaction-code']) newErrors['transaction-code'] = 'M-Pesa transaction code is required.';
    else if (!/^[A-Za-z0-9]{10,12}$/.test(formData['transaction-code'])) newErrors['transaction-code'] = 'Transaction code must be 10-12 alphanumeric characters.';
    if (!formData.categories.length) newErrors.categories = 'At least one category is required.';
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
    
    // Convert categories array to multiple form values for Netlify
    formDataObj.delete('categories');
    formData.categories.forEach(category => {
      formDataObj.append('categories', category);
    });
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj).toString(),
    })
      .then(() => {
        setSuccess(true);
        setFormData({
          'school-name': '',
          'contact-person': '',
          email: '',
          phone: '',
          'transaction-code': '',
          categories: [],
        });
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
      <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
        <svg width="80" height="80" viewBox="0 0 80 80" className="mb-4">
          <circle cx="40" cy="40" r="38" fill="#fff" stroke="#66D9A8" strokeWidth="4" />
          <polyline points="24,44 36,56 56,32" fill="none" stroke="#66D9A8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="points" dur="0.5s" values="24,44 36,56 36,56;24,44 36,56 56,32" fill="freeze" />
          </polyline>
        </svg>
        <div className="text-2xl font-bold text-green-400 mb-2">Registration Successful!</div>
        <div className="text-lg text-amber-700">Thank you for registering for Rift Valley Edition 2026. We will contact you soon.</div>
      </div>
    );
  }

  return (
    <form
      name="festival-riftvalley-2026"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-green-800 p-8 rounded-lg shadow-lg text-amber-700 mt-8 mb-8"
    >
      <input type="hidden" name="form-name" value="festival-riftvalley-2026" />
      <input type="hidden" name="festival-edition" value="Rift Valley Edition 2026" />
      <p style={{ display: 'none' }}>
        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
      </p>

      <h2 className="text-2xl font-bold mb-4 text-[#FF4500]">Multilingual Festival Registration - Rift Valley Edition 2026</h2>
      <p className="mb-4 text-gray-200">
        Pay <span className="font-bold">Ksh 3,500</span> registration fee via M-Pesa Pay-Bill <span className="font-bold">522522</span>, account <span className="font-bold">6359999</span> before submitting.<br/>
        Each pupil pays <span className="font-bold">Ksh 500</span> entry fee on event day using the same Pay-Bill. <span className="font-bold">No cash accepted.</span>
      </p>

      {errors.submit && <div className="mb-4 text-red-600">{errors.submit}</div>}

      <div className="mb-4">
        <label htmlFor="school-name" className="block font-semibold mb-1">School Name *</label>
        <input
          id="school-name"
          name="school-name"
          type="text"
          required
          className="w-full p-2 rounded border focus:ring-2 focus:ring-[#FF4500] text-black"
          value={formData['school-name']}
          onChange={handleChange}
        />
        {errors['school-name'] && <div className="text-red-600 text-sm mt-1">{errors['school-name']}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="contact-person" className="block font-semibold mb-1">Contact Person *</label>
        <input
          id="contact-person"
          name="contact-person"
          type="text"
          required
          className="w-full p-2 rounded border focus:ring-2 focus:ring-[#FF4500] text-black"
          value={formData['contact-person']}
          onChange={handleChange}
        />
        {errors['contact-person'] && <div className="text-red-600 text-sm mt-1">{errors['contact-person']}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold mb-1">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full p-2 rounded border focus:ring-2 focus:ring-[#FF4500] text-black"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block font-semibold mb-1">Phone Number *</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          pattern="\+254\d{9}"
          placeholder="+254xxxxxxxxx"
          required
          className="w-full p-2 rounded border focus:ring-2 focus:ring-[#FF4500] text-black"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="text-red-600 text-sm mt-1">{errors.phone}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="transaction-code" className="block font-semibold mb-1">M-Pesa Transaction Code *</label>
        <input
          id="transaction-code"
          name="transaction-code"
          type="text"
          pattern="[A-Za-z0-9]{10,12}"
          required
          className="w-full p-2 rounded border focus:ring-2 focus:ring-[#FF4500] text-black"
          value={formData['transaction-code']}
          onChange={handleChange}
        />
        {errors['transaction-code'] && <div className="text-red-600 text-sm mt-1">{errors['transaction-code']}</div>}
      </div>

      <div className="mb-4">
        <span className="block font-semibold mb-1">Performance Categories * (Select all that apply)</span>
        <div className="max-h-48 overflow-y-auto border border-gray-300 rounded p-3 bg-white">
          {categories.map(cat => (
            <label key={cat} className="flex items-center mb-2 hover:bg-gray-50 p-1 rounded cursor-pointer">
              <input
                type="checkbox"
                name="categories"
                value={cat}
                checked={formData.categories.includes(cat)}
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
        disabled={submitting}
        className="w-full py-2 px-4 rounded bg-[#FF4500] hover:bg-[#cc3700] text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:ring-offset-2 disabled:opacity-60"
      >
        {submitting ? 'Submitting...' : 'Register'}
      </button>
    </form>
  );
};

export default RiftValleyFestivalForm;

