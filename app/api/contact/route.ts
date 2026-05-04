import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, unitType, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "الاسم ورقم الهاتف مطلوبين" },
        { status: 400 }
      );
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email || "N/A");
    formData.append("unitType", unitType || "غير محدد");
    formData.append("message", message || "استفسار عن مشروع PLATÓ - Artal Developments");
    formData.append("_subject", `🏠 استفسار جديد - PLATÓ Artal | ${name}`);
    formData.append("_cc", "abdoo.elrean@gmail.com");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    const response = await fetch(
      "https://formsubmit.co/ajax/apkzoz85@gmail.com",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "حدث خطأ في إرسال الرسالة" },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "حدث خطأ غير متوقع" },
      { status: 500 }
    );
  }
}
