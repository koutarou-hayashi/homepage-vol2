import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">会社案内</h2>
          <p className="text-muted-foreground text-lg">About Us</p>
        </div>

        {/* CEO Message */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">代表挨拶</h3>
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted flex-shrink-0 mx-auto md:mx-0 overflow-hidden">
                  <img src="/professional-business-person.png" alt="代表取締役" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-base md:text-lg leading-relaxed mb-6">
                    私たちは、お客様のビジネスパートナーとして、常に最高のサービスを提供することを使命としています。
                    変化の激しい時代において、革新的な技術とソリューションで、お客様の成長を支援してまいります。
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-6">
                    社員一人ひとりが高い専門性と情熱を持ち、チーム一丸となってお客様の課題解決に取り組んでいます。
                    これからも、信頼されるパートナーとして、社会に貢献できる企業を目指してまいります。
                  </p>
                  <div className="text-right">
                    <p className="font-bold text-lg">代表取締役社長</p>
                    <p className="text-2xl font-bold mt-2">林 洋佐</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Info */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">会社情報</h3>
          <Card>
            <CardContent className="p-8 md:p-12">
              <dl className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <dt className="font-bold text-muted-foreground">会社名</dt>
                  <dd className="sm:col-span-2">株式会社 測天</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <dt className="font-bold text-muted-foreground">設立</dt>
                  <dd className="sm:col-span-2">2010年4月1日</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <dt className="font-bold text-muted-foreground">資本金</dt>
                  <dd className="sm:col-span-2">1億円</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <dt className="font-bold text-muted-foreground">代表者</dt>
                  <dd className="sm:col-span-2">代表取締役社長 林 洋佐</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <dt className="font-bold text-muted-foreground">従業員数</dt>
                  <dd className="sm:col-span-2">150名</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <dt className="font-bold text-muted-foreground">事業内容</dt>
                  <dd className="sm:col-span-2">
                    システム開発、Webサービス開発、
                    <br />
                    ITコンサルティング、クラウドソリューション
                  </dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <dt className="font-bold text-muted-foreground">所在地</dt>
                  <dd className="sm:col-span-2">
                    〒100-0001
                    <br />
                    東京都千代田区千代田1-1-1 サンプルビル10F
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
