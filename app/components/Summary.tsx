import ScoreBadge from './ScoreBadge';
import ScoreGauge from './ScoreGauge';

const Category = ({ title, score }: { title: string; score: number }) => {
  const textColor =
    score > 70
      ? 'text-green-600'
      : score > 49
      ? 'text-yellow-600'
      : 'text-red-600';

  return (
    <div className="resume-summary p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xl font-semibold">{title}</p>
        <ScoreBadge score={score} />
      </div>
      <p className="text-2xl font-bold">
        <span className={textColor}>{score}</span>/100
      </p>
    </div>
  );
};

const Summary = ({ feedback }: { feedback: any }) => {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 space-y-4">
      <div className="flex items-center gap-6">
        <ScoreGauge score={feedback.overallScore} />
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-gray-800">Your Resume Score</h2>
          <p className="text-sm text-gray-500">
            This score is calculated based on the variables listed below.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Category title="Tone & Style" score={feedback.toneAndStyle.score} />
        <Category title="Content" score={feedback.content.score} />
        <Category title="Structure" score={feedback.structure.score} />
        <Category title="Skills" score={feedback.skills.score} />
      </div>
    </div>
  );
};

export default Summary;

