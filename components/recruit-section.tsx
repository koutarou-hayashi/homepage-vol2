import { useState } from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Briefcase, Heart, Clock, TrendingUp, TreePalm, LucideIcon, CheckCircle2 } from "lucide-react"

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
      "平日 8:30 - 17:30\n※ 標準労働時間 8時間・休憩 1時間",
      "時間外労働：月20時間程度\n※ 前年度実績",
    ]
  },
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
]

export function RecruitSection() {
  const [selectedBenefit, setSelectedBenefit] = useState<Benefits | null>(null);
  const isDialogOpen = !!selectedBenefit;

  const handleCardClick = (benefit: Benefits) => {
    setSelectedBenefit(benefit);
  };

  const handleDialogClose = () => {
    setSelectedBenefit(null);
  }

  return (
    <section id="recruit" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">求人案内</h2>
          <p className="text-muted-foreground text-lg">Recruit</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Benefits */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              働く環境
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <Card
                      className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full"
                      onClick={() => handleCardClick(benefit)}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h4 className="font-bold mb-2">{benefit.title}</h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* モーダル */}
          <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
            <DialogContent className="flex flex-col sm:max-w-[90vw] md:max-w-lg md:h-5/6 max-h-[90vh] overflow-hidden">
              {selectedBenefit && (
                <>
                  <DialogHeader className="flex-shrink-0">
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <selectedBenefit.icon className="h-5 w-5" />
                      </div>
                      <DialogTitle className="text-2xl">{selectedBenefit.title}</DialogTitle>
                    </div>
                    {/* <DialogDescription>詳細をご確認ください</DialogDescription> */}
                  </DialogHeader>

                  <div className="mt-4 space-y-4 flex-grow overflow-y-auto pr-4">
                    <h3 className="text-lg font-bold sticky top-0 bg-background/90 py-2 z-10 border-b">詳細</h3>
                    <div className="space-y-3">
                      {Array.isArray(selectedBenefit.details) ? (
                        selectedBenefit.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-shadow"
                          >
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-slate-900 font-medium leading-relaxed whitespace-pre-line">{detail}</span>
                          </motion.div>
                        ))
                      ) : (
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-border">
                          <p className="text-muted-foreground">{selectedBenefit.details}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          {/* Job Positions */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              募集要項
            </motion.h3>
            <div className="space-y-6 mb-8">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <CardTitle className="text-xl">{position.title}</CardTitle>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-primary-foreground w-fit">
                          {position.type}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{position.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white">
                {/* グリッドパターン */}
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                  }}
                />
                <CardContent className="relative z-10 p-8 md:p-12 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    一緒に働く仲間を募集しています
                  </h3>
                  <p className="text-lg mb-8 text-white/80">
                    詳細な募集要項は、エントリーフォームよりご確認ください
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-emerald-900 hover:bg-emerald-500 hover:text-white font-semibold px-8"
                    asChild
                  >
                    <a href="/entry-page">エントリーする</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}