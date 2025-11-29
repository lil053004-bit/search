import { ArrowLeft, Building, MapPin, Calendar, Briefcase, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompanyInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          トップページに戻る
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Building className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">会社概要</h1>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">株式会社イービット</h2>
                <p className="text-lg text-gray-700 mb-2">Ebit Co., Ltd.</p>
              </div>
            </section>

            <section className="mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">所在地</h3>
                      <p className="text-gray-700 leading-relaxed">
                        〒150-0043<br />
                        東京都渋谷区道玄坂2-10-12<br />
                        新大宗ビル3号館
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        Dogenzaka 2-10-12, Shibuya-ku, Tokyo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">設立</h3>
                      <p className="text-gray-700 text-lg">2015年4月</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">業種</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      AI技術を活用した情報提供サービス／デジタルマーケティング支援
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-start gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">事業内容</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    AI株式情報分析サービスの提供
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    人工知能技術を活用した株式市場データの分析・情報提供サービス（情報提供のみ、投資助言には該当しません）
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    デジタルマーケティング支援
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    Google・Yahoo! JAPAN等の広告プラットフォームを活用したマーケティング支援
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Webサービス開発・運営
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    情報提供型Webサービスの企画・開発・運営
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    データ分析サービス
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    市場データの収集・分析・レポート作成サービス
                  </p>
                </div>

              </div>
            </section>

            <section className="mb-8">
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">企業理念</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  株式会社イービットは、AI技術を活用した情報提供サービスを通じて、
                  投資家の皆様により良い情報アクセスを提供することを使命としています。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  最新のテクノロジーを活用し、分かりやすく信頼性の高い情報提供サービスを目指してまいります。
                </p>
                <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
                  <p className="text-sm text-amber-900">
                    <strong>重要:</strong> 当社は金融商品取引業者ではありません。提供する情報は投資判断の参考としてご活用ください。
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200 mt-8">
              <h3 className="font-bold text-gray-900 mb-3">連絡先情報</h3>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p><strong>電話:</strong> +81 03-5456-7890</p>
                <p><strong>メール:</strong> wusegut647@gmail.com</p>
                <p><strong>受付時間:</strong> 平日 9:00-18:00（土日祝日を除く）</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                お問い合わせフォームへ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
