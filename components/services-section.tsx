import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Ruler, ClipboardList, Code } from "lucide-react"

const services = [
  {
    icon: Ruler,
    title: "測量業務",
    description:
      "お客様の事業規模に合わせた、高精度な測量技術を提供します。品質とスピードで、あらゆるプロジェクトの確実な基盤を築きます。",
  },
  {
    icon: ClipboardList,
    title: "調査業務",
    description:
      "お客様の目的に合わせた、徹底した調査と分析を提供します。リスクの特定から最適な計画立案まで、幅広くサポートいたします。",
  },
  {
    icon: Code,
    title: "システム開発",
    description:
      "お客様のニーズに合わせた、高品質なシステム開発を提供します。業務効率化から新規事業立ち上げまで、幅広く対応いたします。",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">業務内容</h2>
          <p className="text-muted-foreground text-lg">Services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
