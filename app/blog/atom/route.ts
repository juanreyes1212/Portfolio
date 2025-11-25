import { getAllBlogPosts } from "@/lib/projects"

export async function GET() {
  const baseUrl = "https://jdrey.dev"
  const blogPosts = getAllBlogPosts()

  // Sort posts by date (newest first)
  const sortedPosts = blogPosts.sort((a, b) => new Date(b.post.date).getTime() - new Date(a.post.date).getTime())

  const atomXml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Juan Reyes - Blog</title>
  <subtitle>Insights on web development, woodworking adventures, gaming discoveries, and thoughts on creativity and craftsmanship.</subtitle>
  <link href="${baseUrl}/blog/atom" rel="self"/>
  <link href="${baseUrl}/blog"/>
  <id>${baseUrl}/blog</id>
  <updated>${new Date().toISOString()}</updated>
  <author>
    <name>Juan Reyes</name>
    <email>contact@jdrey.com</email>
    <uri>${baseUrl}</uri>
  </author>
  <icon>${baseUrl}/placeholder.svg?height=32&width=32&text=AJ</icon>
  <logo>${baseUrl}/placeholder.svg?height=144&width=144&text=AJ</logo>
  ${sortedPosts
      .map(
        ({ slug, post }) => `
  <entry>
    <title><![CDATA[${post.title}]]></title>
    <link href="${baseUrl}/blog/${slug}"/>
    <id>${baseUrl}/blog/${slug}</id>
    <updated>${new Date(post.lastModified).toISOString()}</updated>
    <published>${new Date(post.date).toISOString()}</published>
    <summary type="html"><![CDATA[${post.excerpt}]]></summary>
    <content type="html"><![CDATA[${post.content}]]></content>
    <author>
      <name>Juan Reyes</name>
      <email>contact@jdrey.com</email>
    </author>
    <category term="${post.category}" label="${post.category}"/>
    ${post.tags.map((tag) => `<category term="${tag}" label="${tag}"/>`).join("")}
    ${post.image ? `<link rel="enclosure" href="${post.image.startsWith("http") ? post.image : baseUrl + post.image}" type="image/jpeg"/>` : ""}
  </entry>`,
      )
      .join("")}
</feed>`

  return new Response(atomXml, {
    headers: {
      "Content-Type": "application/atom+xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
