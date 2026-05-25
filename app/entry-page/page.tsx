"use client"
import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

export default function EntryPage() {
    const [formData, setFormData] = useState({
        name: "",
        furigana: "",
        birthDate: "",
        zipCode: "",
        address: "",
        email: "",
        phone: "",
        qualifications: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (isSubmitting) return

        setIsSubmitting(true)
        try {
            const apiEndpoint = '/api/entry';

            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("採用応募を受け付けました。担当者より折り返しご連絡いたします。");

                setFormData({
                    name: "",
                    furigana: "",
                    birthDate: "",
                    zipCode: "",
                    address: "",
                    email: "",
                    phone: "",
                    qualifications: "",
                });
            } else {
                console.error("Submission failed:", response.statusText);
                alert("送信に失敗しました。時間をおいて再度お試しいただくか、お電話にてご連絡ください。");
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("通信エラーが発生しました。インターネット接続を確認し、再度お試しください。");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="min-h-screen flex flex-col bg-background">
            {/* メインコンテンツエリア */}
            <div className="flex-grow max-w-2xl mx-auto py-12 px-4 w-full">
                <h1 className="text-3xl font-bold mb-8 text-center">採用エントリーフォーム</h1>
                <Card>
                    <CardContent className="p-8">
                        {/* space-y-6 で各項目を等間隔に縦並び */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* 1. 氏名 */}
                            <div className="space-y-2">
                                <Label htmlFor="name">氏名 *</Label>
                                <Input
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="山田 太郎"
                                />
                            </div>

                            {/* 2. 氏名（ふりがな） */}
                            <div className="space-y-2">
                                <Label htmlFor="furigana">氏名（ふりがな） *</Label>
                                <Input
                                    id="furigana"
                                    required
                                    value={formData.furigana}
                                    onChange={(e) => setFormData({ ...formData, furigana: e.target.value })}
                                    placeholder="やまだ たろう"
                                />
                            </div>

                            {/* 3. 生年月日 */}
                            <div className="space-y-2">
                                <Label htmlFor="birthDate">生年月日 *</Label>
                                <Input
                                    id="birthDate"
                                    type="date"
                                    required
                                    value={formData.birthDate}
                                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                                />
                            </div>

                            {/* 4. 郵便番号 */}
                            <div className="space-y-2">
                                <Label htmlFor="zipCode">郵便番号 *</Label>
                                <Input
                                    id="zipCode"
                                    required
                                    value={formData.zipCode}
                                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                                    placeholder="123-4567"
                                />
                            </div>

                            {/* 5. 現住所 */}
                            <div className="space-y-2">
                                <Label htmlFor="address">現住所 *</Label>
                                <Input
                                    id="address"
                                    required
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    placeholder="岐阜県多治見市若松町2-5"
                                />
                            </div>

                            {/* 6. メールアドレス */}
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

                            {/* 7. 携帯番号 */}
                            <div className="space-y-2">
                                <Label htmlFor="phone">携帯番号 *</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="090-1234-5678"
                                />
                            </div>

                            {/* 8. フリーテキスト */}
                            <div className="space-y-2">
                                <Label htmlFor="qualifications">保有資格・自己PRなど</Label>
                                <Textarea
                                    id="qualifications"
                                    value={formData.qualifications}
                                    onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                                    placeholder="所持している資格（例: 普通自動車免許、測量士、測量士補など）や、経歴・自己PRがあればご記入ください。"
                                    rows={6}
                                />
                            </div>

                            {/* 送信ボタン */}
                            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    "送信中..."
                                ) : (
                                    <>
                                        <Send className="h-4 w-4 mr-2" />
                                        応募する
                                    </>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}