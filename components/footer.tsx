export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">株式会社 測天</h3>
            <p className="text-sm text-primary-foreground/80">
              〒100-0001
              <br />
              東京都千代田区千代田1-1-1
              <br />
              サンプルビル10F
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  ホーム
                </a>
              </li>
              <li>
                <a href="#news" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  お知らせ
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  会社案内
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  業務内容
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#access"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  アクセス
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  お問い合わせ
                </a>
              </li>
              <li>
                <a
                  href="#recruit"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  求人案内
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 株式会社 測天 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
