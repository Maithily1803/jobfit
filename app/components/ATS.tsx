const ATS = ({ score, suggestions }: { score: number; suggestions: any[] }) => {
  return (
    <div
      className={`rounded-2xl shadow-md w-full p-6 flex flex-col gap-4 
        ${score > 69 ? 'bg-green-50' : score > 49 ? 'bg-yellow-50' : 'bg-red-50'}`}
    >
      <div className="flex items-center gap-4">
        <img
          src={
            score > 69
              ? '/icons/ats-good.svg'
              : score > 49
              ? '/icons/ats-warning.svg'
              : '/icons/ats-bad.svg'
          }
          alt="ATS"
          className="w-10 h-10"
        />
        <p className="text-2xl font-semibold text-gray-800">
          ATS Score - <span className="font-bold">{score}/100</span>
        </p>
      </div>

      <div className="text-gray-600 text-base space-y-2">
        <p className="font-medium text-lg">
          How well does your resume pass through Applicant Tracking Systems?
        </p>
        {suggestions.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <img
              src={s.type === 'good' ? '/icons/check.svg' : '/icons/warning.svg'}
              alt="tip"
              className="w-4 h-4"
            />
            <p>{s.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ATS;
