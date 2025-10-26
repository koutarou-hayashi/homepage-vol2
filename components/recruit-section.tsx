import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Briefcase, Heart, Clock, TrendingUp, TreePalm, LucideIcon } from "lucide-react"

interface Benefits {
  icon: LucideIcon
  title: string
  details: string | string[]
}

const benefits: Benefits[] = [
  {
    icon: TrendingUp,
    title: "給与、昇給、賞与",
    details: [
      "給与：月給22万円から",
      "昇給：年1回（1月）",
      "賞与：年2回（夏、冬）",
      "前年度売り上げにより特別賞与制度あり",
    ]
  },
  {
    icon: Clock,
    title: "勤務時間",
    details: [
      "平日 8:30 - 17:30（標準労働時間 8時間・休憩 1時間）",
      "時間外労働：月20時間程度（前年度実績）",
    ]
  },
  // {
  //   icon: GraduationCap,
  //   title: "学習支援",
  //   description: "資格取得支援・書籍購入補助",
  //   details: [],
  // },
  {
    icon: Heart,
    title: "諸手当",
    details: [
      "交通費支給",
      "時間外手当",
      "住宅手当",
      "役職手当",
      "家族手当",
      "資格手当",
    ]
  },
  {
    icon: TreePalm,
    title: "休暇・休日",
    details: [
      "土日祝日",
      "夏季休暇",
      "年末休暇",
      "慶弔休暇",
      "産前産後休暇",
      "育児休暇",
      "有給休暇",
    ]
  },
  {
    icon: Briefcase,
    title: "福利厚生",
    details: [
      "自己研鑽補助",
      "確定拠出年金制度",
      "慶弔見舞金制度",
      "定期健康診断",
      "各種社会保険完備",
      "報奨制度",
    ]
  },
]

const positions = [
  {
    title: "測量士",
    type: "正社員 (試用期間：６ヶ月）",
    description: "測量士資格をお持ちの方限定となっております。主に測量業務を担当していただきます。",
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
  // モーダルで表示するサービスデータを管理 (null または Benefis型)
  const [selectedBenefit, setSelectedBenefit] = useState<Benefits | null>(null);

  // モーダルを開く/閉じる状態を管理
  const isDialogOpen = !!selectedBenefit;

  // カードクリックハンドラ
  const handleCardClick = (benefit: Benefits) => {
    setSelectedBenefit(benefit);
  };

  // モーダルを閉じるハンドラ
  const handleDialogClose = () => {
    setSelectedBenefit(null);
  }

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
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => handleCardClick(benefit)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold mb-2">{benefit.title}</h4>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* -------------------- サービス詳細モーダル -------------------- */}
          <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
            <DialogContent className="flex flex-col sm:max-w-[90vw] md:max-w-4xl md:h-5/6 max-h-[90vh] overflow-hidden">
              {selectedBenefit && (
                <>
                  <DialogHeader className="flex-shrink-0">
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <selectedBenefit.icon className="h-5 w-5" />
                      </div>
                      <DialogTitle className="text-2xl">{selectedBenefit.title}</DialogTitle>
                    </div>
                  </DialogHeader>

                  {/* 詳細コンテンツ部分: */}
                  <div className="mt-4 space-y-4 flex-grow overflow-y-auto pr-4">
                    <h3 className="text-lg font-bold sticky top-0 bg-background/90 py-2 z-10 border-b">詳細</h3>
                    {Array.isArray(selectedBenefit.details) ? (
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {selectedBenefit.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">{selectedBenefit.details}</p>
                    )}
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

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
