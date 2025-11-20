import Container from "@/components/Container/Container";
import TrainingCalendar from "@/components/Training/TrainingCalendar";

export default function TrainingPage() {
    return <Container>
        <h1 className="text-4xl font-bold text-center mt-10">Training</h1>
        <TrainingCalendar />
    </Container>
}
