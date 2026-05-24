// API部分 (src/app/api/contact/route.ts など)
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Resendの初期化（環境変数からAPIキーを読み込み）
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. データのバリデーション
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { message: '必須項目が不足しています。' },
        { status: 400 }
      );
    }
    
    // 2. メールの内容を作成
    const adminSubject = `【HPからのお問い合わせ】${data.inquiryType} - ${data.name}様`
    const adminBody = `
      以下の内容でお問い合わせがありました。
      ----------------------------------------
      お名前: ${data.name}
      メールアドレス: ${data.email}
      電話番号: ${data.phone || 'なし'}
      お問い合わせ種類: ${data.inquiryType}
      お問い合わせ内容:
      ${data.message}
      ----------------------------------------
    `

    const autoReplySubject = `【株式会社 測天】お問い合わせを受け付けました`
    const autoReplyBody = `
      ${data.name}様

      この度は、株式会社 測天へお問い合わせいただき、誠にありがとうございます。
      以下の内容にて、お問い合わせを承りました。

      内容を確認後、改めて担当者よりご連絡させていただきますので、今しばらくお待ちください。

      ----------------------------------------
      ◆お問い合わせ概要◆

      お問い合わせ種類: ${data.inquiryType}
      お問い合わせ内容:
      ${data.message}
      
      ◆お客様情報◆
      お名前: ${data.name}
      メールアドレス: ${data.email}
      電話番号: ${data.phone || 'なし'}
      ----------------------------------------

      ※このメールは自動送信されています。
      
      株式会社 測天
      住所: 〒507-0053 岐阜県多治見市若松町2-5
      電話: 0572-44-9431
      E-mail: contact@sokuten.jp
    `

    // 3. 【実行1】自社（管理者）宛に通知メールを送信
    await resend.emails.send({
      from: 'contact@sokuten.jp', // 認証したドメインのアドレスを指定
      to: 'contact@sokuten.jp',   // 通知を受け取りたいアドレス
      subject: adminSubject,
      text: adminBody,
    })

    // 4. 【実行2】顧客（送信者）宛に自動返信メールを送信
    await resend.emails.send({
      from: 'contact@sokuten.jp', // 送信元
      to: data.email,             // 顧客のメールアドレス
      subject: autoReplySubject,
      text: autoReplyBody,
    })

    return NextResponse.json(
      { message: 'お問い合わせを正常に受け付けました。' },
      { status: 200 }
    );

  } catch (error) {
    console.error("お問い合わせAPIエラー:", error);
    return NextResponse.json(
      { message: 'サーバーエラーが発生しました。' },
      { status: 500 }
    );
  }
}