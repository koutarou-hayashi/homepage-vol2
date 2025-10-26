interface VideoSplashProps {
  onSkip?: () => void
}

export function VideoSplash({ onSkip }: VideoSplashProps) {
  return (
    // 画面全体に動画を表示するためのコンテナ
    <div className="relative w-screen h-screen overflow-hidden bg-white flex items-center justify-center">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        muted
        playsInline
        // 7秒後には自動でHomeコンポーネントが切り替わるため、ここでは loop は必須ではありません
      >
        <source src="/splash.mp4" type="video/mp4" />
        {/* TypeScriptではJSX内でコメントを記述する場合、このように波括弧で囲みます */}
        <p>お使いのブラウザは動画タグをサポートしていません。</p>
      </video>

      {/* スキップボタン：onSkip 関数がある場合のみ表示 */}
      {onSkip && (
        <button
          onClick={onSkip}
          className="absolute top-4 right-4 z-10 bg-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm hover:bg-white/50 transition"
        >
          スキップ
        </button>
      )}

    </div>
  )
}