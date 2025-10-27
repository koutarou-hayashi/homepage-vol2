import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-primary-foreground"
    >
      {/* <div className="absolute inset-0 bg-[url('/top-back.png')] bg-cover bg-center" /> */}

      <video
        className="absolute inset-0 w-full h-full object-cover" // 動画を画面全体に広げ、アスペクト比を維持してクロップ
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/sokuten.mp4" type="video/mp4" />
      </video>

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          最新の測量技術で
          <br />
          未来を創造する会社
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto text-balance">
          私たちは、最先端の技術とサービスで
          <br />
          社会の「信頼」と「未来」を想像します
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact">お問い合わせ</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <a href="#about">会社案内</a>
          </Button>
        </div>
      </div>

      <a
        href="#news"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="スクロールダウン"
      >
        <ChevronDown className="h-8 w-8 text-primary-foreground" />
      </a>
    </section>
  )
}
