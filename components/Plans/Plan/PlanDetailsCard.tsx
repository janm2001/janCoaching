"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  Week } from "./Plan";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
                <Dialog key={day.day}>
                  <DialogTrigger asChild>
                    <Card className="p-4 flex flex-col justify-between h-70 cursor-pointer hover:shadow-md transition-shadow">
                      <h4 className="font-bold">{day.day}: <span className="font-normal">{day.description}</span></h4>
                      <p className="text-sm text-muted-foreground">{day.details.breakdown}</p>
                      <p className="font-semibold mt-auto pt-2">{day.details.duration !== '0' && day.details.duration}</p>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{day.day} - {day.description}</DialogTitle>
                      <DialogDescription>
                        <strong>Workout Type:</strong> {day.workoutType}
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      <p><strong>Breakdown:</strong> {day.details.breakdown}</p>
                      <p><strong>Total Time:</strong> {day.details.totalTime}</p>
                      {day.details.pace !== "N/A" && (
                        <p><strong>Pace:</strong> {day.details.pace} </p>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </CardContent>
        </Card>
  )
}

export default PlanDetailsCard
