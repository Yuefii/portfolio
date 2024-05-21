import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { FaGithub, FaUnlink } from "react-icons/fa";

interface Props {
  title: string;
  title_url: string;
  description?: string;
  url: string;
  url_source_code: string;
  url_show: string;
  children: React.ReactNode;
}

const CardShowcase: React.FC<Props> = ({
  title,
  title_url,
  description,
  url,
  url_source_code,
  url_show,
  children,
}) => {
  return (
    <>
      <h1 className="text-2xl text-white font-semibold">Showcase Projects</h1>
      <Card className="bg-[#161616] border-none">
        <CardHeader>
          <CardTitle className="text-white">{title}</CardTitle>
          <CardDescription>
            <p>{description}</p>
            <Link href={url}>
              URL : <span className="text-blue-500 underline">{title_url}</span>
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <div className="flex items-center gap-x-2">
            {url_source_code ? (
              <Link
                href={url_source_code}
                className="flex items-center gap-2 bg-black p-1.5 rounded-md text-white"
              >
                <FaGithub size="20" />
                <p className="text-sm">Source Code</p>
              </Link>
            ) : null}
            <Link
              href={url_show}
              className="flex items-center gap-2 bg-white p-1.5 rounded-md text-black"
            >
              <FaUnlink size="15" />
              <p className="text-sm">Show Project</p>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardShowcase;
