export async function listVoices() {
  const response = await fetch('/api/voices', { cache: 'no-store' })
  if (!response.ok) throw new Error('Unable to load voices')
  const data = await response.json()
  return data.voices || []
}

export async function createVoice(payload) {
  const response = await fetch('/api/voices', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) throw new Error('Unable to create voice')
  const data = await response.json()
  return data.voice
}
