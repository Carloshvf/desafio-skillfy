import Summary from "./Summary";
import PriorityTasks from "./PriorityTasks";
import ProductivityChart from "./ProductivityChart";
import TimeSuggestions from "../../components/TimeSuggestions";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <Summary />
      <PriorityTasks />
      <ProductivityChart />
      <TimeSuggestions />
    </div>
  );
};

export default Dashboard;
