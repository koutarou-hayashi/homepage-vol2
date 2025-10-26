import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// POSTリクエストを処理する関数
export async function POST(request: Request) {
  try {
    // フォームデータ（JSON形式）を解析
    const data = await request.json();

    // 1. データのバリデーション（必須）
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { message: '必須項目が不足しています。' },
        { status: 400 }
      );
    }
    
    // 2. メールの内容を作成

    // A. 自社（管理者）宛の通知メール
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
    // B. 顧客（送信者）宛の自動返信メール
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
      E-mail: sokuten8843koutarou@gmail.com
    `

    // 3. メール送信サービスの設定（両方のメールに使用）
    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    // 4. 【実行1】自社（管理者）宛に通知メールを送信
    // to: process.env.EMAIL_USER は、通常、自社の受信アドレスに設定されます
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // または COMPANY_EMAILなどの定数
      subject: adminSubject,
      text: adminBody,
    })

    // 5. 【実行2】顧客（送信者）宛に自動返信メールを送信
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // 送信元は自社のSMTPアカウント
      to: data.email, // ★★★ 顧客のメールアドレスに設定 ★★★
      subject: autoReplySubject,
      text: autoReplyBody,
    })


    // 6. 処理成功のレスポンスを返す
    return NextResponse.json(
      { message: 'お問い合わせを正常に受け付けました。' },
      { status: 200 }
    );

  } catch (error) {
    console.error("お問い合わせAPIエラー:", error);
    // エラー時も顧客にはメールが届かないため、送信失敗のレスポンスを返す
    return NextResponse.json(
      { message: 'サーバーエラーが発生しました。' },
      { status: 500 }
    );
  }
}