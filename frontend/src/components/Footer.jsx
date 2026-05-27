export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="/" className="flex items-center gap-3">
            <img
              src="/images/Aloe.jpg"
              alt="AloeGreen Logo"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-green-400/30"
            />

            <span className="flex flex-col">
              <span className="text-xl font-bold text-white">AloeGreen</span>
              <small className="text-xs text-green-300">
                Research-backed smart agriculture
              </small>
            </span>
          </a>

          <p className="mt-5 text-sm leading-6 text-gray-400">
            A multi-page academic website for a final-year research project on
            AI-IoT supported Aloe vera cultivation.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Pages</h4>

          <div className="space-y-3 text-sm">
            <p>
              <a href="/" className="hover:text-green-300">
                Home
              </a>
            </p>
            <p>
              <a href="/domain" className="hover:text-green-300">
                Domain
              </a>
            </p>
            <p>
              <a href="/milestones" className="hover:text-green-300">
                Milestones
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Resources</h4>

          <div className="space-y-3 text-sm">
            <p>
              <a href="/documents" className="hover:text-green-300">
                Documents
              </a>
            </p>
            <p>
              <a href="/presentations" className="hover:text-green-300">
                Presentations
              </a>
            </p>
            <p>
              <a href="/about" className="hover:text-green-300">
                About Us
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Contact</h4>

          <div className="space-y-3 text-sm">
            <p>
              <a
                href="mailto:aloegreen166@gmail.com"
                className="hover:text-green-300"
              >
                aloegreen166@gmail.com
              </a>
            </p>
            <p>+94 77 335 5331</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-sm text-gray-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <span>© 2026 AloeGreen. All rights reserved.</span>
          <span>Designed for university project submission.</span>
        </div>
      </div>
    </footer>
  );
}