import { useEffect, useRef, useState } from "react"

export default function NewsletterSignupForm() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed ] = useState(false);
  const successRef = useRef(null);

    useEffect(() => {
    if (!isSubscribed) return;
    const t = setTimeout(() => setIsSubscribed(false), 15000);
    // Scroll inn i view og gi skjermlesere beskjed
    successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    successRef.current?.focus?.();
    return () => clearTimeout(t);
  }, [isSubscribed]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  }

  return (
    <div className='flex flex-col gap-3'>
      {isSubscribed ? (<div className="py-8.75 leading-0 font-semibold">
        <span>Thanks for subscribing! Check your email for confirmation.</span>
      </div>) : (
      <div className="flex flex-col gap-3">
        <form className='w-full max-w-md mx-auto' onSubmit={handleSubmit}>
          <div className='flex flex-col md:flex-row gap-3'>
            <label htmlFor='email' className='sr-only'>email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email address'
              className='bg-white/10 border border-white/20 grow p-2 rounded-lg'
              required
            />
            <button
              type='submit' 
              className='bg-green-400 hover:bg-green-500 text-support hover:text-white transition-colors py-2 px-4 cursor-pointer rounded-lg font-semibold capitalize'
              >subscribe</button>
          </div>
        </form>
        <p className='text-xs'>
          No spam. Unsubscribe anytime. Your data is secure and
          respected.
        </p>
      </div>)}
    </div>
  )
}