import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Train, Clock } from "lucide-react"

export function AccessSection() {
  return (
    <section id="access" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">アクセス</h2>
          <p className="text-muted-foreground text-lg">Access</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">所在地</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">本社</p>
                      <p className="text-muted-foreground">
                        〒100-0001
                        <br />
                        東京都千代田区千代田1-1-1
                        <br />
                        サンプルビル10F
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Train className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">最寄り駅</p>
                      <p className="text-muted-foreground">
                        東京メトロ千代田線「二重橋前駅」徒歩3分
                        <br />
                        JR「東京駅」徒歩8分
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">営業時間</p>
                      <p className="text-muted-foreground">
                        平日 9:00 - 18:00
                        <br />
                        (土日祝日は休業)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853524778!2d139.7624806!3d35.6812362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="会社所在地の地図"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
