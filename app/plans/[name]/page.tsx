import Plan from "@/components/Plans/Plan/Plan";

interface PlanPageProps {
  params: {
    name: string;
  };
}

export default async function PlanPage({ params }: PlanPageProps) {
    const resolvedParams = await params;
    const planName = resolvedParams.name;
    return (
    <Plan name={planName} />
  );
}
