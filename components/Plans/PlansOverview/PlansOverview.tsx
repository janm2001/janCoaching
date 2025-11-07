import Container from "@/components/Container/Container"
import Divider from "@/components/Divider/Divider"
import { Card } from "@/components/ui/card"

const PlansOverview = () => {
  return (
    <Container>
      <h1 className="text-4xl text-center my-4">Plans Overview</h1>
      <Card className="p-4">
        <h2 className="font-bold text-3xl">What You Get With Every Plan</h2>
        <p>Each training plan is meticulously designed following a proven three-phase approach that has helped countless runners achieve their personal bests. Your plan includes:</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Personalized Training Schedule:</strong> Tailored workouts that fit your lifestyle, fitness level, and goals.</li>
          <li><strong>Comprehensive Workouts:</strong> A mix of easy runs, long runs, speed work, and recovery sessions to ensure balanced training.</li>
          <li><strong>Nutritional Guidance:</strong> Tips and plans to fuel your body for optimal performance and recovery.</li>
          <li><strong>Progress Tracking:</strong> Tools and advice to monitor your improvements and adjust your plan as needed.</li>
          <li><strong>Expert Support:</strong> Access to coaching advice and support throughout your training journey.</li>
        </ul>
      </Card>

      <Divider />

      <Card className="p-4">
        <h2 className="font-bold text-3xl">Training Philosophy</h2>
        <p>A scientifically-backed three-phase approach to peak performance</p>
        <div className="grid gap-3  md: grid-cols-3">
          <div>
            <h3 className="font-bold">Base Period</h3>
          <p>Focus on building aerobic capacity through lactate threshold training. Tempo runs and sustained efforts teach your body to clear lactate efficiently while building endurance foundation.</p>
          </div>
          <div>
            <h3 className="font-bold">Build Period</h3>
          <p>Develop speed and power with VO2max intervals and fartlek sessions. These workouts increase your maximum oxygen uptake and improve your ability to sustain faster paces.</p>
          </div>
          <div>
            <h3 className="font-bold">Pre-Race Period</h3>
          <p>Fine-tune your fitness with race-specific workouts and tapering strategies. This phase ensures you’re primed and ready to perform at your best on race day.</p>
          </div>

        </div>
        </Card>

        <Divider />

        <h2 className="text-4xl text-center my-4">How The Plans Differ</h2>
        <div className="grid gap-4 md: grid-cols-2">
        <Card className="p-4">
          <h3 className="font-bold text-2xl">1500m - 3000m Plans</h3>
          <p className="font-bold text-lg">Middle Distance Specialists</p>
          <p>Designed for runners who thrive on speed and power. These plans emphasize:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>High-intensity interval training to boost anaerobic capacity.</li>
            <li>Speed work focusing on shorter, faster repeats.</li>
            <li>Strength training to enhance explosive power.</li>
            <li>Race-specific strategies to optimize performance.</li>
            <li>12-14 week timeline for peak sharpness</li>
          </ul>

        </Card>

         <Card className="p-4">
          <h3 className="font-bold text-2xl">5K - 10K Plans</h3>
          <p className="font-bold text-lg">Endurance & Stamina Builders</p>
          <p>Perfect for runners building aerobic endurance. These plans feature:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Longer, steady-state runs to build endurance.</li>
            <li>Tempo runs to improve lactate threshold.</li>
            <li>Fartlek workouts for speed and stamina.</li>
            <li>Strength training focused on core and leg stability.</li>
            <li>16-18 week timeline for peak sharpness</li>
          </ul>

        </Card>
        </div>
      

    </Container>
  )
}

export default PlansOverview
