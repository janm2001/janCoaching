import { Card } from "../ui/card"
import TrainingPhase from "./TrainingPhase"

const CoachTrainingPhilosophy = () => {
  return (
    <Card className="p-4 my-4">
        <h2 className="text-bold text-4xl my-2">Training Philosophy & Methodology</h2>
        <p className="text-gray-400 text-lg">My coaching approach is built on proven periodization principles that have helped countless middle and long-distance runners achieve breakthrough performances. The key is progressive, targeted training that builds the right physiological adaptations at the right time.</p>
        <TrainingPhase title="Base Period: Lactate Threshold Focus" description="We begin with extensive lactate threshold training to build your aerobic foundation. Tempo runs, steady-state efforts, and threshold intervals strengthen your ability to maintain faster paces for longer periods. This phase is crucial for building the endurance base that supports all future speed work." />
        <TrainingPhase title="Build Phase: VO2max & Fartlek Development" description="As we progress, training shifts to VO2max intervals and fartlek sessions. These workouts push your aerobic capacity to new levels, training your body to utilize oxygen more efficiently at high intensities. The varied pace changes in fartlek runs also prepare you for the surges and tactical demands of racing." />
        <TrainingPhase title="Pre-Race: Race-Specific Pace Training" description="In the final weeks before your goal race, we integrate race-specific pace work. You'll practice running at your target race pace, learning to feel and sustain the exact effort required on race day. This sharpening phase fine-tunes your neuromuscular system and builds unshakeable confidence in your race plan." />
        </Card>
  )
}

export default CoachTrainingPhilosophy
