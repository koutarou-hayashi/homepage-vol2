import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Heart, Clock, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "給与、昇給、賞与",
    description: "充実した研修制度とキャリアパス",
  },
  {
    icon: Clock,
    title: "勤務時間",
    description: "平日 8:30 - 17:30（標準労働時間 8時間・休憩 1時間）",
  },
  // {
  //   icon: GraduationCap,
  //   title: "学習支援",
  //   description: "資格取得支援・書籍購入補助",
  // },
  {
    icon: Heart,
    title: "諸手当",
    description: "フレックスタイム制・リモートワーク可",
  },
  {
    icon: Briefcase,
    title: "福利厚生",
    description: "各種社会保険完備・住宅手当",
  },
]

const positions = [
  {
    title: "測量士",
    type: "正社員 (試用期間：６ヶ月）",
    description: "測量業務を担当していただきます。",
  },
  // {
  //   title: "フロントエンドエンジニア",
  //   type: "正社員",
  //   description: "React、Next.jsを使用したモダンなWebアプリケーション開発を担当していただきます。",
  // },
  // {
  //   title: "プロジェクトマネージャー",
  //   type: "正社員",
  //   description: "プロジェクト全体の管理、クライアント折衝を担当していただきます。",
  // },
]

export function RecruitSection() {
  return (
    <section id="recruit" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">求人案内</h2>
          <p className="text-muted-foreground text-lg">Recruit</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">働く環境</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Job Positions */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">募集要項</h3>
            <div className="space-y-6 mb-8">
              {positions.map((position, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground w-fit">
                        {position.type}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{position.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">一緒に働く仲間を募集しています</h3>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  詳細な募集要項は、エントリーフォームよりご確認ください
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <a href="#entry-form">エントリーする</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
