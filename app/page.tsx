import Container from "@/components/Container/Container";
import Plans from "@/components/Plans/Plans";
import { Card } from "@/components/ui/card";
import { CheckIcon, ShieldIcon, UserCog } from "lucide-react";

export default function Home() {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-center mt-10">
        Middle-Long Distance Plans
      </h1>
      <Plans />
      
      <div className="my-8 h-px w-full bg-gray-200 dark:bg-gray-800" />
      <h1 className="text-4xl font-bold text-center mt-10">
        Why Train with me?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <Card className="p-6 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-4">
            <CheckIcon className="inline-block mr-2" /> Proven results
          </h2>
          <ul className="text-lg list-disc list-inside text-left space-y-2">
            <li>
              Join a growing community of 10+ athletes who have achieved new
              personal bests.
            </li>
            <li>
              My data-driven approach is tailored to help runners excel in
              distances from 1500m to 10k.
            </li>
          </ul>
        </Card>
        <Card className="p-6 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-4">
            <UserCog className="inline-block mr-2" /> Individualized plans
          </h2>
          <ul className="text-lg list-disc list-inside text-left space-y-2">
            <li>
              Receive a training plan crafted specifically for your goals,
              lifestyle, and current fitness level.
            </li>
            <li>
              Plans are designed to be challenging yet achievable, whether you
              are a beginner or an advanced athlete.
            </li>
          </ul>
        </Card>
        <Card className="p-6 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-4">
            <ShieldIcon className="inline-block mr-2" /> Injury prevention
          </h2>
          <ul className="text-lg list-disc list-inside text-left space-y-2">
            <li>
              Train smart with a focus on sustainable progress and long-term
              health.
            </li>
            <li>
              My methodology incorporates proper warm-ups, cool-downs, and
              strength work to keep you running strong.
            </li>
          </ul>
        </Card>
      </div>
    </Container>
  );
}
