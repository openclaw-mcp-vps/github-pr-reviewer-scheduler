export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GitHub Integration
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-assign PR reviewers based on{" "}
          <span className="text-[#58a6ff]">expertise &amp; availability</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop manually hunting for the right reviewer. Connect your GitHub repo, define team expertise profiles, and let smart scheduling handle the rest — timezone-aware, workload-balanced.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started for $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { title: "Expertise Matching", desc: "Maps file paths and languages to team member skill profiles automatically." },
          { title: "Timezone Aware", desc: "Only assigns reviewers who are currently in working hours." },
          { title: "Workload Balanced", desc: "Tracks open review requests and distributes load fairly across the team." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left text-sm text-[#c9d1d9] space-y-2 mb-8">
            {[
              "Unlimited repositories",
              "Up to 25 team members",
              "GitHub webhook integration",
              "Expertise profile builder",
              "Timezone &amp; workload balancing",
              "Email &amp; Slack notifications"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to GitHub?",
              a: "You install a GitHub webhook on your repository. When a PR is opened or updated, the webhook fires and our service analyzes the diff, matches expertise, and assigns reviewers via the GitHub API."
            },
            {
              q: "How are expertise profiles built?",
              a: "You define profiles manually or import from GitHub contribution history. Each profile maps team members to languages, directories, and topics they are skilled in."
            },
            {
              q: "What happens if no reviewer is available?",
              a: "The system falls back to the next best available reviewer and notifies the team. You can also configure a default fallback reviewer for each repository."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} PR Reviewer Scheduler. All rights reserved.
      </footer>
    </main>
  );
}
