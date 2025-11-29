import { useState, useEffect, useRef } from 'react';
import SoftBackground from '../components/SoftBackground';
import SoftHeader from '../components/SoftHeader';
import SoftStockDisplay from '../components/SoftStockDisplay';
import DiagnosisTickerBanner from '../components/DiagnosisTickerBanner';
import SoftDivider from '../components/SoftDivider';
import SoftFormCard from '../components/SoftFormCard';
import SoftStockInput from '../components/SoftStockInput';
import SoftActionButton from '../components/SoftActionButton';
import SoftLoadingAnimation from '../components/SoftLoadingAnimation';
import SoftModal from '../components/SoftModal';
import AnalysisRenderer from '../components/AnalysisRenderer';
import { Sparkles } from 'lucide-react';
import { StockData } from '../types/stock';
import { DiagnosisState } from '../types/diagnosis';
import { useUrlParams } from '../hooks/useUrlParams';
import { useStockSearch } from '../hooks/useStockSearch';
import { apiClient } from '../lib/apiClient';
import { userTracking } from '../lib/userTracking';
import { trackConversion, trackDiagnosisButtonClick, trackConversionButtonClick } from '../lib/googleTracking';

const diagnosisRecords = [
  { time: '1分前', stock: 'トヨタ自動車 (7203)', icon: '👨' },
  { time: '3分前', stock: 'ソニーグループ (6758)', icon: '👩' },
  { time: '5分前', stock: '任天堂 (7974)', icon: '👨' },
  { time: '7分前', stock: 'ソフトバンクグループ (9984)', icon: '👩' },
  { time: '10分前', stock: 'キーエンス (6861)', icon: '👨' },
  { time: '12分前', stock: '三菱UFJフィナンシャル (8306)', icon: '👩' },
  { time: '15分前', stock: 'ファーストリテイリング (9983)', icon: '👨' },
  { time: '18分前', stock: '東京エレクトロン (8035)', icon: '👩' },
  { time: '20分前', stock: 'リクルートホールディングス (6098)', icon: '👨' },
  { time: '23分前', stock: 'KDDI (9433)', icon: '👩' },
  { time: '25分前', stock: '信越化学工業 (4063)', icon: '👨' },
  { time: '28分前', stock: '第一三共 (4568)', icon: '👩' },
  { time: '30分前', stock: '三菱商事 (8058)', icon: '👨' },
  { time: '33分前', stock: 'ダイキン工業 (6367)', icon: '👩' },
  { time: '35分前', stock: '村田製作所 (6981)', icon: '👨' },
  { time: '38分前', stock: 'オリエンタルランド (4661)', icon: '👩' },
  { time: '40分前', stock: '日本電信電話 (9432)', icon: '👨' },
  { time: '43分前', stock: 'エムスリー (2413)', icon: '👩' },
  { time: '45分前', stock: 'ダイキン工業 (6367)', icon: '👨' },
  { time: '48分前', stock: '日立製作所 (6501)', icon: '👩' },
];

