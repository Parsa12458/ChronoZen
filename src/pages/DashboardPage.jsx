import DashboardSection from "../features/dashboard/DashboardSection";
import PieChart from "../features/dashboard/PieChart";
import DashboardEvents from "../features/dashboard/DashboardEvents";
import LineChart from "../features/dashboard/LineChart";
import Button from "../ui/Button";

function DashboardPage() {
  return (
    <div className="grid min-h-screen grid-cols-3">
      <h1 className="col-span-full">Dashboard</h1>
      <DashboardSection />
      <DashboardSection />
      <PieChart />
      <DashboardEvents />
      <LineChart />
      <Button additionalStyles="col-start-3 col-end-4">Get Full Report</Button>
    </div>
  );
}

export default DashboardPage;
