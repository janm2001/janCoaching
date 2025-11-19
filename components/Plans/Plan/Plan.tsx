"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container/Container";
import trainingData from "@/data/trainingData";
import PlanDetailsCard from "./PlanDetailsCard";
import { useState } from "react";
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

export interface Week {
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
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

  const planKey = name.replace(/-/g, "");
  const planData = (trainingData as Record<string, PlanData>)[planKey] || null;

  const handleIndexChange = (direction: "next" | "prev") => {
    setCurrentWeekIndex((prevIndex) => {
      const newIndex = direction === "next" ? prevIndex + 1 : prevIndex - 1;
      if (newIndex < 0 || newIndex >= planData.weeks.length) {
        return prevIndex;
      }
      return newIndex;
    });
  };

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
      <p className="text-lg text-muted-foreground mb-8">
        Duration: {planData.durationWeeks} weeks
      </p>
      <h3 className="text-2xl font-bold mb-2">Pace Definitions</h3>
      <ul className="list-disc list-inside mb-8 ">
        {Object.entries(planData.paceDefinitions).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>

      <div className="flex gap-4 items-center justify-center">
        <Button onClick={() => handleIndexChange("prev")}>
          <ArrowLeft />
        </Button>
        <PlanDetailsCard week={planData.weeks[currentWeekIndex]} />
        <Button onClick={() => handleIndexChange("next")}>
          <ArrowRight />
        </Button>
      </div>
      <div className="flex justify-end my-4">
        <Button size="lg">Start Plan</Button>
      </div>
    </Container>
  );
};

export default Plan;
