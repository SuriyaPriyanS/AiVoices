const logos = ['FrontDesk Co', 'BayLine Auto', 'Mesa Table', 'North Clinic', 'Urban Dental']

export default function SocialProof() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="container-wide flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-muted-foreground">Built for teams that miss revenue when calls go unanswered</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-foreground/70">
          {logos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
