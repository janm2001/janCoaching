import CoachAchievements from "@/components/Coach/CoachAchievements";
import CoachInfo from "@/components/Coach/CoachInfo";
import CoachTrainingPhilosophy from "@/components/Coach/CoachTrainingPhilosophy";
import Container from "@/components/Container/Container";
import Divider from "@/components/Divider/Divider";

export default function AboutPage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-center mt-10">Meet Your Coach</h1>
      <p className="text-gray-400 text-2xl my-2 text-center">Specialized in Middle to Long Distance Endurance Athletes</p>
      <CoachInfo />
      <Divider />
      <CoachAchievements />
      <Divider />
      <CoachTrainingPhilosophy />
      
    </Container>
  );
}
