"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TrainingCalendar = () => {
  const mockData = [
    { date: "2025-11-10", activity: "Running", duration: "30 minutes" },
    { date: "2025-11-11", activity: "Cycling", duration: "45 minutes" },
    { date: "2025-11-12", activity: "Swimming", duration: "1 hour" },
  ];
   const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const headers = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const startingSlot = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  const totalSlots = Math.ceil((daysInMonth + startingSlot) / 7) * 7;
  const days = Array.from({ length: totalSlots }, (_, i) => {
    if (i < startingSlot || i >= startingSlot + daysInMonth) return null;
    return i - startingSlot + 1;
  });
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  const getMonthName = (monthIndex: number) => {
    const date = new Date();
    date.setMonth(monthIndex);
    return date.toLocaleString("default", { month: "long" });
  }

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  
  return (
    <div>
      <div className="flex gap-6 items-center justify-start my-6">
        <Button onClick={handlePrevMonth}><ArrowLeft /></Button>
        <h3 className="font-bold text-2xl">{getMonthName(month)} {year}</h3>
        <Button onClick={handleNextMonth}><ArrowRight /></Button>
      </div>

         <table className="w-full table-fixed border-collapse border border-gray-200">
            <thead>
                <tr>
                     {headers.map((header) => (
                        <th key={header} className="border p-2 text-center w-1/7">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {weeks.map((week, weekIndex) => (
                    <tr key={weekIndex}>
                        {week.map((day, dayIndex) => {
                            const dateStr = day
                                ? `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                                : null;
                            const activities = dateStr
                                ? mockData.filter((entry) => entry.date === dateStr)
                                : [];
                            return (
                                <td key={dayIndex} className="border p-2 align-top h-24">
                                    {day && <div className="font-bold mb-1">{day}</div>}
                                    {activities.map((activity, index) => (
                                        <div key={index} className="text-sm bg-gray-800 p-1 mb-1 rounded">
                                            <div>{activity.activity}</div>
                                            <div className="text-xs text-gray-600">{activity.duration}</div>
                                        </div>
                                    ))}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default TrainingCalendar;
