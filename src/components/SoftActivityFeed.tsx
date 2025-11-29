interface DiagnosisRecord {
  time: string;
  stock: string;
  icon: string;
}

interface SoftActivityFeedProps {
  records: DiagnosisRecord[];
}

export default function SoftActivityFeed({ records }: SoftActivityFeedProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">最近の診断実績</h3>
        <p className="text-sm text-gray-500">多くの投資家様にご利用いただいています</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {records.slice(0, 6).map((record, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
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
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-2.5 py-1 bg-gradient-to-r from-sky-100 to-sky-200 text-sky-700 text-xs font-medium rounded-full">
                    {record.time}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-800">{record.stock}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
