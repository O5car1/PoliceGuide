import React from "react"

type Props = {
  question: string;
  options: { [key: string]: string };
  onAnswer: (answer: string) => void;
};

const QuestionCard: React.FC<Props> = ({ question, options, onAnswer }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-xl max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="space-y-2">
        {Object.entries(options).map(([label, _nextKey]) => (
          <button
            key={label}
            onClick={() => onAnswer(label)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
