const trainingData = {
  "5000m": {
    "name": "12-Week 5k Training Plan",
    "durationWeeks": 12,
    "paceDefinitions": {
      "Easy": "Conversational pace, 60-70% max heart rate.",
      "T-Pace": "Threshold pace, comfortably hard, ~1-hour race pace.",
      "V-Pace": "VO2max pace, hard, ~5k race pace.",
      "Fartlek": "Swedish for 'speed play', mixing fast and slow running."
    },
    "weeks": [
      {
        "week": 1,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Fartlek", "description": "Intro Fartlek", "details": { "totalTime": "30 min", "duration": "10 min main set", "pace": "Easy/Fast", "breakdown": "10 min WU, 5 x (1 min fast, 1 min jog), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Intro Threshold", "details": { "totalTime": "40 min", "duration": "10 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 2 x 5 min @ T-Pace (2 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous easy run" } }
        ]
      },
      {
        "week": 2,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "Intro VO2max", "details": { "totalTime": "35 min", "duration": "12 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 4 x 400m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "44 min", "duration": "15 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 3 x 5 min @ T-Pace (2 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous easy run" } }
        ]
      },
      {
        "week": 3,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max", "details": { "totalTime": "40 min", "duration": "15 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 5 x 400m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Fartlek", "description": "Fartlek", "details": { "totalTime": "35 min", "duration": "15 min main set", "pace": "Easy/Fast", "breakdown": "10 min WU, 8 x (1 min fast, 1 min jog), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "55 min", "duration": "55 min", "pace": "Easy", "breakdown": "55 min continuous easy run" } }
        ]
      },
      {
        "week": 4,
        "type": "Recovery",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "25 min", "duration": "25 min", "pace": "Easy", "breakdown": "25 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Easy", "description": "Easy run with strides", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min easy run, finish with 4 x 30s strides" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous easy run" } }
        ]
      },
      {
        "week": 5,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max 800s", "details": { "totalTime": "40 min", "duration": "15 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 3 x 800m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "49 min", "duration": "16 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 2 x 8 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "60 min", "duration": "60 min", "pace": "Easy", "breakdown": "60 min continuous easy run" } }
        ]
      },
      {
        "week": 6,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max 800s", "details": { "totalTime": "45 min", "duration": "20 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 4 x 800m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Fartlek", "description": "Fartlek", "details": { "totalTime": "40 min", "duration": "20 min main set", "pace": "Easy/Fast", "breakdown": "10 min WU, 5 x (2 min fast, 2 min jog), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "65 min", "duration": "65 min", "pace": "Easy", "breakdown": "65 min continuous easy run" } }
        ]
      },
      {
        "week": 7,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max 1000s", "details": { "totalTime": "45 min", "duration": "21 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 3 x 1000m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "50 min", "duration": "20 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 2 x 10 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "70 min", "duration": "70 min", "pace": "Easy", "breakdown": "70 min continuous easy run" } }
        ]
      },
      {
        "week": 8,
        "type": "Recovery",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Easy", "description": "Easy run with strides", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min easy run, finish with 4 x 30s strides" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous easy run" } }
        ]
      },
      {
        "week": 9,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max 1000s", "details": { "totalTime": "50 min", "duration": "28 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 4 x 1000m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold Continuous", "details": { "totalTime": "45 min", "duration": "20 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 20 min continuous @ T-Pace, 15 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "75 min", "duration": "75 min", "pace": "Easy", "breakdown": "75 min continuous easy run" } }
        ]
      },
      {
        "week": 10,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max 800s", "details": { "totalTime": "50 min", "duration": "25 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 5 x 800m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Fartlek", "description": "Fartlek", "details": { "totalTime": "40 min", "duration": "20 min main set", "pace": "Easy/Fast", "breakdown": "10 min WU, 10 x (1 min fast, 1 min jog), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run (cutback)", "details": { "totalTime": "60 min", "duration": "60 min", "pace": "Easy", "breakdown": "60 min continuous easy run" } }
        ]
      },
      {
        "week": 11,
        "type": "Taper",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "Light VO2max", "details": { "totalTime": "30 min", "duration": "9 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 3 x 400m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Light Threshold", "details": { "totalTime": "30 min", "duration": "8 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 1 x 8 min @ T-Pace, 12 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous easy run" } }
        ]
      },
      {
        "week": 12,
        "type": "Race",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Shakeout with strides", "details": { "totalTime": "20 min", "duration": "20 min", "pace": "Easy", "breakdown": "20 min easy run, 4 x 30s strides" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Easy", "description": "Short shakeout", "details": { "totalTime": "15 min", "duration": "15 min", "pace": "Easy", "breakdown": "15 min very easy jog" } },
          { "day": "Saturday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Sunday", "workoutType": "Race", "description": "Race Day!", "details": { "totalTime": "N/A", "duration": "5 km", "pace": "Race", "breakdown": "10-15 min WU, 5k Race, 10 min CD" } }
        ]
      }
    ]
  },
  "10000m": {
    "name": "14-Week 10k Training Plan",
    "durationWeeks": 14,
    "paceDefinitions": {
      "Easy": "Conversational pace, 60-70% max heart rate.",
      "T-Pace": "Threshold pace, comfortably hard, ~1-hour race pace.",
      "V-Pace": "VO2max pace, hard, ~5k race pace.",
      "Fartlek": "Swedish for 'speed play', mixing fast and slow running."
    },
    "weeks": [
      {
        "week": 1,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Fartlek", "description": "Intro Fartlek", "details": { "totalTime": "35 min", "duration": "15 min main set", "pace": "Easy/Fast", "breakdown": "10 min WU, 5 x (1 min fast, 2 min jog), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Intro Threshold", "details": { "totalTime": "44 min", "duration": "15 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 3 x 5 min @ T-Pace (2 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "60 min", "duration": "60 min", "pace": "Easy", "breakdown": "60 min continuous easy run" } }
        ]
      },
      {
        "week": 2,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "Intro VO2max", "details": { "totalTime": "40 min", "duration": "15 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 5 x 600m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "49 min", "duration": "16 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 2 x 8 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "65 min", "duration": "65 min", "pace": "Easy", "breakdown": "65 min continuous easy run" } }
        ]
      },
      {
        "week": 3,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max", "details": { "totalTime": "45 min", "duration": "18 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 6 x 600m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "53 min", "duration": "20 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 2 x 10 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "70 min", "duration": "70 min", "pace": "Easy", "breakdown": "70 min continuous easy run" } }
        ]
      },
      {
        "week": 4,
        "type": "Recovery",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Easy", "description": "Easy run with strides", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min easy run, finish with 4 x 30s strides" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "60 min", "duration": "60 min", "pace": "Easy", "breakdown": "60 min continuous easy run" } }
        ]
      },
      {
        "week": 5,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max 800s", "details": { "totalTime": "45 min", "duration": "20 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 4 x 800m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "59 min", "duration": "24 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 3 x 8 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "75 min", "duration": "75 min", "pace": "Easy", "breakdown": "75 min continuous easy run" } }
        ]
      },
      {
        "week": 6,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Fartlek", "description": "Fartlek", "details": { "totalTime": "45 min", "duration": "24 min main set", "pace": "Easy/Fast", "breakdown": "10 min WU, 6 x (2 min fast, 2 min jog), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "VO2max", "description": "VO2max 800s", "details": { "totalTime": "50 min", "duration": "25 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 5 x 800m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "80 min", "duration": "80 min", "pace": "Easy", "breakdown": "80 min continuous easy run" } }
        ]
      },
      {
        "week": 7,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Threshold", "description": "Threshold Continuous", "details": { "totalTime": "50 min", "duration": "25 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 25 min continuous @ T-Pace, 15 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "VO2max", "description": "VO2max 1000s", "details": { "totalTime": "50 min", "duration": "28 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 4 x 1000m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "85 min", "duration": "85 min", "pace": "Easy", "breakdown": "85 min continuous easy run" } }
        ]
      },
      {
        "week": 8,
        "type": "Recovery",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Easy", "description": "Easy run with strides", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min easy run, finish with 4 x 30s strides" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "60 min", "duration": "60 min", "pace": "Easy", "breakdown": "60 min continuous easy run" } }
        ]
      },
      {
        "week": 9,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max 1000s", "details": { "totalTime": "50 min", "duration": "28 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 4 x 1000m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "65 min", "duration": "30 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 3 x 10 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "100 min", "duration": "100 min", "pace": "Easy", "breakdown": "100 min continuous easy run" } }
        ]
      },
      {
        "week": 10,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Fartlek", "description": "Fartlek", "details": { "totalTime": "45 min", "duration": "24 min main set", "pace": "Easy/Fast", "breakdown": "10 min WU, 6 x (2 min fast, 2 min jog), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "65 min", "duration": "30 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 3 x 10 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "95 min", "duration": "95 min", "pace": "Easy", "breakdown": "95 min continuous easy run" } }
        ]
      },
      {
        "week": 11,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max 1200s", "details": { "totalTime": "55 min", "duration": "30 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 4 x 1200m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold Continuous", "details": { "totalTime": "55 min", "duration": "30 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 30 min continuous @ T-Pace, 15 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "120 min", "duration": "120 min", "pace": "Easy", "breakdown": "120 min continuous easy run" } }
        ]
      },
      {
        "week": 12,
        "type": "Recovery",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Easy", "description": "Easy run with strides", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min easy run, finish with 4 x 30s strides" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "70 min", "duration": "70 min", "pace": "Easy", "breakdown": "70 min continuous easy run" } }
        ]
      },
      {
        "week": 13,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "74 min", "duration": "40 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 2 x 20 min @ T-Pace (5 min jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "LongRun", "description": "Long Run with HM-Pace", "details": { "totalTime": "90 min", "duration": "40 min main set", "pace": "Easy/HM-Pace", "breakdown": "20 min Easy, 2 x 20 min @ HM-Pace (5 min jog rest), 20 min Easy" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "130 min", "duration": "130 min", "pace": "Easy", "breakdown": "130 min continuous easy run" } }
        ]
      },
      {
        "week": 14,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max 1200s", "details": { "totalTime": "55 min", "duration": "30 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 4 x 1200m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold Continuous", "details": { "totalTime": "60 min", "duration": "35 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 35 min continuous @ T-Pace, 15 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "140 min", "duration": "140 min", "pace": "Easy", "breakdown": "140 min continuous easy run" } }
        ]
      },
      {
        "week": 15,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "71 min", "duration": "45 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 3 x 15 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "LongRun", "description": "Long Run with HM-Pace", "details": { "totalTime": "100 min", "duration": "60 min main set", "pace": "Easy/HM-Pace", "breakdown": "20 min Easy, 3 x 15 min @ HM-Pace (5 min jog rest), 20 min Easy" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Peak Long Run", "details": { "totalTime": "150 min", "duration": "150 min", "pace": "Easy", "breakdown": "150 min continuous easy run" } }
        ]
      },
      {
        "week": 16,
        "type": "Recovery",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Easy", "description": "Easy run with strides", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min easy run, finish with 4 x 30s strides" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "75 min", "duration": "75 min", "pace": "Easy", "breakdown": "75 min continuous easy run" } }
        ]
      },
      {
        "week": 17,
        "type": "Taper",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "Light VO2max", "details": { "totalTime": "35 min", "duration": "12 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 3 x 800m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Light Threshold", "details": { "totalTime": "35 min", "duration": "10 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 1 x 10 min @ T-Pace, 15 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous easy run" } }
        ]
      },
      {
        "week": 18,
        "type": "Race",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Shakeout with strides", "details": { "totalTime": "25 min", "duration": "25 min", "pace": "Easy", "breakdown": "25 min easy run, 4 x 30s strides" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Easy", "description": "Short shakeout", "details": { "totalTime": "15 min", "duration": "15 min", "pace": "Easy", "breakdown": "15 min very easy jog" } },
          { "day": "Saturday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Sunday", "workoutType": "Race", "description": "Race Day!", "details": { "totalTime": "N/A", "duration": "10 km", "pace": "Race", "breakdown": "10-15 min WU, 10k Race, 10 min CD" } }
        ]
      }]
  },
  "halfmarathon": {
    "name": "18-Week Half Marathon Training Plan",
    "durationWeeks": 18,
    "paceDefinitions": {
      "Easy": "Conversational pace, 60-70% max heart rate.",
      "T-Pace": "Threshold pace, comfortably hard, ~1-hour race pace.",
      "HM-Pace": "Half Marathon pace, target race pace.",
      "V-Pace": "VO2max pace, hard, ~5k race pace.",
      "Fartlek": "Swedish for 'speed play', mixing fast and slow running."
    },
    "weeks": [
      {
        "week": 1,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Fartlek", "description": "Intro Fartlek", "details": { "totalTime": "35 min", "duration": "15 min main set", "pace": "Easy/Fast", "breakdown": "10 min WU, 5 x (1 min fast, 2 min jog), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Intro Threshold", "details": { "totalTime": "44 min", "duration": "15 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 3 x 5 min @ T-Pace (2 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "60 min", "duration": "60 min", "pace": "Easy", "breakdown": "60 min continuous easy run" } }
        ]
      },
      {
        "week": 2,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "49 min", "duration": "16 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 2 x 8 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "VO2max", "description": "Intro VO2max", "details": { "totalTime": "40 min", "duration": "15 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 5 x 600m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "70 min", "duration": "70 min", "pace": "Easy", "breakdown": "70 min continuous easy run" } }
        ]
      },
      {
        "week": 3,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "53 min", "duration": "20 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 2 x 10 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Fartlek", "description": "Fartlek", "details": { "totalTime": "40 min", "duration": "20 min main set", "pace": "Easy/Fast", "breakdown": "10 min WU, 10 x (1 min fast, 1 min jog), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "80 min", "duration": "80 min", "pace": "Easy", "breakdown": "80 min continuous easy run" } }
        ]
      },
      {
        "week": 4,
        "type": "Recovery",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Easy", "description": "Easy run with strides", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min easy run, finish with 4 x 30s strides" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "60 min", "duration": "60 min", "pace": "Easy", "breakdown": "60 min continuous easy run" } }
        ]
      },
      {
        "week": 5,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max 800s", "details": { "totalTime": "45 min", "duration": "20 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 4 x 800m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "59 min", "duration": "24 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 3 x 8 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "85 min", "duration": "85 min", "pace": "Easy", "breakdown": "85 min continuous easy run" } }
        ]
      },
      {
        "week": 6,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Threshold", "description": "Threshold Continuous", "details": { "totalTime": "50 min", "duration": "25 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 25 min continuous @ T-Pace, 15 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "VO2max", "description": "VO2max 800s", "details": { "totalTime": "50 min", "duration": "25 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 5 x 800m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "90 min", "duration": "90 min", "pace": "Easy", "breakdown": "90 min continuous easy run" } }
        ]
      },
      {
        "week": 7,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "62 min", "duration": "30 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 2 x 15 min @ T-Pace (4 min jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Fartlek", "description": "Fartlek", "details": { "totalTime": "45 min", "duration": "24 min main set", "pace": "Easy/Fast", "breakdown": "10 min WU, 8 x (1 min fast, 2 min jog), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "95 min", "duration": "95 min", "pace": "Easy", "breakdown": "95 min continuous easy run" } }
        ]
      },
      {
        "week": 8,
        "type": "Recovery",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Easy", "description": "Easy run with strides", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min easy run, finish with 4 x 30s strides" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "60 min", "duration": "60 min", "pace": "Easy", "breakdown": "60 min continuous easy run" } }
        ]
      },
      {
        "week": 9,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max 1000s", "details": { "totalTime": "50 min", "duration": "28 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 4 x 1000m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "65 min", "duration": "30 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 3 x 10 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "100 min", "duration": "100 min", "pace": "Easy", "breakdown": "100 min continuous easy run" } }
        ]
      },
      {
        "week": 10,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Threshold", "description": "Threshold Continuous", "details": { "totalTime": "55 min", "duration": "30 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 30 min continuous @ T-Pace, 15 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Fartlek", "description": "Fartlek", "details": { "totalTime": "50 min", "duration": "30 min main set", "pace": "Easy/Fast", "breakdown": "10 min WU, 6 x (2 min fast, 3 min jog), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "110 min", "duration": "110 min", "pace": "Easy", "breakdown": "110 min continuous easy run" } }
        ]
      },
      {
        "week": 11,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "71 min", "duration": "36 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 3 x 12 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "VO2max", "description": "VO2max 1000s", "details": { "totalTime": "55 min", "duration": "35 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 5 x 1000m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "120 min", "duration": "120 min", "pace": "Easy", "breakdown": "120 min continuous easy run" } }
        ]
      },
      {
        "week": 12,
        "type": "Recovery",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Easy", "description": "Easy run with strides", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min easy run, finish with 4 x 30s strides" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "70 min", "duration": "70 min", "pace": "Easy", "breakdown": "70 min continuous easy run" } }
        ]
      },
      {
        "week": 13,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "74 min", "duration": "40 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 2 x 20 min @ T-Pace (5 min jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "LongRun", "description": "Long Run with HM-Pace", "details": { "totalTime": "90 min", "duration": "40 min main set", "pace": "Easy/HM-Pace", "breakdown": "20 min Easy, 2 x 20 min @ HM-Pace (5 min jog rest), 20 min Easy" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "130 min", "duration": "130 min", "pace": "Easy", "breakdown": "130 min continuous easy run" } }
        ]
      },
      {
        "week": 14,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "VO2max 1200s", "details": { "totalTime": "55 min", "duration": "30 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 4 x 1200m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Threshold Continuous", "details": { "totalTime": "60 min", "duration": "35 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 35 min continuous @ T-Pace, 15 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Long Run", "details": { "totalTime": "140 min", "duration": "140 min", "pace": "Easy", "breakdown": "140 min continuous easy run" } }
        ]
      },
      {
        "week": 15,
        "type": "Training",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Threshold", "description": "Threshold", "details": { "totalTime": "71 min", "duration": "45 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 3 x 15 min @ T-Pace (3 min jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "LongRun", "description": "Long Run with HM-Pace", "details": { "totalTime": "100 min", "duration": "60 min main set", "pace": "Easy/HM-Pace", "breakdown": "20 min Easy, 3 x 15 min @ HM-Pace (5 min jog rest), 20 min Easy" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Peak Long Run", "details": { "totalTime": "150 min", "duration": "150 min", "pace": "Easy", "breakdown": "150 min continuous easy run" } }
        ]
      },
      {
        "week": 16,
        "type": "Recovery",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "45 min", "duration": "45 min", "pace": "Easy", "breakdown": "45 min continuous run" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Easy", "description": "Easy run with strides", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min easy run, finish with 4 x 30s strides" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "75 min", "duration": "75 min", "pace": "Easy", "breakdown": "75 min continuous easy run" } }
        ]
      },
      {
        "week": 17,
        "type": "Taper",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "40 min", "duration": "40 min", "pace": "Easy", "breakdown": "40 min continuous run" } },
          { "day": "Wednesday", "workoutType": "VO2max", "description": "Light VO2max", "details": { "totalTime": "35 min", "duration": "12 min main set", "pace": "V-Pace", "breakdown": "10 min WU, 3 x 800m @ V-Pace (400m jog rest), 10 min CD" } },
          { "day": "Thursday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "35 min", "duration": "35 min", "pace": "Easy", "breakdown": "35 min continuous run" } },
          { "day": "Friday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Saturday", "workoutType": "Threshold", "description": "Light Threshold", "details": { "totalTime": "35 min", "duration": "10 min main set", "pace": "T-Pace", "breakdown": "10 min WU, 1 x 10 min @ T-Pace, 15 min CD" } },
          { "day": "Sunday", "workoutType": "LongRun", "description": "Easy Run", "details": { "totalTime": "50 min", "duration": "50 min", "pace": "Easy", "breakdown": "50 min continuous easy run" } }
        ]
      },
      {
        "week": 18,
        "type": "Race",
        "days": [
          { "day": "Monday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Tuesday", "workoutType": "Easy", "description": "Easy run", "details": { "totalTime": "30 min", "duration": "30 min", "pace": "Easy", "breakdown": "30 min continuous run" } },
          { "day": "Wednesday", "workoutType": "Easy", "description": "Shakeout with strides", "details": { "totalTime": "25 min", "duration": "25 min", "pace": "Easy", "breakdown": "25 min easy run, 4 x 30s strides" } },
          { "day": "Thursday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Friday", "workoutType": "Easy", "description": "Short shakeout", "details": { "totalTime": "15 min", "duration": "15 min", "pace": "Easy", "breakdown": "15 min very easy jog" } },
          { "day": "Saturday", "workoutType": "Rest", "description": "Rest day", "details": { "totalTime": "0", "duration": "0", "pace": "N/A", "breakdown": "Rest" } },
          { "day": "Sunday", "workoutType": "Race", "description": "Race Day!", "details": { "totalTime": "N/A", "duration": "10 km", "pace": "Race", "breakdown": "10-15 min WU, 10k Race, 10 min CD" } }
        ]
      }]
  }
};

export default trainingData;
