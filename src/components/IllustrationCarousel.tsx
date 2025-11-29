import { useState, useEffect } from 'react';

const carouselItems = [
  {
    id: 1,
    titleLine1: 'AIで分析',
    titleLine2: '株式情報',
    titleLine3: 'ツール',
  },
  {
    id: 2,
    titleLine1: '銘柄データ',
    titleLine2: '確認',
    titleLine3: '',
  },
  {
    id: 3,
    titleLine1: '株式情報',
    titleLine2: 'レポート',
    titleLine3: '作成',
  },
];

export default function IllustrationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = carouselItems[currentIndex];

  return (
    <div className="relative w-full max-w-[280px] mx-auto px-4">
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.15) 0%, rgba(79, 209, 197, 0.1) 50%, rgba(255, 160, 122, 0.1) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(129, 230, 217, 0.3)',
        }}
      >
        <div className="relative p-6 pb-14 min-h-[320px] flex flex-col">
          <div className="absolute top-4 left-4 z-20">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id={`neuralGrad${currentIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4FD1C5" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#38B2AC" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <circle cx="15" cy="15" r="4" fill="url(#neuralGrad{currentIndex})" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="45" cy="15" r="4" fill="url(#neuralGrad{currentIndex})" opacity="0.8">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="30" cy="30" r="5" fill="#4FD1C5" opacity="0.6">
                <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="15" cy="45" r="4" fill="url(#neuralGrad{currentIndex})" opacity="0.8">
                <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="45" cy="45" r="4" fill="url(#neuralGrad{currentIndex})" opacity="0.8">
                <animate attributeName="opacity" values="0.9;0.6;0.9" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <line x1="15" y1="15" x2="30" y2="30" stroke="#4FD1C5" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="45" y1="15" x2="30" y2="30" stroke="#4FD1C5" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="30" y1="30" x2="15" y2="45" stroke="#4FD1C5" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="30" y1="30" x2="45" y2="45" stroke="#4FD1C5" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
            </svg>
          </div>

          <div className="absolute top-6 right-6 z-10">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id={`dataFlow${currentIndex}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFA07A" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FFB6A3" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path d="M5 15 Q15 10, 25 15 T45 15" stroke="url(#dataFlow{currentIndex})" strokeWidth="2" fill="none" opacity="0.7">
                <animate attributeName="d" values="M5 15 Q15 10, 25 15 T45 15;M5 15 Q15 20, 25 15 T45 15;M5 15 Q15 10, 25 15 T45 15" dur="3s" repeatCount="indefinite" />
              </path>
              <path d="M5 25 Q15 20, 25 25 T45 25" stroke="url(#dataFlow{currentIndex})" strokeWidth="2" fill="none" opacity="0.6">
                <animate attributeName="d" values="M5 25 Q15 20, 25 25 T45 25;M5 25 Q15 30, 25 25 T45 25;M5 25 Q15 20, 25 25 T45 25" dur="3.5s" repeatCount="indefinite" />
              </path>
              <path d="M5 35 Q15 30, 25 35 T45 35" stroke="url(#dataFlow{currentIndex})" strokeWidth="2" fill="none" opacity="0.5">
                <animate attributeName="d" values="M5 35 Q15 30, 25 35 T45 35;M5 35 Q15 40, 25 35 T45 35;M5 35 Q15 30, 25 35 T45 35" dur="4s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>

          <div className="flex-1 flex flex-col items-start justify-center mt-6 mb-10">
            <div className="text-left mb-4 w-full">
              <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">{currentItem.titleLine1}</h1>
              {currentItem.titleLine2 && (
                <div className="w-full -mx-6">
                  <div
                    className="px-6 py-2"
                    style={{
                      background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.8) 0%, rgba(79, 209, 197, 0.6) 100%)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <h2 className="text-2xl font-bold text-white leading-tight drop-shadow-md">
                      {currentItem.titleLine2}
                    </h2>
                  </div>
                </div>
              )}
              {currentItem.titleLine3 && (
                <h1 className="text-4xl font-bold text-white mt-2 drop-shadow-lg">{currentItem.titleLine3}</h1>
              )}
            </div>
          </div>

          <div className="absolute bottom-6 left-6 flex items-center space-x-2 z-10">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i % 2 === 0 ? 'rgba(79, 209, 197, 0.6)' : 'rgba(255, 160, 122, 0.6)',
                  animation: `pulse-dot ${2 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          <div className="absolute bottom-6 right-6 z-10">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id={`glowCircle${currentIndex}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4FD1C5" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38B2AC" stopOpacity="0.2" />
                </radialGradient>
              </defs>
              <circle cx="20" cy="20" r="15" fill="url(#glowCircle{currentIndex})" opacity="0.6">
                <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0.3;0.6" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="20" cy="20" r="8" fill="none" stroke="#FFA07A" strokeWidth="1" opacity="0.7">
                <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="20" cy="20" r="3" fill="#FFB6A3" opacity="0.9" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>

      <div className="flex items-center justify-center gap-2 mt-6">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex ? (
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #4FD1C5 0%, #38B2AC 100%)',
                  boxShadow: '0 0 10px rgba(79, 209, 197, 0.6)',
                }}
              ></div>
            ) : (
              <div className="w-2 h-2 rounded-full bg-teal-soft opacity-40"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
