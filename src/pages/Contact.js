import React, { useState } from 'react';
import Card from '../components/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div>
      <section className="bg-teal py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-cream mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-orange max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our language programs
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Card className="bg-white">
              <h2 className="text-2xl font-bold mb-6 text-olive">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" />
                </div>
                <div>
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="form-input" required />
                </div>
                <div>
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="form-input" required />
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="bg-white">
                <h2 className="text-2xl font-bold mb-6 text-olive">Contact Information</h2>
                <div className="space-y-4 text-olive">
                  <div>
                    <h3 className="font-semibold text-olive">Email</h3>
                    <p>info@pearlsonlanguages.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-olive">Phone</h3>
                    <p>+254 727 211 822</p>
                    <p>+254 762 292 301</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-olive">Address</h3>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </Card>

              <Card padding={false} className="bg-white overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8192213761214!2d36.82121461475854!3d-1.2922999990634547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2a49f4b49%3A0x7f3ce6678010d1f!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Pearlson Languages Location"
                />
              </Card>

              <Card className="bg-white">
                <h2 className="text-2xl font-bold mb-4 text-olive">Follow Us</h2>
                <div className="flex gap-4">
                  <a href="https://x.com/Pearlsonke" target="_blank" rel="noopener noreferrer" className="text-olive hover:text-orange">Twitter/X</a>
                  <a href="https://www.instagram.com/pearlson_languages/" target="_blank" rel="noopener noreferrer" className="text-olive hover:text-orange">Instagram</a>
                  <a href="https://web.facebook.com/profile.php?id=61576307943244" target="_blank" rel="noopener noreferrer" className="text-olive hover:text-orange">Facebook</a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
