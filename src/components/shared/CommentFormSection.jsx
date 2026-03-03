const inputClassName =
  "w-full rounded-xl border border-zinc-600 bg-zinc-900/70 px-4 py-3 text-zinc-100 placeholder-zinc-500 transition focus:border-brand-violet focus:outline-none focus:ring-2 focus:ring-brand-violet/40";

const labelClassName = "mb-2 block text-sm font-semibold text-zinc-300";

export default function CommentFormSection({
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <section className="py-12 px-4 sm:px-6 text-white">
      <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 shadow-lg sm:p-8 md:px-10 md:py-12">
        <h1 className="text-3xl font-bold text-zinc-100 sm:text-4xl">Leave a Reply</h1>
        <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-zinc-400">
          Your email address will not be published. Required fields are marked{" "}
          <span className="text-brand-dangerStrong">*</span>
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-7">
          <div>
            <label htmlFor="message" className={labelClassName}>
              Comment <span className="text-brand-dangerStrong">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className={`${inputClassName} resize-y`}
              placeholder="Write your comment..."
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div>
              <label htmlFor="name" className={labelClassName}>
                Name <span className="text-brand-dangerStrong">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClassName}
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClassName}>
                Email <span className="text-brand-dangerStrong">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClassName}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className={labelClassName}>
                Website <span className="text-brand-dangerStrong">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={inputClassName}
                placeholder="https://your-site.com"
                required
              />
            </div>
          </div>

          <label htmlFor="newsletter" className="flex items-center gap-3 text-zinc-200">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="h-4 w-4 rounded border-zinc-500 bg-zinc-900 text-brand-violet focus:ring-2 focus:ring-brand-violet/40"
            />
            <span className="text-base font-medium">Send me your Newsletter</span>
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-brand-violet px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-violetStrong focus:outline-none focus:ring-2 focus:ring-brand-violet/40"
          >
            Post Comment
          </button>
        </form>
      </div>
    </section>
  );
}
