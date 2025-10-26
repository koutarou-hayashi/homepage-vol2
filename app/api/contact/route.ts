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
    
    // 2. 実際の処理を実装
    // メールの内容を作成
    const emailSubject = `【HPからのお問い合わせ】${data.inquiryType} - ${data.name}様`
    const emailBody = `
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

    // 2. メール送信サービスの設定と実行（例: Nodemailerの場合）
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // またはSMTPサーバー情報
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: emailSubject,
      text: emailBody,
    })

    // 3. 処理成功のレスポンスを返す
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