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
