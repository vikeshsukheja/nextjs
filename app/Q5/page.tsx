export default function MyResponse() {
  return (
    <div>
      <p>5. Imagine that the customer from Question 4 responds with the following email.</p>
      <p>“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so why don&apos;t you just fix it for me instead of asking me questions.”</p>
      <p>Write a reply to the customer addressing the concerns raised.</p>

      <p>Hi Mr. Customer,</p>

      <p>Good Afternoon!</p>

      <p>I can understand it can be annoying when things don’t work as expected. But be rest assured we will provide you complete support to resolve the query.</p>

      <p>Based on your responses and the status code you are receiving; it appears it is an issue with the backend server enforcing a trailing slash. The solution can be found in the link below:</p>
      <p><a href="https://nextjs.org/docs/api-reference/next.config.js/rewrites#rewriting-to-an-external-url">https://nextjs.org/docs/api-reference/next.config.js/rewrites#rewriting-to-an-external-url</a></p>

      <p>Rewrites allow you to rewrite to an external url. This is especially useful for incrementally adopting Next.js. The following is an example rewrite for redirecting the /blog route of your main app to an external site.</p>

      <pre><code>{`module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://example.com/blog',
      },
      {
        source: '/blog/:slug',
        destination: 'https://example.com/blog/:slug', // Matched parameters can be used in the destination
      },
    ]
  },
}`}</code></pre>

      <p>If you&apos;re using trailingSlash: true, you also need to insert a trailing slash in the source parameter. If the destination server is also expecting a trailing slash it should be included in the destination parameter as well.</p>

      <pre><code>{`module.exports = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/blog/',
        destination: 'https://example.com/blog/',
      },
      {
        source: '/blog/:path*/',
        destination: 'https://example.com/blog/:path*/',
      },
    ]
  },
}`}</code></pre>

      <p>Summing up:</p>

      <ol>
        <li>trailingSlash: true prevents the second problem of 308 from nextjs.</li>
        <li>The source and destination both end in /, e.g. /:path*/.</li>
      </ol>

      <p>Do let us know if this still doesn’t help you? I would be happy to assign an Engineer to get on a call to guide you. Awaiting your response.</p>

      <p>Best Regards,</p>
      <p>Vikesh</p>
      <p>Customer Success Manager, Vercel</p>
    </div>
  );
}
