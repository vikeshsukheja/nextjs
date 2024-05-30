export default function MyResponse() {
  return (
    <div>
      <h4>
        A customer has a project on Vercel and they want to redirect the /blog
        path to another website. Write a reply to the customer.
      </h4>
      <p>Hi Mr. Customer,</p>
      <p>Trust you are well.</p>
      <p>Please find my response to your query below:</p>
      <p>
        You have the ability to redirect the <code>/blog</code> path of your
        main application to a different website by utilizing the{" "}
        <code>rewrites()</code> function in your <code>next.config.js</code>{" "}
        file. Here’s an example how to do this:
      </p>
      <pre>
        <code>{`module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://example.com/blog',
      },
      {
        source: '/blog/:vercel',
        destination: 'https://example.com/blog/:vercel', // Matched parameters can be used in the destination
      },
    ]
  },
}`}</code>
      </pre>
      <p>
        In this example, when a request is made to <code>/blog</code> on your
        main app, it will be redirected to the specified URL of the external
        website. Likewise, a request to <code>/blog/:vercel</code> (where{" "}
        <code>:vercel</code> represents any value) will also be redirected
        accordingly to the external website's URL.
      </p>
      <p>
        You can find more about rewrites on this link:{" "}
        <a href="https://vercel.com/docs/edge-network/rewrites">
          https://vercel.com/docs/edge-network/rewrites
        </a>
      </p>
      <p>
        Additional Sources that might be helpful:
        <br />
        <a href="https://vercel.com/docs/edge-network/redirects">
          https://vercel.com/docs/edge-network/redirects
        </a>
      </p>
      <p>
        Kindly let me know if this was helpful. If not, I will be happy to set
        up a call with my team, who can further help you with this query.
      </p>
      <p>Best Regards,</p>
      <p>Vikesh,</p>
      <p>Customer Success Manager, Vercel</p>
    </div>
  );
}
