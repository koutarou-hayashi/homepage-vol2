import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground"
    >
      <div className="absolute inset-0 bg-[url('/modern-office-building.png')] bg-cover bg-center opacity-20" />

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          未来を創造する
          <br />
          イノベーション企業
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto text-balance">
          私たちは、最先端の技術とサービスで
          <br className="hidden md:block" />
          お客様のビジネスを成功へと導きます
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
