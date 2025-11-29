import { Link } from 'react-router-dom';
import { Shield, Scale, FileText, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="hidden md:block bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-3xl p-8 mb-12 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-2xl flex-shrink-0 shadow-sm">
              <Shield className="w-6 h-6 text-rose-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-rose-500" />
                金融商品取引法に基づく重要事項
              </h3>

              <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                <div className="bg-white rounded-2xl p-4 border-l-4 border-sky-400 shadow-sm">
                  <p className="font-semibold text-gray-800 mb-2">【サービスの性質】</p>
                  <p>
                    本サービスは、AI技術を活用した株式情報の提供および分析ツールです。
                    <strong className="text-rose-600">投資助言業務、投資一任業務、金融商品仲介業務には該当せず、特定の金融商品の売買を推奨・勧誘するものではありません。</strong>
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 border-l-4 border-amber-400 shadow-sm">
                  <p className="font-semibold text-gray-800 mb-2">【投資リスクに関する警告】</p>
                  <p>
                    株式投資には価格変動リスク、信用リスク、流動性リスク等が伴い、
                    <strong className="text-rose-600">投資元本を割り込む可能性があります。</strong>
                    過去の運用実績は将来の運用成果を保証するものではありません。
                    市場環境の変化により、予想外の損失が発生する可能性があります。
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 border-l-4 border-emerald-400 shadow-sm">
                  <p className="font-semibold text-gray-800 mb-2">【情報の正確性について】</p>
                  <p>
                    提供される情報は、信頼できると判断した情報源から取得していますが、
                    その正確性、完全性、適時性を保証するものではありません。
                    AI分析結果は参考情報として提供されるものであり、絶対的な投資判断基準ではありません。
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 border-l-4 border-purple-400 shadow-sm">
                  <p className="font-semibold text-gray-800 mb-2">【投資判断の責任】</p>
                  <p>
                    <strong className="text-rose-600">最終的な投資判断は、利用者ご自身の責任において行ってください。</strong>
                    本サービスの利用により生じたいかなる損害についても、当社は一切の責任を負いません。
                    投資を行う際は、証券会社等の金融商品取引業者にご相談ください。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mt-4">
                  <p className="font-semibold text-gray-800 mb-1">【登録情報】</p>
                  <p className="text-xs text-gray-600">
                    当サービス提供者は金融商品取引業者（投資助言・代理業、投資運用業等）ではありません。
                    金融商品取引法第29条の登録を受けた事業者ではないため、個別の投資助言を行うことはできません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-2xl p-4 text-center mb-8">
          <p className="text-sm text-rose-600 font-semibold mb-1">⚠️ 重要なお知らせ</p>
          <p className="text-xs text-gray-700 leading-relaxed">
            当サービスは情報提供のみを目的としており、投資助言や投資勧誘を行うものではありません。投資判断は必ずご自身の責任で行ってください。
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-500" />
                法的文書
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/company"
                    className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 group-hover:bg-emerald-500 transition-colors"></span>
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 group-hover:bg-emerald-500 transition-colors"></span>
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 group-hover:bg-emerald-500 transition-colors"></span>
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link
                    to="/specified-commercial-transaction-act"
                    className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 group-hover:bg-emerald-500 transition-colors"></span>
                    特定商取引法表記
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400" />
                お問い合わせ
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-rose-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-300 group-hover:bg-rose-500 transition-colors"></span>
                    お問い合わせフォーム
                  </Link>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                  <span>support@stockofficial.com</span>
                </li>
                <li className="text-gray-500 text-xs pl-5">
                  受付時間: 24時間受付（返信は営業日内）
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-sm text-gray-800 mb-2 font-medium">
              &copy; {currentYear} 株式会社アドバンス (Advance Co., Ltd.). All rights reserved.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
              当サイトで提供される情報は投資勧誘を目的としたものではありません。
              投資に関する最終決定は、利用者ご自身の判断でなさるようお願いいたします。
              掲載されている情報の正確性については万全を期しておりますが、その内容の正確性、安全性、有用性を保証するものではありません。
            </p>

            <div className="text-xs text-gray-500 space-y-2">
              <p>株式会社アドバンス（Advance Co., Ltd.）</p>
              <p>〒101-0032 東京都千代田区岩本町2-8-2 都ビジネスビル9階</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">AI株式診断サービス</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">デジタルマーケティング</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">広告運用</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">データ分析</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
