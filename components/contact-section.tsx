import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  // 送信中の状態を管理するためのステートを追加
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 処理中に二重送信を防ぐ
    if (isSubmitting) return

    setIsSubmitting(true)
    // フォーム送信処理をここに実装
    try {
      // 1. APIエンドポイントを設定（実際のエンドポイントに置き換えてください）
      const apiEndpoint = '/api/contact'; 

      // 2. データの送信
      const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      // 3. レスポンスの確認
      if (response.ok) {
          // 成功した場合
          alert("お問い合わせを受け付けました。担当者より折り返しご連絡いたします。");
          
          // フォームをリセット
          setFormData({
              name: "",
              email: "",
              phone: "",
              inquiryType: "",
              message: "",
          });
      } else {
          // API側でエラーコードが返された場合
          console.error("Submission failed:", response.statusText);
          alert("送信に失敗しました。時間をおいて再度お試しいただくか、お電話にてご連絡ください。");
      }
  } catch (error) {
      // ネットワークエラーなど、予期せぬエラーが発生した場合
      console.error("Network error:", error);
      alert("通信エラーが発生しました。インターネット接続を確認し、再度お試しください。");
  } finally {
      // 処理が完了したら送信中ステートを解除
      setIsSubmitting(false);
  }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-muted-foreground text-lg">Contact</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">お電話でのお問い合わせ</h3>
                      <p className="text-2xl font-bold mb-1">0572-44-9431</p>
                      <p className="text-sm text-muted-foreground">平日 8:30 - 17:30</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">メールでのお問い合わせ</h3>
                      <p className="text-sm break-all">sokuten8843@gmail.com</p> {/* 修正箇所（正確なメアドに） */}
                      <p className="text-sm text-muted-foreground mt-2">24時間受付</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="lg:col-span-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">お名前 *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="山田 太郎"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="03-1234-5678"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">お問い合わせ種類</Label>
                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>選択してください</option>
                      <option value="依頼">依頼</option>
                      <option value="相談">相談</option>
                      <option value="見積もり">見積もり</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">お問い合わせ内容 *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="お問い合わせ内容をご記入ください"
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        {/* スピナーアイコンなどを配置することが多い */}
                        送信中...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        送信する
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
