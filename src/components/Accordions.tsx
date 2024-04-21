import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Accordions = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="bg-[#161616] rounded-md px-3 hover:bg-neutral-800 duration-150 ease-out cursor-pointer"
        >
          <AccordionTrigger className="text-md text-white">
            Latest Project
          </AccordionTrigger>
          <AccordionContent>
            <div className=" p-3 px-0">
              <div className="flex gap-x-4">
                <div>
                  <div className="flex items-center gap-x-2 ">
                    <p className="font-Intermedium text-base text-white">
                      Eccomerce api
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center font-Interegular">
                    <span className="text-neutral-400">@yuefii</span>
                    <span className="w-[3px] h-[3px]  bg-neutral-600 rounded-md" />
                    <Link href="https://github.com/Yuefii/ecommerce__api" className="text-blue-600 font-Intermedium text-sm hover:underline">
                      source code
                    </Link>
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="font-semibold text-white text-2xl my-3">Tech Stack</h3>
                <ul className="text-base text-white">
                  <li className="list-inside list-disc">Express</li>
                  <li className="list-inside list-disc">MongoDB</li>
                  <li className="list-inside list-disc">Prisma ORM</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Accordions;
