import Footer from '@/components/Footer';
import PriNavbar from '@/components/Navbar';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
    
     <PriNavbar/>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for Buy Me A Tea</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. What Information Do We Collect?</h2>
          <p>
            When you purchase something on <strong>Buy Me A Tea</strong>, as part of the buying process, we collect personal 
            information you provide, such as your name, email address, and UPI ID.
          </p>
          <p>
            When you browse our site, we automatically receive your computer’s internet protocol (IP) address, which provides us 
            with information about your browser and operating system.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. How Do We Use Your Information?</h2>
          <p>
            The information we collect is used solely for the purpose of processing transactions and providing you with our 
            services. If you consent, we may also send you emails about our platform, new products, and other updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Consent</h2>
          <h3 className="text-xl font-semibold mt-4">How Do We Obtain Your Consent?</h3>
          <p>
            By providing personal information to complete a transaction, you consent to our collecting and using it for that 
            purpose only. If we need your personal information for another purpose, like marketing, we will ask for your explicit 
            consent or provide a way to opt out.
          </p>
          <h3 className="text-xl font-semibold mt-4">How Do You Withdraw Consent?</h3>
          <p>
            You can withdraw your consent for us to contact you or for continued use or disclosure of your information at any 
            time by contacting us at <a href="mailto:arihantjain7000@gmail.com" className="text-blue-600">arihantjain7000@gmail.com</a> or mailing us at 
            Jain Aman Ajay Jain Mohalla Ater, India.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Disclosure</h2>
          <p>
            We may disclose your personal information if required by law or if you violate our Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Payment</h2>
          <p>
            We use Razorpay for processing payments. Razorpay does not store your card data on its servers. Your transaction data 
            is encrypted during payment processing and is used only as long as necessary to complete your transaction.
          </p>
          <p>
            For more details, please refer to <a href="https://razorpay.com" className="text-blue-600">Razorpay’s terms and conditions</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Third-Party Services</h2>
          <p>
            In general, third-party providers used by us will collect, use, and disclose your information only to the extent 
            necessary to allow them to perform services for us. However, certain third-party service providers, such as payment 
            gateways, have their own privacy policies regarding the information we are required to provide to them.
          </p>
          <p>
            We recommend that you read the privacy policies of these providers to understand how they handle your personal 
            information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Security</h2>
          <p>
            We take reasonable precautions and follow industry best practices to ensure your personal information is not 
            inappropriately lost, misused, accessed, disclosed, altered, or destroyed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Cookies</h2>
          <p>
            We use cookies to maintain user sessions. Cookies do not personally identify you on other websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">9. Age of Consent</h2>
          <p>
            By using this site, you confirm that you are at least the age of majority in your state or province of residence, 
            or that you have given us your consent to allow any minor dependents to use this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">10. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes will take 
            effect immediately upon being posted on the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">11. Contact Information</h2>
          <p>
            If you have any questions or want to access, correct, amend, or delete any personal information we have about you, 
            please contact us at <a href="mailto:arihantjain7000@gmail.com" className="text-blue-600">arihantjain7000@gmail.com</a> or by mail at 
            Jain Aman Ajay Jain Mohalla Ater, India.
          </p>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
