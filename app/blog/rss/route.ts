import { getAllBlogPosts } from "@/lib/projects"

export async function GET() {
  const baseUrl = "https://jdrey.dev"
  const blogPosts = getAllBlogPosts()

  // Sort posts by date (newest first)
  const sortedPosts = blogPosts.sort((a, b) => new Date(b.post.date).getTime() - new Date(a.post.date).getTime())

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Juan Reyes - Blog</title>
    <description>Insights on web development, woodworking adventures, gaming discoveries, and thoughts on creativity and craftsmanship.</description>
    <link>${baseUrl}/blog</link>
    <language>en-US</language>
    <managingEditor>hello.digi.stream@gmail.com (Juan Reyes)</managingEditor>
    <webMaster>contact@email.com (Juan Reyes)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/rss" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/placeholder.svg?height=144&width=144&text=AJ</url>
      <title>Juan Reyes - Blog</title>
      <link>${baseUrl}/blog</link>
      <width>144</width>
      <height>144</height>
    </image>
    ${sortedPosts
      .map(
        ({ slug, post }) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
      <link>${baseUrl}/blog/${slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>contact@email.com (Juan Reyes)</author>
      <category><![CDATA[${post.category}]]></category>
      ${post.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join("")}
      ${post.image ? `<enclosure url="${post.image.startsWith("http") ? post.image : baseUrl + post.image}" type="image/jpeg"/>` : ""}
    </item>`,
      )
      .join("")}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
