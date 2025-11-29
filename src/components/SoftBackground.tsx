export default function SoftBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-amber-50/30 via-rose-50/20 to-emerald-50/30">
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-200/15 to-indigo-200/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-200/10 to-amber-200/10 rounded-full blur-3xl"></div>

      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(167, 243, 208, 0.08) 1px, transparent 1px)`,
        backgroundSize: '48px 48px'
      }}></div>

      <svg className="absolute bottom-0 left-0 w-full h-32 text-white/50" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1200,32 L1200,120 L0,120 Z" fill="currentColor" opacity="0.3"/>
        <path d="M0,80 C240,48 480,112 720,80 C960,48 1200,112 1200,112 L1200,120 L0,120 Z" fill="currentColor" opacity="0.2"/>
      </svg>
    </div>
  );
}
