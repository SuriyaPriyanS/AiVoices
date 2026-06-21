export function getDemoProfile() {
  return {
    id: 'demo-workspace',
    workspaceName: 'VoiceOps Demo Workspace',
    plan: 'Growth',
    role: 'Owner',
  }
}

export async function getCurrentProfile(supabase) {
  if (!supabase) return getDemoProfile()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return getDemoProfile()

  return {
    id: user.id,
    workspaceName: user.user_metadata?.workspace_name || 'VoiceOps Workspace',
    plan: 'Launch',
    role: 'Owner',
  }
}
