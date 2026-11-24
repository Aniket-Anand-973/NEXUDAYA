import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

const DEMO_EMAIL = process.env.DEMO_STUDENT_EMAIL || "student@nexudaya.com";
const DEMO_PASSWORD = process.env.DEMO_STUDENT_PASSWORD || "Student@123";

function sign(value: string) {
  const secret = process.env.AUTH_SECRET || "local-development-only-change-this-secret";
  return crypto.createHmac("sha256", secret).update(value).digest("base64url");
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      email.trim().toLowerCase() !== DEMO_EMAIL.toLowerCase() ||
      password !== DEMO_PASSWORD
    ) {
      return NextResponse.json(
        { error: "Invalid email or password. Please check your credentials." },
        { status: 401 },
      );
    }

    const payload = Buffer.from(
      JSON.stringify({
        sub: "demo-student",
        email: DEMO_EMAIL,
        role: "STUDENT",
        exp: Date.now() + 8 * 60 * 60 * 1000,
      }),
    ).toString("base64url");
    const session = `${payload}.${sign(payload)}`;

    const response = NextResponse.json({ success: true });
    response.cookies.set("nexudaya_session", session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 8 * 60 * 60,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid login request." }, { status: 400 });
  }
}
