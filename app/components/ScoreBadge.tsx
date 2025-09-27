import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeClass = "";
  let label = "";

  if (score > 70) {
    badgeClass = "bg-badge-green text-green-600";
    label = "Strong";
  } else if (score > 49) {
    badgeClass = "bg-badge-yellow text-yellow-600";
    label = "Good Start";
  } else {
    badgeClass = "bg-badge-red text-red-600";
    label = "Needs Work";
  }

  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-full ${badgeClass}`}
    >
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default ScoreBadge;
