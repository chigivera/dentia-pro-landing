import { NextResponse } from "next/server"

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxuzJWWoPL_k59V-nUzdM_bWeLlCc3USSZJUrMiRAVmNuTEhBRHm8pn80ycBTs8-gm_AA/exec"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })

    if (!response.ok) {
      throw new Error("Google Apps Script returned an error")
    }

    const data = await response.text()
    return NextResponse.json({ message: data }, { status: 200 })
  } catch (error) {
    console.error("Error forwarding request:", error)
    return NextResponse.json({ error: "Error forwarding request" }, { status: 500 })
  }
}

