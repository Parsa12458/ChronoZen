import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import InputCheckbox from "../../ui/InputCheckbox";

const renderGoal = [
  {
    goalId: 1,
    goalTitle: "Learn to play the guitar",
    goalDeadline: "August 1, 2025",
    goalPriority: "High",
    goalCategory: "Hobby",
    goalReward: "Buy a new guitar accessory",
    goalSteps: [
      { id: 1, step: "Purchase a guitar and necessary accessories" },
      { id: 2, step: "Find a good online course or hire a guitar instructor" },
      { id: 3, step: "Practice basic chords and strumming patterns" },
      { id: 4, step: "Learn to read guitar tabs ans sheet music" },
      { id: 5, step: "Practice playing simple songs" },
      { id: 6, step: "Gradually learn and practice more complex songs." },
      { id: 7, step: "Perform in front of friends or family" },
    ],
  },
  {
    goalId: 2,
    goalTitle: "Improve front-end skills",
    goalDeadline: "June 30, 2025",
    goalPriority: "High",
    goalCategory: "Career",
    goalReward: "Plan a weekend gateway to relax",
    goalSteps: [
      { id: 1, step: "Identify relevant certification courses" },
      { id: 2, step: "Research and choose the best course provider" },
      { id: 3, step: "Register and enroll in the chosen course" },
      { id: 4, step: "Set a study schedule and adhere to it." },
      { id: 5, step: "Complete all course modules and assignments" },
      { id: 6, step: "Prepare for the certification exam" },
      { id: 7, step: "Pass the exam and receive the certification" },
    ],
  },
];

function GoalsList() {
  return (
    <div className="mt-8 flex flex-wrap items-start justify-center gap-5">
      {renderGoal.map((goal) => (
        <div key={goal.goalId} className="w-96 rounded bg-lightGreen p-6">
          <div className="flex items-center justify-start gap-2 font-semibold">
            <InputCheckbox label={goal.goalTitle} id={goal.goalId} />
            <Badge
              variation="solid"
              backgroundColor={`${goal.goalCategory === "Hobby" ? "#DB7713" : ""}${goal.goalCategory === "Career" ? "#337A94" : ""}`}
            >
              {goal.goalCategory}
            </Badge>
            <Badge variation="outlined" borderColor="#6f8779">
              {goal.goalPriority}
            </Badge>
          </div>
          <div className="ml-5 mt-3 space-y-2">
            <div className="flex items-center gap-1.5">
              <img src="/icons/calendar-clock.svg" className="-mt-1 w-5" />
              <p className="text-[.8em]">
                <span className="font-bold">Deadline: </span>
                <span className="font-semibold">{goal.goalDeadline}</span>
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <img src="/icons/reward.svg" className="-mt-1 w-5" />
              <p className="text-[.8em]">
                <span className="font-bold">Reward: </span>
                <span className="font-semibold">{goal.goalReward}</span>
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1.5 text-[.8em]">
                <img src="/icons/steps.svg" className="-mt-1 w-5" />
                <span className="font-bold">Steps: </span>
              </p>
              <ol className="ml-1 mt-2 flex flex-col items-start justify-center gap-1.5 font-medium">
                {goal.goalSteps?.map((goalStep, goalIndex) => (
                  <li key={goalStep.id}>
                    <InputCheckbox
                      size={3.5}
                      label={`${goalIndex + 1}. ${goalStep.step}`}
                      labelSize="xs"
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="mt-7 flex items-center gap-2 text-xs">
            <progress
              className="progress progress-primary h-3 bg-paleGreen"
              max={100}
              value={40}
            ></progress>
            <span>40%</span>
          </div>

          <div className="mt-9 flex items-center justify-center gap-3 text-sm">
            <Button
              type="button"
              additionalStyles="w-24 py-1.5 flex justify-center items-center gap-1"
              variation="red"
            >
              <img src="/icons/remove.svg" alt="remove icon" className="w-5" />
              <span>Remove</span>
            </Button>
            <Button
              type="button"
              additionalStyles="w-24 py-1.5 flex justify-center items-center gap-1.5"
              variation="secondary"
            >
              <img src="/icons/edit.svg" alt="edit icon" className="w-3.5" />
              <span>Edit</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GoalsList;
