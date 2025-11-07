import Container from "@/components/Container/Container";
import Plans from "@/components/Plans/Plans";

export default function PlansPage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-center mt-10">Plans</h1>
      <Plans />
    </Container>
  );
}
