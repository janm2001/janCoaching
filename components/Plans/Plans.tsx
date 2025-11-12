import PlanCard from "./PlanCard/PlanCard"

const Plans = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    <PlanCard title="5000m" description="10-12 week training plans." />
    <PlanCard title="10000m" description="12-14 week training plans." />
    <PlanCard title="Half Marathon" description="16-18 week training plans." />
    </div>
  )
}

export default Plans
