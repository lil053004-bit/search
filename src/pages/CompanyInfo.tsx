import { ArrowLeft, Building, MapPin, Mail, Phone, Briefcase, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompanyInfo() {
  return (
    <div className="min-h-screen bg-dark-gradient">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent-yellow hover:text-accent-yellow-light mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          トップページに戻る
        </Link>

        <div className="bg-surface-dark rounded-xl shadow-dark-glow border border-border-dark p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-dark-blue p-3 rounded-lg">
              <Building className="w-6 h-6 text-accent-yellow" />
            </div>
            <h1 className="text-3xl font-bold text-text-primary">会社概要</h1>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <div className="bg-dark-blue rounded-lg p-6 border-l-4 border-accent-yellow">
                <h2 className="text-2xl font-bold text-text-primary mb-4">株式会社 桜テ</h2>
                <p className="text-lg text-text-secondary mb-2">Sakurate Co., Ltd.</p>
              </div>
            </section>

            <section className="mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-surface-light rounded-lg p-6 border border-border-dark">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-accent-yellow mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-text-primary mb-2">所在地</h3>
                      <p className="text-text-secondary leading-relaxed">
                        〒150-0654<br />
                        東京都千代田区丸の内二丁目7番2号<br />
                        JPタワー15階
                      </p>
                      <p className="text-text-muted text-sm mt-2">
                        15th Floor, JP Tower, No. 7-2,<br />
                        Marunouchi 2-chome, Chiyoda-ku, Tokyo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-light rounded-lg p-6 border border-border-dark">
                  <div className="flex items-start gap-3 mb-3">
                    <Mail className="w-5 h-5 text-accent-orange mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-text-primary mb-3">連絡先</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <Phone className="w-4 h-4 text-accent-yellow mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-text-muted text-xs">電話</p>
                            <p className="text-text-secondary">+81 03-5366-2365</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Mail className="w-4 h-4 text-accent-yellow mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-text-muted text-xs">メール</p>
                            <p className="text-text-secondary break-all">support@stockwl.jp</p>
                          </div>
                        </div>
                        <p className="text-text-muted text-xs mt-2">
                          受付時間: 平日 9:00-18:00（土日祝日を除く）
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-dark-blue rounded-lg p-6 border-l-4 border-accent-yellow">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-accent-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">業種</h3>
                    <p className="text-text-secondary text-lg leading-relaxed">
                      AI技術を活用した株式情報提供サービス／デジタルマーケティング支援
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-start gap-3 mb-4">
                <Target className="w-6 h-6 text-accent-yellow mt-1 flex-shrink-0" />
                <h3 className="text-xl font-bold text-text-primary">事業内容</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-surface-light border-2 border-border-dark rounded-lg p-5 hover:border-accent-yellow transition-colors">
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent-yellow text-dark-navy rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    AI株式情報分析サービスの提供
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed ml-10">
                    人工知能技術を活用した株式市場データの分析・情報提供サービス（情報提供のみ、投資助言には該当しません）
                  </p>
                </div>

                <div className="bg-surface-light border-2 border-border-dark rounded-lg p-5 hover:border-accent-yellow transition-colors">
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent-yellow text-dark-navy rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    デジタルマーケティング支援
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed ml-10">
                    Google・Yahoo! JAPAN等の広告プラットフォームを活用したマーケティング支援
                  </p>
                </div>

                <div className="bg-surface-light border-2 border-border-dark rounded-lg p-5 hover:border-accent-yellow transition-colors">
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent-yellow text-dark-navy rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Webサービス開発・運営
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed ml-10">
                    情報提供型Webサービスの企画・開発・運営
                  </p>
                </div>

                <div className="bg-surface-light border-2 border-border-dark rounded-lg p-5 hover:border-accent-yellow transition-colors">
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-accent-yellow text-dark-navy rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    データ分析サービス
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed ml-10">
                    市場データの収集・分析・レポート作成サービス
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-surface-light rounded-lg p-6 border border-border-dark">
                <h3 className="text-xl font-bold text-text-primary mb-4">企業理念</h3>
                <p className="text-text-secondary leading-relaxed mb-3">
                  株式会社 桜テは、AI技術を活用した情報提供サービスを通じて、
                  投資家の皆様により良い情報アクセスを提供することを使命としています。
                </p>
                <p className="text-text-secondary leading-relaxed">
                  最新のテクノロジーを活用し、分かりやすく信頼性の高い情報提供サービスを目指してまいります。
                </p>
                <div className="mt-4 p-4 bg-dark-blue border-l-4 border-accent-orange rounded">
                  <p className="text-sm text-accent-orange">
                    <strong>重要:</strong> 当社は金融商品取引業者ではありません。提供する情報は投資判断の参考情報としてご活用ください。
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-dark-blue rounded-lg p-6 border-2 border-accent-yellow mt-8">
              <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent-yellow" />
                お問い合わせ
              </h3>
              <div className="space-y-3 text-sm text-text-secondary mb-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-yellow" />
                  <div>
                    <span className="text-text-muted">電話:</span>
                    <span className="ml-2">+81 03-5366-2365</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent-yellow" />
                  <div>
                    <span className="text-text-muted">メール:</span>
                    <span className="ml-2">support@stockwl.jp</span>
                  </div>
                </div>
                <p className="text-text-muted text-xs">受付時間: 平日 9:00-18:00（土日祝日を除く）</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-yellow text-dark-navy rounded-lg hover:bg-accent-yellow-light transition-colors font-semibold"
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
