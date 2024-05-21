import { Ecommerce } from "@/constants/showcase/ecomerce-api";
import { NusantaraKita } from "@/constants/showcase/nusantara-kita";

export const DetailsNusantaraKita = () => {
  return (
    <div className="text-white space-y-2">
      <p className="text-muted-foreground text-sm">
        Project ini dibuat menggunakan :
      </p>
      <div className="flex items-center gap-x-5">
        {NusantaraKita.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.icon}
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const DetailsEcommerce = () => {
  const isMultipleRows = Ecommerce.length > 3;

  return (
    <div className="text-white space-y-2">
      <p className="text-muted-foreground text-sm">
        Project ini dibuat menggunakan :
      </p>
      <div
        className={`grid gap-x-5 ${
          isMultipleRows ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-3"
        }`}
      >
        {Ecommerce.map((item, index) => (
          <div key={index} className="flex items-center gap-2 py-1.5">
            {item.icon}
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
