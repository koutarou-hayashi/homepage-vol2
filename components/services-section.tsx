import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Smartphone, LineChart } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "システム開発",
    description:
      "お客様のニーズに合わせた、高品質なシステム開発を提供します。業務効率化から新規事業立ち上げまで、幅広く対応いたします。",
  },
  {
    icon: Cloud,
    title: "クラウドソリューション",
    description:
      "最新のクラウド技術を活用し、スケーラブルで安全なシステム基盤を構築します。運用コストの削減と柔軟性の向上を実現します。",
  },
  {
    icon: Smartphone,
    title: "モバイルアプリ開発",
    description:
      "iOS・Android対応のネイティブアプリから、クロスプラットフォーム開発まで、ユーザー体験を重視したアプリを開発します。",
  },
  {
    icon: LineChart,
    title: "ITコンサルティング",
    description:
      "デジタルトランスフォーメーション（DX）推進から、IT戦略立案まで、経験豊富なコンサルタントがサポートします。",
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
