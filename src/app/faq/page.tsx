import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = () => {
  return (
    <>
   <div className="min-h-screen max-w-screen-md mx-auto mt-12 p-4">
        <div className="font-bold text-lg">FAQ</div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-xl">Is it accessible?</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold text-xl">Is it accessible?</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold text-xl">Is it accessible?</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold text-xl">Is it accessible?</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold text-xl">Is it accessible?</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="font-bold text-xl">Is it accessible?</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="font-bold text-xl">Is it accessible?</AccordionTrigger>
            <AccordionContent className="font-regular text-lg text-gray-600">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          
        </Accordion>
      </div>
    </>
  );
};

export default faq;
