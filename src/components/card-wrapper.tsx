import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

interface CardWrapperProps {
  title?: string;
  label?: string;
  children: React.ReactNode;
}

const CardWrapper = ({ children, title, label }: CardWrapperProps) => {
  return (
    <>
      <Card className="shadow-md xl:w-1/4 md:w-1/2 ">
        <CardHeader>
          <h1 className="text-lg font-semibold">{title}</h1>
          <CardDescription>{label}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </>
  );
};

export default CardWrapper;
