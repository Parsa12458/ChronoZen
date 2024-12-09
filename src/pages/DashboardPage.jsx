import DashboardSection from "../features/dashboard/DashboardSection";
import DashboardPieChart from "../features/dashboard/DashboardPieChart";
import Button from "../ui/Button";

function DashboardPage() {
  return (
    <div className="grid grid-cols-3 grid-rows-[max-content_max-content_max-content_max-content] gap-5">
      <h1 className="col-span-full text-2xl font-bold">Dashboard</h1>
      <DashboardSection title="Tasks for today" data="task" />
      <DashboardSection title="Habits for today" data="habit" />
      <DashboardPieChart
        title="Today Tasks Status"
        data={[
          { name: "Completed", value: 800 },
          { name: "In Progress", value: 300 },
          { name: "Uncompleted", value: 200 },
        ]}
        colors={["#6f8779", "#F27525", "#bb1a3a"]}
      />
      <DashboardSection title="Events for today" data="event" />
      <DashboardPieChart
        title="Today Habits Status"
        data={[
          { name: "Completed", value: 800 },
          { name: "In Progress", value: 300 },
        ]}
        colors={["#6f8779", "#F27525"]}
      />

      <Button type="primary" additionalStyles="col-start-3 col-end-4 py-3">
        Get Full Report
      </Button>
    </div>
  );
}

export default DashboardPage;
