"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "ホーム", href: "/#home" },
  { name: "お知らせ", href: "/#news" },
  { name: "会社案内", href: "/#about" },
  { name: "業務内容", href: "/#services" },
  { name: "アクセス", href: "/#access" },
  { name: "お問い合わせ", href: "/#contact" },
  { name: "求人案内", href: "/#recruit" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="block">
            <img
              src="logo.png"
              alt="株式会社 測天"
              className={`h-8 md:h-10 transition-all duration-300 ${isScrolled ? "brightness-100" : "brightness-0 invert"
                }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${isScrolled
                    ? "text-foreground/80 hover:text-foreground hover:bg-emerald-500 hover:text-white"
                    : "text-white/90 hover:text-white hover:bg-emerald-500/20 hover:backdrop-blur-sm hover:border-emerald-400/60"
                  }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden transition-colors duration-300 ${isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}