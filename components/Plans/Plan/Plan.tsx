"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container/Container";

interface PlanProps {
    name: string;
}

const Plan = ({ name }: PlanProps) => {
  const router = useRouter();

  return (
    <Container>
      <Button onClick={() => router.back()} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <h1>Plan: {name}</h1>
    </Container>
  );
};

export default Plan;
