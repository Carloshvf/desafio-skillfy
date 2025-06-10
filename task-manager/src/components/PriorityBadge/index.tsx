import classNames from "classnames";
import type { Task } from "../../types/Task";

type Props = {
  priority: Task["priority"];
};

const PriorityBadge = ({ priority }: Props) => {
  const badgeClass = classNames(
    "text-white px-2 py-1 rounded text-xs font-medium",
    {
      "bg-red-500": priority === "high",
      "bg-yellow-400": priority === "medium",
      "bg-green-500": priority === "low",
    }
  );

  const labelMap = {
    high: "Alta",
    medium: "Média",
    low: "Baixa",
  } as const;

  return <span className={badgeClass}>{labelMap[priority]}</span>;
};

export default PriorityBadge;
