import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Ruler, ClipboardList, Code, LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  details: string | string[]
}

const services: Service[] = [
  {
    icon: Ruler,
    title: "測量業務",
    description:
      "お客様の事業規模に合わせた、高精度な測量技術を提供します。品質とスピードで、あらゆるプロジェクトの確実な基盤を築きます。",
    details: [
      "ドローン（UAV）測量：航空機やドローン等にレーザスキャナ装置を取り付け、レーザの反射光を受光検知することで、地上の形状を計測します。",
      "地上レーザースキャナー測量：広範囲をスキャニングして3D点群データを取得し、平面図、縦横断図、土量計算に利用します。",
      "GNSS測量：基準点測量から単独測位による応用測量にいたるまで人工衛星を利用したGNSS測量を行っています。",
      "基準点測量：公共事業等に伴い新たに基準点が必要となった際に、既知点に基づき、新点の位置を定める作業。事業を行う際の根幹となる測量です。",
      "水準測量：地点の標高や高低差を求めるための測量です。",
      "路線測量（縦断測量）：一定線上(各点)の高低と起点からの水平距離により勾配を求め、縦断面図を作成します。",
      "路線測量（横断測量）：打ち込んだ(一定直線の)杭位置に対し、直角方向の地盤高低を求めます。",
      "河川測量（深浅測量）：水面を基準にして測深位置と水深とを同時に測定し、水底部の地形を明らかにするため、横断面図を作成する作業です。",
      "地形測量（TS平板測量）：トータルステーションを用い地形状況を測定した測点を図面上に展開して結ぶことで平面図を作成する作業です。",
    ],
  },
  {
    icon: ClipboardList,
    title: "調査業務",
    description:
      "お客様の目的に合わせた、徹底した調査と分析を提供します。リスクの特定から最適な計画立案まで、幅広くサポートいたします。",
    details: [
      "トンネル内空変位調査：定期的に内空断面を測定比較することで経年変化を確認し、維持管理計画の資料を作成する作業です。",
      "資産調査：施設やそこに付随した設備及び資産対象となる物件などを定期的に確認する棚卸しのような作業です。",
      "流末調査：道路上での事故等により油等が路面に流出した時に流末排水系統を把握しておく事で河川等に放出する前に迅速に処理対応できる資料を作成します。",
      "路面変位調査：道路の舗装面を所定の格子状に平面上の定点の高さを定期的に測定し、路面変状を把握することで道路維持管理に役立て、安心安全に道路を利用していただくための調査です。",
      "橋梁部沈下調査：橋梁のピアに鋲などの定点を水準測量により、変動を定期的に観測して経年変化を確認します。橋梁の維持管理計画に利用することを目的とする調査です。",
    ],
  },
  {
    icon: Code,
    title: "システム開発",
    description:
      "お客様のニーズに合わせた、高品質なシステム開発を提供します。業務効率化から新規事業立ち上げまで、幅広く対応いたします。",
    details: [
      "ホームページ作成：お客様の成果につながるデザインと、情報を整理したWebサイトで、貴社のビジネスを加速します。",
      "システム開発：実動に応じたオリジナルシステムを開発、更新し、作業コストを低減すると共に精度を向上させます。",
    ],
  },
];

export function ServicesSection() {
  // モーダルで表示するサービスデータを管理 (null または Service型)
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // モーダルを開く/閉じる状態を管理
  const isDialogOpen = !!selectedService;

  // カードクリックハンドラ
  const handleCardClick = (service: Service) => {
    setSelectedService(service);
  };

  // モーダルを閉じるハンドラ
  const handleDialogClose = () => {
    setSelectedService(null);
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* ... (タイトル部分) ... */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">業務内容</h2>
          <p className="text-muted-foreground text-lg">Services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              // onClick ハンドラを追加し、カーソルをポインターに変更
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleCardClick(service)}
              >
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
            );
          })}
        </div>
      </div>

      {/* -------------------- サービス詳細モーダル -------------------- */}
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="flex flex-col sm:max-w-[90vw] md:max-w-4xl md:h-5/6 max-h-[90vh] overflow-hidden">
          {selectedService && (
            <>
              <DialogHeader className="flex-shrink-0">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <selectedService.icon className="h-5 w-5" />
                  </div>
                  <DialogTitle className="text-2xl">{selectedService.title} </DialogTitle>
                </div>
                <DialogDescription>{selectedService.description}</DialogDescription>
              </DialogHeader>

              {/* 詳細コンテンツ部分: */}
              <div className="mt-4 space-y-4 flex-grow overflow-y-auto pr-4">
                <h3 className="text-lg font-bold sticky top-0 bg-background/90 py-2 z-10 border-b">主要サービス内容</h3>
                {Array.isArray(selectedService.details) ? (
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {selectedService.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{selectedService.details}</p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}