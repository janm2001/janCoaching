"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";

interface PlanCardProps {
    title : string;
    description : string;
}

const PlanCard = ({ title, description }: PlanCardProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const planName = title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/plans/${planName}`);
  };

  return (
   
    <Card className="p-6 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p>{description}</p>
      <Button className="mt-4 cursor-pointer" onClick={handleNavigation}>View plan</Button>
    </Card>
  )
}

      

export default PlanCard
