/* eslint-disable react/no-unescaped-entities */
// pages/terms.js

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Terms = () => {
  return (
    <>
    <Navbar/>
   
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p>Welcome to Buy Me A Tea. By continuing to browse and use this website, you agree to comply with and be bound by the following terms and conditions of use, which, together with our privacy policy, govern our relationship with you in relation to this website.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Terminology</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>The terms 'us' or `'we' refer to the JAIN AMAN AJAY of the website.</li>
        <li>The term 'you' refers to the user or viewer of our website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Use of the Website</h2>
      <ul className="list-disc pl-5 mb-4">
        <li><strong>Content:</strong> The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
        <li><strong>No Warranty:</strong> Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose.</li>
        <li><strong>Liability:</strong> You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
        <li><strong>Risk:</strong> Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It is your responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <ul className="list-disc pl-5 mb-4">
        <li><strong>Ownership:</strong> This website contains material that is owned by or licensed to us. This includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited except in accordance with the copyright notice, which forms part of these terms and conditions.</li>
        <li><strong>Trademarks:</strong> All trademarks reproduced on this website, which are not the property of or licensed to the operator, are acknowledged on the website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Unauthorized Use</h2>
      <ul className="list-disc pl-5 mb-4">
        <li><strong>Misuse:</strong> Unauthorized use of this website by you may give rise to a claim for damages and/or be a criminal offense.</li>
        <li><strong>External Links:</strong> From time to time, this website may also include links to other websites. These links are provided for your convenience to offer further information. They do not signify that we endorse the website(s). We take no responsibility for the content of the linked website(s).</li>
        <li><strong>Linking to Us:</strong> You may not create a link to this website from another website or document without our prior consent.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Governing Law</h2>
      <p>Your use of this website and any dispute arising out of such use is subject to the laws of India or other regulatory authority.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Payment Terms</h2>
      <p>Credit card orders will commence upon receiving authorization/confirmation from the credit card/respective payment gateway companies.</p>

      <p className="mt-6">These terms and conditions help ensure a fair and secure environment for everyone using the Buy Me A Tea platform. If you have any questions or require further clarification, please contact us directly.</p>
    </div>
    <Footer/>
    </>
  );
};

export default Terms;
