import LegalPage from '@/components/LegalPage'

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>This application is a SaaS starter for AI voice agent workflows. You are responsible for provider configuration, consent, call recording notices, and lawful use.</p>
      <p>Production deployments should include rate limits, audit logs, abuse monitoring, and human escalation paths.</p>
    </LegalPage>
  )
}
