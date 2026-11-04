import { useState } from 'react'
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar } from "lucide-react"

interface NewsItems {
  date: string
  category: string
  title: string
  details: string | string[]
}

const newsItems: NewsItems[] = [
  {
    date: "2025.12.15",
    category: "プレスリリース",
    title: "事務所移転のお知らせ",
    details: [
      "多治見事務所を長瀬町から若松町へ移転しました。",
    ]
  },
]

export function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItems | null>(null);
  const isDialogOpen = !!selectedNews;

  const handleCardClick = (news: NewsItems) => {
    setSelectedNews(news);
  };

  const handleDialogClose = () => {
    setSelectedNews(null);
  };

  return (
    <section id="news" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">お知らせ</h2>
          <p className="text-muted-foreground text-lg">News</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {newsItems.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Card
                className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleCardClick(news)}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{news.date}</span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-primary-foreground w-fit">
                      {news.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg md:text-xl">{news.title}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="flex flex-col sm:max-w-[90vw] md:max-w-4xl md:h-5/6 max-h-[90vh] overflow-hidden">
          {selectedNews && (
            <>
              <DialogHeader className="flex-shrink-0">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedNews.date}</span>
                </div>
                <div className="flex items-center space-x-4 mb-2">
                  <DialogTitle className="text-2xl">{selectedNews.title}</DialogTitle>
                </div>
              </DialogHeader>

              <div className="mt-4 space-y-4 flex-grow overflow-y-auto pr-4">
                <h3 className="text-lg font-bold sticky top-0 bg-background/90 py-2 z-10 border-b">お知らせ内容</h3>
                {Array.isArray(selectedNews.details) ? (
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {selectedNews.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{selectedNews.details}</p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}