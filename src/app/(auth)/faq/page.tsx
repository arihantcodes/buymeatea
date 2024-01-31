import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = () => {
  return (
    <>
   <div className="min-h-screen max-w-screen-md mx-auto mt-12 p-4 ">
        <div className="font-bold text-lg">FAQ</div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-lg md:text-xl">Who are you folks?&apos;</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
            Ek Chai Pilade, is an open-source platform. You can create your own account and start earning money by producing your own content. We use UPI for seamless transactions, ensuring a hassle-free experience. Additionally, we take pride in offering 100% commission-free transactions. Your support goes directly to the creators, making Ek Chai Pilade a platform that truly values and empowers content creators.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold text-lg md:text-xl">How is this different from other platforms for creators?&apos;</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
            We're different from other creator platforms because we believe in being open and helping creators financially. Ek Chai Pilade is open source, encouraging teamwork and honesty. Also, we're happy to say we don't take any commission, making sure creators get all the money they deserve. Come join us for a creative experience that's truly freeing and supportive!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold text-lg md:text-xl">Who uses Buy Me a Coffee?&apos;</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
            Anyone can use Ek Chai Pilade! It's a platform for people who want to share and support creative content. Artists, writers, musicians, and more find a home here. If you create or enjoy content, Ek Chai Pilade is for you!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold text-lg md:text-xl">How do I get paid?&apos;</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
            We use UPI, so your money goes directly to your bank account. Getting paid is simple – just ensure your UPI details are linked, and the funds will be transferred straight to your bank account hassle-free.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold text-lg md:text-xl">How can my audience pay?&apos;</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
            We support all major credit and debit cards, Apple Pay, Google Pay, Cash App and other global payment methods.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="font-bold text-lg md:text-xl">Is there a fee to use Buy Me a Coffee?&apos;</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
            No, there's no fee to use Ek Chai Pilade. We are 100% commission-free, ensuring that creators can enjoy our platform without any charges. Your earnings are all yours to keep. Join us and start sharing your content without worrying about fees!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="font-bold text-lg md:text-xl">Is Ek Chai Pilade safe and reliable?&apos;</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
            Yes, Ek Chai Pilade is safe and reliable. We prioritize the security of your information and transactions. Our platform is designed to provide a trustworthy environment for creators and supporters alike. You can use Ek Chai Pilade with confidence.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="font-bold text-lg md:text-xl">How do I contact Ek Chai Pilade?&apos;</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
            To contact Ek Chai Pilade, you can reach out through our support email at [support@ekchaipilade.com]. We're here to help and assist you with any questions or concerns you may have.
            </AccordionContent>
          </AccordionItem>
          
        </Accordion>
      </div>
    </>
  );
};

export default faq;


	
