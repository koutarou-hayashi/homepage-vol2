"use client"

import { useState, useEffect } from 'react'
import { Header } from "@/components/header"
import { HelloSection } from "@/components/hello-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { AccessSection } from "@/components/access-section"
import { ContactSection } from "@/components/contact-section"
import { RecruitSection } from "@/components/recruit-section"
import { Footer } from "@/components/footer"
import { VideoSplash } from "@/components/video-splash"

export default function Home() {
  // localStorage をチェックして初回訪問か判定
  const [showIntro, setShowIntro] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro")
    if (!hasSeenIntro) {
      setShowIntro(true)
    }
    setIsReady(true)
  }, [])

  useEffect(() => {
    if (!showIntro) return
    const timer = setTimeout(() => {
      setShowIntro(false)
      localStorage.setItem("hasSeenIntro", "true")
    }, 7000)
    return () => clearTimeout(timer)
  }, [showIntro])

  const handleSkip = () => {
    setShowIntro(false)
    localStorage.setItem("hasSeenIntro", "true")
  }

  // ロード中は何も表示しない（ちらつき防止）
  if (!isReady) return null

  if (showIntro) {
    return <VideoSplash onSkip={handleSkip} />
  }

  return (
    <>
      <Header />
      <HelloSection />
      {/* <NewsSection /> */}
      <AboutSection />
      <ServicesSection />
      <AccessSection />
      <ContactSection />
      <RecruitSection />
      <Footer />
    </>
  )
}