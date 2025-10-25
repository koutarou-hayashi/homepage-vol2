"use client"

import { useState, useEffect } from 'react'
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { AccessSection } from "@/components/access-section"
import { ContactSection } from "@/components/contact-section"
import { RecruitSection } from "@/components/recruit-section"
import { Footer } from "@/components/footer"
import { VideoSplash } from "@/components/video-splash"

export default function Home() {
  const [showIntro, setShowIntro] = useState<boolean>(true);

  // ページロード時に一度だけ実行
  useEffect(() => {
    // 7秒後に showIntro を false に設定
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 7000);

    // クリーンアップ関数: コンポーネントがアンマウントされる前にタイマーを解除
    return () => clearTimeout(timer);
  }, []); 

  // スキップハンドラ
  const handleSkip = () => setShowIntro(false);

  // イントロ動画表示モード
  if (showIntro) {
    return <VideoSplash onSkip={handleSkip} />;
  }
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NewsSection />
      <AboutSection />
      <ServicesSection />
      <AccessSection />
      <ContactSection />
      <RecruitSection />
      <Footer />
    </main>
  )
}
