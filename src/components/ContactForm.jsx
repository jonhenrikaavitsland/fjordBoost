import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault;
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 15000);
  }

  const handleChange = (event) => {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  return <div className="flex-grow-1">
    {isSubmitted ? (<section className="flex flex-col gap-4 text-center border border-accent/60 p-5 rounded-xl">
      <h3 className="text-lg font-semibold capitalize">message sent!</h3>
      <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
    </section>) : (<form onSubmit={handleSubmit}
          className='flex flex-col gap-4 border border-accent/60 p-5 rounded-xl'
        >
          <p className='leading-none'>Send us a message</p>
          <div className='flex flex-col lg:flex-row gap-4'>
            <div className='flex flex-col gap-2 flex-grow-1'>
              <label htmlFor='name' className='text-sm font-semibold'
                >Name *</label>
              <input
                type='text'
                id='name'
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='bg-accent/40 ps-2 py-1 pe-1 rounded-lg'
                required
              />
            </div>
            <div className='flex flex-col gap-2 flex-grow-1'>
              <label
                htmlFor='email-contact'
                className='text-sm font-semibold'>Email *</label>
              <input
                type='email'
                id='email-contact'
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='bg-accent/40 ps-2 py-1 pe-1 rounded-lg'
                required
              />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='company' className='text-sm font-semibold'
              >Company</label>
            <input
              type='text'
              id='company'
              name="company"
              value={formData.company}
              onChange={handleChange}
              className='bg-accent/40 ps-2 py-1 pe-1 rounded-lg'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='message' className='text-sm font-semibold'
              >Message *</label>
            <textarea
              name='message'
              id='message'
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className='bg-accent/40 p-2 rounded-lg'
              placeholder='Tell us about your SEO goals and challenges...'
              required></textarea>
          </div>
          <button
            type='submit'
            className='bg-secondary text-white w-full rounded-lg py-2 px-4 cursor-pointer font-semibold capitalize hover:bg-secondary/90'
            >send message</button>
        </form>)}
  </div>
}