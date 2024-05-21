import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Accordions: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="bg-[#161616] rounded-md px-3 hover:bg-neutral-800 duration-150 ease-out cursor-pointer"
        >
          <AccordionTrigger className="text-md text-white">
            {title}
          </AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Accordions;
