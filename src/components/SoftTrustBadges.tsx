export default function SoftTrustBadges() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          className="bg-white rounded-3xl p-8 text-center border border-emerald-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          style={{
            boxShadow: '0 4px 16px rgba(167, 243, 208, 0.2)'
          }}
        >
          <div
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{
              background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)'
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-3xl font-bold text-gray-800 mb-2">10,000+</div>
          <div className="text-sm text-gray-600">診断実績</div>
        </div>

        <div
          className="bg-white rounded-3xl p-8 text-center border border-pink-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          style={{
            boxShadow: '0 4px 16px rgba(253, 164, 175, 0.2)'
          }}
        >
          <div
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{
              background: 'linear-gradient(135deg, #FECDD3 0%, #FDA4AF 100%)'
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-3xl font-bold text-gray-800 mb-2">98.5%</div>
          <div className="text-sm text-gray-600">満足度</div>
        </div>

        <div
          className="bg-white rounded-3xl p-8 text-center border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          style={{
            boxShadow: '0 4px 16px rgba(221, 214, 254, 0.2)'
          }}
        >
          <div
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{
              background: 'linear-gradient(135deg, #E9D5FF 0%, #DDD6FE 100%)'
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-3xl font-bold text-gray-800 mb-2">95.2%</div>
          <div className="text-sm text-gray-600">AI精度</div>
        </div>
      </div>
    </div>
  );
}
