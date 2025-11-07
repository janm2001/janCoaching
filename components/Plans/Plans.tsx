import PlanCard from "./PlanCard/PlanCard"

const Plans = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
    <PlanCard title="1500m" description="Middle distance specialist." />
    <PlanCard title="3000m" description="Mix between middle distance and long distance specialist." />
    <PlanCard title="5000m" description="Long distance specialist." />
    <PlanCard title="10000m" description="Long distance specialist." />
    </div>
  )
}

export default Plans
