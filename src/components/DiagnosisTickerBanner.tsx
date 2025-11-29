interface DiagnosisRecord {
  time: string;
  stock: string;
  icon: string;
}

interface DiagnosisTickerBannerProps {
  records: DiagnosisRecord[];
}

export default function DiagnosisTickerBanner({ records }: DiagnosisTickerBannerProps) {
  const doubledRecords = [...records, ...records];

  return (
    <div className="w-full bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-y border-emerald-100 py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-emerald-200">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-emerald-700">リアルタイム診断情報</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
              <span>本日: <strong className="text-gray-800">1,234件</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
              <span>今月: <strong className="text-gray-800">45,678件</strong></span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-emerald-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-3 animate-scroll">
            {doubledRecords.map((record, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-gray-100 shadow-sm whitespace-nowrap flex-shrink-0"
                style={{ minWidth: '280px' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm flex-shrink-0"
                  style={{
                    background: index % 3 === 0
                      ? 'linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)'
                      : index % 3 === 1
                      ? 'linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)'
                      : 'linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 100%)'
                  }}
                >
                  {record.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-gradient-to-r from-sky-100 to-sky-200 text-sky-700 text-xs font-semibold rounded-full">
                      {record.time}
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full">
                      診断完了
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-800 truncate">{record.stock}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
