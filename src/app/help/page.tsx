import Footer from '@/components/Footer';
import PriNavbar from '@/components/Navbar';
import React from 'react';

const HelpCenter = () => {
  return (
    <div className='max-h-screen '>
    <PriNavbar/>
    
    <div className="max-w-4xl mx-auto px-4 py-8 mb-36">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Details</h2>
        <p className="mb-2"><strong>Address:</strong> Jain Aman Ajay Jain Mohalla Ater</p>
        <p className="mb-2"><strong>Phone:</strong> <a href="tel:9516677164" className="text-blue-600">9516677164</a></p>
        <p className="mb-2"><strong>Email:</strong> <a href="mailto:arihantjain7000@gmail.com" className="text-blue-600">arihantjain7000@gmail.com</a></p>
        <p className="mb-2"><strong>Hours of Operation:</strong> 9:00 AM to 10:00 PM</p>
      </section>

     
    </div>
    <Footer/>
    </div>
  );
};

export default HelpCenter;
