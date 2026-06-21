export async function createAgentDraft(payload) {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) throw new Error('Unable to create agent draft')
  return response.json()
}

export function formatConversationSummary(conversation) {
  return `${conversation.industry}: ${conversation.intent} -> ${conversation.outcome}`
}
