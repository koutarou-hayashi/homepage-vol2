import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const newsItems = [
  {
    date: "2025.01.15",
    category: "プレスリリース",
    title: "新サービス「○○○○」をリリースしました",
  },
  {
    date: "2025.01.10",
    category: "お知らせ",
    title: "年末年始休業のお知らせ",
  },
  {
    date: "2024.12.20",
    category: "イベント",
    title: "展示会「○○○○2025」に出展いたします",
  },
  {
    date: "2024.12.15",
    category: "プレスリリース",
    title: "新オフィス開設のお知らせ",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">お知らせ</h2>
          <p className="text-muted-foreground text-lg">News</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {newsItems.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground w-fit">
                    {item.category}
                  </span>
                </div>
                <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
