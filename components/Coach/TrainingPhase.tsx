interface TrainingPhaseProps {
    title: string;
    description: string;
}
const TrainingPhase = ({ title, description }: TrainingPhaseProps) => {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
        <h3 className='text-2xl font-bold mb-2'>{title}</h3>
        <p className='text-gray-500'>{description}</p>
      
    </div>
  )
}

export default TrainingPhase
