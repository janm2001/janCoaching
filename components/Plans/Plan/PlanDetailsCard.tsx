import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Week } from "./Plan";

interface PlanDetailsCardProps {
    week: Week;
}

const PlanDetailsCard = ({ week }: PlanDetailsCardProps) => {
  return (
    <Card key={week.week} className="mb-6 w-full h-full">
          <CardHeader>
            <CardTitle>Week {week.week} <span className="text-base font-normal text-muted-foreground">- {week.type}</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              {week.days.map((day) => (
                <Card key={day.day} className="p-4 flex flex-col justify-between h-70">
                  <h4 className="font-bold">{day.day}: <span className="font-normal">{day.description}</span></h4>
                  <p className="text-sm text-muted-foreground">{day.details.breakdown}</p>
                  <p>{day.details.duration !== '0' && day.details.duration}</p>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
  )
}

export default PlanDetailsCard
