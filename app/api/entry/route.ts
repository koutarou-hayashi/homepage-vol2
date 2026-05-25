import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Resendの初期化
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // 1. データのバリデーション（必須項目のチェック）
        if (!data.name || !data.furigana || !data.birthDate || !data.zipCode || !data.address || !data.email || !data.phone) {
            return NextResponse.json(
                { message: '必須項目が不足しています。' },
                { status: 400 }
            );
        }

        // 2. メールの内容を作成

        // A. 自社（採用担当者）宛の通知メール
        const adminSubject = `【HP求人エントリー】${data.name}様より応募がありました`
        const adminBody = `
      ホームページより求人エントリーがありました。
      内容を確認し、選考へのご案内をお願いします。
      ----------------------------------------
      【応募者情報】
      お名前: ${data.name}（${data.furigana}）
      生年月日: ${data.birthDate}
      郵便番号: ${data.zipCode}
      現住所: ${data.address}
      メールアドレス: ${data.email}
      携帯番号: ${data.phone}

      【保有資格・自己PRなど】
      ${data.qualifications || '記入なし'}
      ----------------------------------------
    `

        // B. 応募者（送信者）宛の自動返信メール
        const autoReplySubject = `【株式会社 測天】求人へのエントリーを受け付けました`
        const autoReplyBody = `
      ${data.name}様

      この度は、株式会社 測天の求人にご応募（エントリー）いただき、誠にありがとうございます。
      以下の内容にて、エントリーを受け付けいたしました。

      今後の選考フロー（書類選考や面接の日程調整など）につきましては、
      内容を確認後、採用担当者より改めてご連絡させていただきます。

      今しばらくお待ちいただけますようお願い申し上げます。

      ----------------------------------------
      ◆ご応募内容の確認◆

      お名前: ${data.name}（${data.furigana}）
      生年月日: ${data.birthDate}
      郵便番号: ${data.zipCode}
      現住所: ${data.address}
      メールアドレス: ${data.email}
      携帯番号: ${data.phone}

      保有資格・自己PRなど:
      ${data.qualifications || '記入なし'}
      ----------------------------------------

      ※このメールは自動送信されています。
      
      株式会社 測天
      住所: 〒507-0053 岐阜県多治見市若松町2-5
      電話: 0572-44-9431
      E-mail: recruit@sokuten.jp
    `

        // 3. 【実行1】自社（採用担当窓口）宛に通知メールを送信
        await resend.emails.send({
            from: 'recruit@sokuten.jp', // 💡 recruit に変更
            to: 'recruit@sokuten.jp',   // 💡 採用用の共有メールボックスで受信
            subject: adminSubject,
            text: adminBody,
        })

        // 4. 【実行2】応募者宛に自動返信メールを送信
        await resend.emails.send({
            from: 'recruit@sokuten.jp', // 💡 送信元を recruit に変更
            to: data.email,
            subject: autoReplySubject,
            text: autoReplyBody,
        })

        return NextResponse.json(
            { message: 'エントリーを受け付けました。' },
            { status: 200 }
        );

    } catch (error) {
        console.error("採用エントリーAPIエラー:", error);
        return NextResponse.json(
            { message: 'サーバーエラーが発生しました。' },
            { status: 500 }
        );
    }
}