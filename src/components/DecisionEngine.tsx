import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import decisionTree from "../data/decisionTree.json";

type TreeNode = {
  question?: string;
  options?: { [key: string]: string };
  result?: string;
};

const DecisionEngine: React.FC = () => {
  const [currentKey, setCurrentKey] = useState("start");
  const node: TreeNode = (decisionTree as any)[currentKey];

  const handleAnswer = (answer: string) => {
    const nextKey = node.options?.[answer];
    if (nextKey) setCurrentKey(nextKey);
  };

  return (
    <div className="p-6">
      {node.result ? (
        <div className="text-center p-4 bg-green-100 text-green-800 font-bold rounded-xl max-w-md mx-auto">
          {node.result}
        </div>
      ) : (
        <QuestionCard
          question={node.question || ""}
          options={node.options || {}}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default DecisionEngine;
