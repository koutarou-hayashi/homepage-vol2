"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HelloSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景動画 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/sokuten.mp4" type="video/mp4" />
      </video>

      {/* オーバーレイ：緑がかった濃いダークにして、動画との相性を良くする */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/65 via-emerald-950/30 to-emerald-950/60" />

      {/* 測量グリッドパターン */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* メイン見出し */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance leading-tight tracking-tight"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
        >
          最新の測量技術で
          <br />
          未来を<span className="text-emerald-400">創造</span>する会社
        </motion.h1>

        {/* サブテキスト */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-3xl mx-auto text-balance leading-relaxed"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.3)" }}
        >
          私たちは、最先端の技術とサービスで
          <br />
          社会の「信頼」と「未来」を想像します
        </motion.p>

        {/* CTAボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* お問い合わせ：緑を主張しすぎず、白ベースに緑のアクセントボーダー */}
          <Button
            size="lg"
            className="bg-white text-emerald-800 hover:bg-emerald-500 hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/30 hover:-translate-y-0.5 border-0"
            asChild
          >
            <a href="#contact">お問い合わせ</a>
          </Button>

          {/* 会社案内：半透明の緑枠 */}
          <Button
            size="lg"
            variant="outline"
            className="bg-emerald-500/20 backdrop-blur-sm border-emerald-400/60 text-white hover:bg-emerald-500 hover:text-white hover:border-emerald-500 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5"
            asChild
          >
            <a href="#about">会社案内</a>
          </Button>
        </motion.div>
      </div>

      {/* スクロール誘導 */}
      <motion.a
        href="#news"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="スクロールダウン"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8 text-emerald-200/80" />
        </motion.div>
      </motion.a>
    </section>
  )
}