export default function RefactoredHome() {
  const urlParams = useUrlParams();
  const { search, isLoading: isSearchLoading } = useStockSearch();
  const [stockCode, setStockCode] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [diagnosisState, setDiagnosisState] = useState<DiagnosisState>('initial');
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [diagnosisStartTime, setDiagnosisStartTime] = useState<number>(0);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [showLoadingScene, setShowLoadingScene] = useState<boolean>(false);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isAutoSelectingRef = useRef<boolean>(false);
  const [autoFillMessage, setAutoFillMessage] = useState<string>('');

  useEffect(() => {
    if (urlParams.code && !isSearchLoading) {
      isAutoSelectingRef.current = true;

      const searchResults = search(urlParams.code);

      if (searchResults.length > 0) {
        const firstResult = searchResults[0];
        const displayValue = `${firstResult.code} ${firstResult.name}`;

        setStockCode(firstResult.code);
        setInputValue(displayValue);
        fetchStockData(firstResult.code);

        setAutoFillMessage('株式情報を自動入力しました');
        setTimeout(() => setAutoFillMessage(''), 2000);
      } else {
        setStockCode(urlParams.code);
        setInputValue(urlParams.code);
        fetchStockData(urlParams.code);
      }
    } else if (!urlParams.code) {
      setStockCode('');
      setInputValue('');
    }
  }, [urlParams.code, search, isSearchLoading]);

  useEffect(() => {
    const trackPageVisit = async () => {
      if (stockData) {
        await userTracking.trackPageLoad({
          stockCode: stockCode,
          stockName: stockData.info.name,
          urlParams: {
            src: urlParams.src || '',
            gclid: urlParams.gclid || '',
            racText: urlParams.racText || '',
            code: urlParams.code || ''
          }
        });
      }
    };

    trackPageVisit();
  }, [stockData, stockCode, urlParams]);

  const fetchStockData = async (code: string) => {
    const cleanCode = code.replace(/[^\d]/g, '');

    if (!cleanCode || !/^\d{4}$/.test(cleanCode)) {
      setStockData(null);
      setStockCode(cleanCode);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.get(`/api/stock/data?code=${cleanCode}`);

      if (!response.ok) {
        setStockData(null);
        setStockCode(cleanCode);
        setError(null);
        return;
      }

      const data = await response.json();
      setStockData(data);
      setStockCode(cleanCode);
      setError(null);
    } catch (err) {
      setStockData(null);
      setStockCode(cleanCode);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  const handleStockSelect = (code: string, name: string) => {
    setStockCode(code);
    fetchStockData(code);
  };

  useEffect(() => {
    if (isAutoSelectingRef.current) {
      isAutoSelectingRef.current = false;
      return;
    }

    const timer = setTimeout(() => {
      if (inputValue) {
        fetchStockData(inputValue);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const runDiagnosis = async () => {
    if (diagnosisState !== 'initial') return;
    if (!stockCode || !stockData) return;

    trackDiagnosisButtonClick();

    setDiagnosisState('connecting');
    setDiagnosisStartTime(Date.now());
    setAnalysisResult('');
    setLoadingProgress(0);
    setShowLoadingScene(true);

    const minimumLoadingTime = 2000;
    const startTime = Date.now();

    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    progressIntervalRef.current = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 85) {
          return prev + Math.random() * 15;
        } else if (prev < 95) {
          return prev + Math.random() * 2;
        }
        return prev;
      });
    }, 100);

    try {
      const apiUrl = `${import.meta.env.VITE_API_URL || ''}/api/gemini/diagnosis`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 50000);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: stockCode,
          stockData: stockData ? {
            name: stockData.info.name,
            price: stockData.info.price,
            change: stockData.info.change,
            changePercent: stockData.info.changePercent,
            per: stockData.info.per,
            pbr: stockData.info.pbr,
            dividend: stockData.info.dividend,
            industry: stockData.info.industry,
            marketCap: stockData.info.marketCap,
          } : null,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }

      if (!response.ok) {
        throw new Error('AI診断に失敗しました');
      }

      setDiagnosisState('processing');

      const contentType = response.headers.get('content-type');

      if (contentType?.includes('text/event-stream')) {
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let fullAnalysis = '';
        let firstChunk = true;

        if (!reader) {
          throw new Error('ストリーム読み取りに失敗しました');
        }

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            break;
          }

          const text = decoder.decode(value, { stream: true });
          const lines = text.split('\n').filter(line => line.trim() !== '');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);

              try {
                const parsed = JSON.parse(data);

                if (parsed.error) {
                  throw new Error(parsed.error);
                }

                if (parsed.content) {
                  fullAnalysis += parsed.content;

                  if (firstChunk && fullAnalysis.trim().length > 0) {
                    setLoadingProgress(100);
                    const elapsedTime = Date.now() - startTime;
                    const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);

                    setTimeout(() => {
                      setShowLoadingScene(false);
                      setDiagnosisState('streaming');
                    }, remainingTime + 300);
                    firstChunk = false;
                  }

                  setAnalysisResult(fullAnalysis);
                }

                if (parsed.done) {
                  setDiagnosisState('results');

                  const durationMs = Date.now() - diagnosisStartTime;
                  await userTracking.trackDiagnosisClick({
                    stockCode: inputValue,
                    stockName: stockData?.info.name || inputValue,
                    durationMs: durationMs
                  });
                }
              } catch (parseError) {
                console.error('Error parsing SSE data:', parseError);
              }
            }
          }
        }
      } else {
        const result = await response.json();

        if (!result.analysis || result.analysis.trim() === '') {
          throw new Error('診断結果が生成されませんでした');
        }

        setAnalysisResult(result.analysis);

        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);

        setTimeout(() => {
          setShowLoadingScene(false);
          setDiagnosisState('results');
        }, remainingTime + 300);

        const durationMs = Date.now() - diagnosisStartTime;
        await userTracking.trackDiagnosisClick({
          stockCode: inputValue,
          stockName: stockData?.info.name || inputValue,
          durationMs: durationMs
        });
      }
    } catch (err) {
      console.error('Diagnosis error:', err);
      let errorMessage = '診断中にエラーが発生しました';
      let errorDetails = '';

      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          errorMessage = 'リクエストがタイムアウトしました';
          errorDetails = '接続に時間がかかりすぎています。もう一度お試しください。';
        } else {
          errorMessage = err.message;

          try {
            const errorResponse = JSON.parse(err.message);
            if (errorResponse.details) {
              errorDetails = errorResponse.details;
            }
          } catch {
            errorDetails = err.message;
          }
        }
      }

      setError(`${errorMessage}${errorDetails ? `\n詳細: ${errorDetails}` : ''}`);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 2000 - elapsedTime);

      setTimeout(() => {
        setDiagnosisState('error');
        setShowLoadingScene(false);
        setLoadingProgress(0);
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
      }, remainingTime);
    }
  };

  const handleLineConversion = async () => {
    try {
      // Show confirmation dialog for transparency - Google Ads compliant
      const userConfirmed = window.confirm(
        '【外部サイトへの移動】\n\n' +
        'これからLINE公式アプリまたはLINE公式サイト(第三者サービス)に移動します。\n\n' +
        'LINEは当サービスとは独立した別のサービスです。\n\n' +
        'LINE公式アカウントを友だち追加すると、毎日最新の株式分析レポートを受け取ることができます。\n\n' +
        '※ 当サービスは完全無料です。LINEへの移動後も追加料金は一切かかりません。\n\n' +
        'LINEアプリに移動しますか？'
      );

      if (!userConfirmed) {
        console.log('User cancelled LINE redirect');
        return;
      }

      trackConversionButtonClick();

      const response = await apiClient.get('/api/line-redirects/select');

      if (!response.ok) {
        console.error('Failed to get LINE redirect link');
        alert('LINEリンクの取得に失敗しました。しばらくしてからもう一度お試しください。');
        return;
      }

      const data = await response.json();

      if (!data.success || !data.link) {
        console.error('No active LINE redirect links available');
        alert('現在利用可能なLINEリンクがありません。');
        return;
      }

      const lineUrl = data.link.redirect_url;

      // Track conversion using sendBeacon for reliable tracking
      trackConversion();

      // Use sendBeacon for non-blocking tracking
      if (navigator.sendBeacon) {
        const trackingData = JSON.stringify({
          sessionId: sessionStorage.getItem('sessionId') || '',
          eventType: 'conversion',
          gclid: urlParams.gclid,
          eventData: {
            conversion_time: new Date().toISOString()
          }
        });
        navigator.sendBeacon('/api/tracking/event', trackingData);
      } else {
        // Fallback for browsers that don't support sendBeacon
        await userTracking.trackConversion({
          gclid: urlParams.gclid
        });
      }

      console.log('LINE conversion tracked successfully');

      // Immediate redirect without delay - Google Ads compliant
      window.location.href = lineUrl;
    } catch (error) {
      console.error('LINE conversion error:', error);
      alert('操作に失敗しました。しばらくしてからもう一度お試しください。');
    }
  };

  const handleReportDownload = async () => {
    try {
      const response = await apiClient.get('/api/line-redirects/select');
      let lineRedirectUrl = '';

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.link) {
          lineRedirectUrl = data.link.redirect_url;
        }
      }

      const { generateDiagnosisReport } = await import('../lib/reportGenerator');
      await generateDiagnosisReport({
        stockCode: stockCode,
        stockName: stockData?.info.name || '',
        analysis: analysisResult,
        lineRedirectUrl: lineRedirectUrl
      });

      await userTracking.trackEvent({
        sessionId: sessionStorage.getItem('sessionId') || '',
        eventType: 'report_download',
        stockCode: stockCode,
        stockName: stockData?.info.name || '',
        eventData: {
          reportFormat: 'docx',
          timestamp: new Date().toISOString()
        }
      });

      console.log('Report download tracked successfully');
    } catch (error) {
      console.error('Report download error:', error);
      alert('レポートのダウンロードに失敗しました。もう一度お試しください。');
    }
  };

  const closeModal = () => {
    setDiagnosisState('initial');
    setAnalysisResult('');
    setLoadingProgress(0);
    setShowLoadingScene(false);
    setDiagnosisStartTime(0);
    setError(null);
    setStockCode('');
    setInputValue('');
    setStockData(null);

    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      <SoftBackground />

      <div className="relative z-10 flex flex-col">
        <SoftHeader />

        {!showLoadingScene ? (
          <div className="flex-1 flex flex-col py-8">
            <div className="container mx-auto space-y-6">
              <div className="text-center space-y-4 px-4 py-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                  やさしいAI株式診断
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  人工知能があなたの投資をサポートします。銘柄を入力して、無料で詳細な分析を受け取りましょう。
                </p>
              </div>

              <DiagnosisTickerBanner records={diagnosisRecords} />

              <SoftDivider />

              {stockData && (
                <SoftStockDisplay info={stockData.info} price={stockData.price} />
              )}

              <SoftFormCard>
                <SoftStockInput
                  value={inputValue}
                  onChange={setInputValue}
                  onSelect={handleStockSelect}
                  suggestions={search(inputValue)}
                  autoFillMessage={autoFillMessage}
                />

                {loading && (
                  <div className="text-center py-6 animate-fadeIn">
                    <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-emerald-200 border-t-emerald-500"></div>
                    <p className="mt-3 text-gray-600 text-sm">株式情報を読み込み中...</p>
                  </div>
                )}

                {error && diagnosisState !== 'error' && (
                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-2xl p-4 text-center animate-fadeIn mt-4">
                    <p className="text-rose-600 text-sm font-medium">{error}</p>
                  </div>
                )}

                {!loading && diagnosisState === 'initial' && (
                  <div className="mt-6">
                    <SoftActionButton
                      onClick={runDiagnosis}
                      disabled={!inputValue || !stockCode}
                      icon={<Sparkles size={20} />}
                    >
                      無料で診断を開始
                    </SoftActionButton>
                  </div>
                )}

                {diagnosisState === 'error' && (
                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300 rounded-2xl p-6 text-center animate-fadeIn mt-4">
                    <h3 className="text-xl font-semibold text-rose-700 mb-3">診断エラー</h3>
                    <p className="text-rose-600 text-sm mb-6 whitespace-pre-line">{error}</p>
                    <button
                      onClick={() => {
                        setDiagnosisState('initial');
                        setError(null);
                      }}
                      className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-full transition-all shadow-lg hover:scale-105 active:scale-95"
                    >
                      もう一度試す
                    </button>
                  </div>
                )}
              </SoftFormCard>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center py-12">
            <SoftLoadingAnimation progress={loadingProgress} />
          </div>
        )}
      </div>

      <SoftModal
        isOpen={diagnosisState === 'streaming' || diagnosisState === 'results'}
        onClose={closeModal}
        title="AI診断結果"
      >
        <div className="p-8">
          <div className="mb-6 pb-6 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{stockData?.info.name}</h3>
            <p className="text-sm text-gray-500">銘柄コード: {stockCode}</p>
          </div>

          <div className="prose max-w-none">
            <AnalysisRenderer analysis={analysisResult} />
          </div>

          {diagnosisState === 'results' && (
            <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
              <button
                onClick={handleLineConversion}
                className="w-full h-14 px-8 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #06C755 0%, #00B900 100%)',
                  boxShadow: '0 4px 16px rgba(6, 199, 85, 0.4)',
                }}
              >
                LINE公式アカウントで最新情報を受け取る
              </button>
              <button
                onClick={handleReportDownload}
                className="w-full h-14 px-8 rounded-full font-semibold text-gray-700 text-base border-2 border-gray-200 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50"
              >
                診断レポートをダウンロード
              </button>
            </div>
          )}
        </div>
      </SoftModal>
    </div>
  );
}
