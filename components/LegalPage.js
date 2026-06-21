import Link from 'next/link'

export default function LegalPage({ title, children }) {
  return (
    <main className="container-wide py-10">
      <Link href="/" className="text-sm font-semibold text-brand-200">Back to VoiceOps AI</Link>
      <article className="surface mt-6 max-w-3xl p-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="prose prose-invert mt-5 max-w-none text-sm leading-7 text-muted-foreground">
          {children}
        </div>
      </article>
    </main>
  )
}
