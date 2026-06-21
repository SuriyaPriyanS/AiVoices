const API_BASE_URL = process.env.NEXT_PUBLIC_VOICE_API_URL || 'http://localhost:8000'

export async function checkVoiceApiHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, { cache: 'no-store' })
    if (!response.ok) return { ok: false, status: response.status }
    return { ok: true, ...(await response.json()) }
  } catch {
    return { ok: false, status: 'offline' }
  }
}

export async function synthesizePreview(payload) {
  return {
    id: crypto.randomUUID(),
    status: 'queued',
    apiBaseUrl: API_BASE_URL,
    payload,
  }
}
