import React from 'react'
import { Card } from '../ui/card'
import AchievementCard from './AchievementCard'

const CoachAchievements = () => {
  return (
    <Card className='p-4'>
        <h2 className="text-3xl font-bold mb-4 text-center">Coach Achievements</h2>
        <div className='grid gap-4 md: grid-cols-3'>
            <AchievementCard title='1500 Personal Best' result='4:01.34'/>
            <AchievementCard title='5000 Personal Best' result='15:51'/>
            <AchievementCard title='10000 Personal Best' result='32:22'/>
        </div>
    </Card>
  )
}

export default CoachAchievements
