export default function A7() {
  return (
    <>
      <h1>7. A customer, new to Next.js and Vercel, asks about overages regarding serverless function execution. What would be the best way to help mitigate this? Feel free to use AI to help supplement your answer, but only use AI to help guide your answer and put it into your own words. You can help the customer by providing Vercel or Next.js resources if necessary.</h1>
      <br />
      <p>Hi Mr. Customer,</p>
 <br />
      <p>Trust you are well!</p>
 <br />
      <p>Thanks for reaching out with your query. Please find my response to the query around overages regarding serverless function below:</p>
 <br />
      <p>To reduce the risk of exceeding serverless function execution limits on Vercel, there are various tactics you can employ:</p>

      <ul>
          <li>Opt for Static Site Generation (SSG): If your page can utilize SSG instead of Server-Side Rendering (SSR), it is advisable to opt for this method to minimize the use of Serverless Executions. The page will be generated only once at build-time, and cannot be regenerated or have its content altered post-build. By eliminating the need for a function to run for each page request, as is the case with uncached SSR pages, the Serverless Executions for SSG pages amount to 0 GB-Hrs.</li>
 <br />
          <li>Implement Incremental Static Regeneration (ISR): In cases where a specific page requires periodic regeneration due to dynamic data, ISR can help reduce the number of Serverless Executions carried out by your application. This approach involves statically generating pages and caching them in the Vercel CDN. A Serverless Function will be activated at set intervals to refresh the cache content.</li>
 <br />
          <li>Utilize CDN Caching and stale-while-revalidate: If ISR or SSG are not feasible options, caching headers can be used to store SSR pages in the Vercel CDN. The stale-while-revalidate header is particularly effective, allowing for the serving of outdated content while the cache is being updated in the background.</li>
 <br />
          <li>Adjust Your Serverless Functions: Customize the region, memory, and duration of your Functions. For instance, if your function is heavily reliant on I/O operations and frequently waits on upstream providers, reducing the allocated memory size can help decrease the total GB-Hrs consumed by your deployment.</li>
      </ul>
 <br />
      <p>Keep in mind that the CPU power of your Serverless Executions is directly influenced by the memory configuration of your functions. Therefore, for functions that are computationally intensive, reducing the memory size is not recommended.</p>
 <br />
      <p>For more detailed information, you can refer to the following resources:</p>

      <ul>
          <li>Vercel&rsquo;s guide on managing and optimizing usage</li>
          <li>Next.js documentation on data fetching</li>
          <li>Vercel&rsquo;s guide on configuring Serverless Functions</li>
      </ul>
 <br />
      <p>We can further assist you if you can share specific use case. Feel free to reach out for any more queries that you might have.</p>
 <br />
      <p>Hoping this is in order.</p>
 <br />
      <p>Best Regards,<br />Vikesh Sukheja<br />Customer Success Manager, Vercel</p>
    </>
  );
}
