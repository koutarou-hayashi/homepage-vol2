export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white py-16">
      {/* 測量グリッドパターン */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* 会社情報 */}
          <div>
            <a href="#home" className="inline-block mb-5">
              <img src="logo.png" alt="株式会社 測天" className="h-9 md:h-11 brightness-0 invert" />
            </a>
            <p className="text-sm text-white/70 leading-relaxed">
              〒507-0053
              <br />
              岐阜県多治見市若松町2-5
            </p>
            <p className="text-sm text-white/70 mt-3">
              TEL: 0572-44-9431
            </p>
          </div>

          {/* サイトマップ */}
          <div>
            <h4 className="font-bold mb-5 text-base tracking-wide">サイトマップ</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#home", label: "ホーム" },
                { href: "#news", label: "お知らせ" },
                { href: "#about", label: "会社案内" },
                { href: "#services", label: "業務内容" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-white transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="font-bold mb-5 text-base tracking-wide">お問い合わせ</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#access", label: "アクセス" },
                { href: "#contact", label: "お問い合わせ" },
                { href: "#recruit", label: "求人案内" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-white transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; 2025 株式会社 測天 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}