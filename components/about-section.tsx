"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">会社案内</h2>
          <p className="text-muted-foreground text-lg">About Us</p>
        </motion.div>

        {/* CEO Message */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
          >
            代表挨拶
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
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
          </motion.div>
        </div>

        {/* Company Info */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
          >
            会社情報
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Card>
              <CardContent className="p-8 md:p-12">
                <dl className="space-y-6">
                  {[
                    { term: "会社名", desc: "株式会社 測天" },
                    { term: "代表者", desc: "代表取締役社長 林 洋佐" },
                    { term: "設立", desc: "2007年9月1日" },
                    { term: "資本金", desc: "100万円" },
                    { term: "従業員数", desc: "7名" },
                    { term: "事業内容", desc: "測量業務、調査業務、システム開発" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.term}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-2"
                    >
                      <dt className="font-bold text-muted-foreground">{item.term}</dt>
                      <dd className="sm:col-span-2">{item.desc}</dd>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.48 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2"
                  >
                    <dt className="font-bold text-muted-foreground">所在地</dt>
                    <dd className="sm:col-span-2">
                      （本社）
                      <br />
                      〒507-0064
                      <br />
                      岐阜県多治見市北丘町5-2-197
                    </dd>
                    <br />
                    <dd className="sm:col-span-2">
                      （多治見営業所）
                      <br />
                      〒507-0053
                      <br />
                      岐阜県多治見市若松町2-5
                    </dd>
                  </motion.div>
                </dl>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}