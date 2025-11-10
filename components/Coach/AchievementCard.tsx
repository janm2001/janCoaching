import React from 'react'
import { Card } from '../ui/card'

interface AchievementCardProps {
    title: string;
    result : string;
}

const AchievementCard = ({ title, result }: AchievementCardProps) => {
  return (
    <Card className='p-4 flex flex-col justify-center items-center'>
        <h3 className='text-2xl font-bold mb-2 text-blue-700'>{result}</h3>
        <p className='text-gray-500 text-center'>{title}</p>
    </Card>
  )
}

export default AchievementCard
