import { Button } from "../../ui/button";
import { Card } from "../../ui/card";

interface PlanCardProps {
    title : string;
    description : string;
}

const PlanCard = ({ title, description }: PlanCardProps) => {
  return (
   
    <Card className="p-6 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p>{description}</p>
      <Button className="mt-4">View plan</Button>
    </Card>
  )
}

      

export default PlanCard
