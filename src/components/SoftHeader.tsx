export default function SoftHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)',
                  boxShadow: '0 4px 16px rgba(167, 243, 208, 0.3)'
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="white" opacity="0.95"/>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                AI株式診断
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">やさしい人工知能による株式分析</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-sky-50 to-sky-100/50 rounded-full border border-sky-200/50">
              <div className="w-2 h-2 rounded-full bg-sky-400"></div>
              <span className="text-xs font-medium text-sky-700">信頼</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-full border border-emerald-200/50">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-xs font-medium text-emerald-700">安全</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
