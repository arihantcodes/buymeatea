/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const RefundPolicy = () => {
  return (
    <>
    <Navbar/>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>

        <p className="mb-4">
          At Buy Me A Tea, we strive to ensure the satisfaction of all our
          users. However, due to the nature of our platform, please review the
          following terms regarding refunds:
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Donations and Contributions
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            All payments made through the Buy Me A Tea platform are considered
            donations or contributions. As such, they are non-refundable.
          </li>
          <li>
            Once a payment is completed, it cannot be reversed or refunded, as
            the funds are immediately transferred to the recipient's account.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Exceptional Circumstances
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            In the rare event of a technical issue or error (such as a duplicate
            transaction), you may contact our support team within 24 hours of
            the transaction. We will review the situation and, at our
            discretion, may offer a refund if the issue is validated.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our refund policy or believe an error
          has occurred with your payment, please contact us at
          arihantjain7000@gmail.com. Our team will be happy to assist you.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          4. Changes to This Policy
        </h2>
        <p>
          We reserve the right to update or change this refund policy at any
          time. Any changes will be posted on this page and will take effect
          immediately upon posting.
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default RefundPolicy;
