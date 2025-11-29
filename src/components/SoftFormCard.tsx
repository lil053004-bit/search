import { ReactNode } from 'react';

interface SoftFormCardProps {
  children: ReactNode;
}

export default function SoftFormCard({ children }: SoftFormCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-2">
      <div
        className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
        }}
      >
        <div
          className="px-8 py-5 border-b border-gray-100"
          style={{
            background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 50%, #6EE7B7 100%)',
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                銘柄診断フォーム
              </h2>
              <p className="text-sm text-gray-600 mt-1">銘柄コードまたは銘柄名を入力してください</p>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs text-gray-700 font-medium">入力可能</span>
            </div>
          </div>
        </div>

        <div className="p-2">
          {children}
        </div>

        <div
          className="px-8 py-4 text-center border-t border-gray-100"
          style={{
            background: 'linear-gradient(to right, #F9FAFB, #FFFFFF, #F9FAFB)',
          }}
        >
          <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14A6 6 0 108 2a6 6 0 000 12z" stroke="#6EE7B7" strokeWidth="1.5" fill="none"/>
                <path d="M6 8l1.5 1.5L10.5 6.5" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>安全な接続</span>
            </div>
            <div className="w-px h-4 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="10" height="8" rx="1" stroke="#FDA4AF" strokeWidth="1.5" fill="none"/>
                <path d="M5 5V4a3 3 0 016 0v1" stroke="#FDA4AF" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>入力情報は保護されます</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
