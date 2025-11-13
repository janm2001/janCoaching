"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import trainingData from "@/data/trainingData";
interface DayDetails {
  totalTime: string;
  duration: string;
  pace: string;
  breakdown: string;
}

interface Day {
  day: string;
  workoutType: string;
  description: string;
  details: DayDetails;
}

interface Week {
  week: number;
  type: string;
  days: Day[];
}

interface PaceDefinitions {
  [key: string]: string;
}

interface PlanData {
  name: string;
  durationWeeks: number;
  paceDefinitions: PaceDefinitions;
  weeks: Week[];
}

interface PlanProps {
    name: string;
}

const Plan = ({ name }: PlanProps) => {
  const router = useRouter();

  const planKey = name.replace(/-/g, ''); // "half-marathon" -> "halfmarathon"
  const planData = (trainingData as Record<string, PlanData>)[planKey] || null;

  if (!planData) {
    return (
      <Container>
        <Button variant="ghost" onClick={() => router.back()} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <p>Plan not found.</p>
      </Container>
    );
  }

  return (
    <Container>
      <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <h1 className="text-4xl font-bold mb-2">{planData.name}</h1>
      <p className="text-lg text-muted-foreground mb-8">Duration: {planData.durationWeeks} weeks</p>

      {planData.weeks.map((week) => (
        <Card key={week.week} className="mb-6">
          <CardHeader>
            <CardTitle>Week {week.week} <span className="text-base font-normal text-muted-foreground">- {week.type}</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {week.days.map((day) => (
                <Card key={day.day} className="p-4">
                  <h4 className="font-bold">{day.day}: <span className="font-normal">{day.description}</span></h4>
                  <p className="text-sm text-muted-foreground">{day.details.breakdown}</p>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Plan;
