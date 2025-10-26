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
                  {/* 修正箇所（代表写真を変更） */}
                  <img src="/professional-business-person.png" alt="代表取締役" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-base md:text-lg leading-relaxed mb-6">
                  株式会社測天は、測量の語源である測天量地（天を測る・地を量る）よりグロ－バルな測量技術を提供することを経営理念として社名としました。創業以来、最新鋭の測量機器（GNSSや地上型３Dレーザ－スキャナ－等）を駆使してさまざまな場面で結果を出してきました。これからも社員の知恵と知識を出し合い総力を上げて、お客様に満足していただけるような成果に加え付加価値をご提供することで社会に貢献してまいります。
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
                  {/* 修正箇所（正確な設立日の入力） */}
                  <dt className="font-bold text-muted-foreground">設立</dt>
                  <dd className="sm:col-span-2">2010年4月1日</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {/* 修正箇所（正確な値の入力） */}
                  <dt className="font-bold text-muted-foreground">資本金</dt>
                  <dd className="sm:col-span-2">1億円</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <dt className="font-bold text-muted-foreground">代表者</dt>
                  <dd className="sm:col-span-2">代表取締役社長 林 洋佐</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {/* 修正箇所（正確な従業員数の入力） */}
                  <dt className="font-bold text-muted-foreground">従業員数</dt>
                  <dd className="sm:col-span-2">150名</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <dt className="font-bold text-muted-foreground">事業内容</dt>
                  <dd className="sm:col-span-2">
                    測量業務、調査業務、システム開発
                  </dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <dt className="font-bold text-muted-foreground">所在地</dt>
                  <dd className="sm:col-span-2">
                    〒507-0053
                    <br />
                    岐阜県多治見市若松町2-5
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
