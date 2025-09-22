export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/thank-you"
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
