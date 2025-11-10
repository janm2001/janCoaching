import { Card } from "../ui/card";
import Container from "../Container/Container";
import Image from "next/image";
import CoachImage from "@/public/coach.jpg";
import { Badge } from "../ui/badge";

const CoachInfo = () => {
  return (
    <Card className="p-4 my-4 grid gap-4 items-center md: grid-cols-2 ">
      <div className="text-center">
        <Image
          alt="Coach Image"
          src={CoachImage}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <Container className="h-full w-full rounded-md flex flex-col justify-center items-center">
        <h2 className=" my-4 text-3xl text-center font-bold">Professional Coach</h2>
        <p className="my-2 text-gray-500">
          From Coaching recreational athletes to young athletes, it is my
          passion to help you achieve your goals.
        </p>
        <p className="my-2 text-gray-500">
          {" "}
          My approach combines proven training methodologies with personalized
          attention to help athletes reach their full potential.
        </p>
        <p className="my-2 text-gray-500">
          Specializing in middle and long-distance running, I have a track record of helping athletes achieve significant personal bests in events ranging from 1500m to 10,000m. My programs focus on building endurance, speed, and mental toughness.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-2xl my-4">
          <Badge>Certified Coach</Badge>
          <Badge>1500m Training</Badge>
          <Badge>5k Training</Badge>
          <Badge>10k Training</Badge>
          <Badge>Race Strategy</Badge>
          <Badge>Injury Prevention</Badge>
          <Badge>1v1 Sessions</Badge>
        </div>
      </Container>
    </Card>
  );
};

export default CoachInfo;
