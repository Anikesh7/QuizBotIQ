import React from 'react';

const ScoreCard = ({ score }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{score.topic}</h2>
      <p className="text-gray-700 mb-2">Correct: {score.correct}</p>
      <p className="text-gray-700 mb-2">Total: {score.total}</p>
      <p className="text-gray-500">Date: {score.date}</p>
    </div>
  );
};

export default ScoreCard;