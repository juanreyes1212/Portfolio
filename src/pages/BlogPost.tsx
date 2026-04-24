import { motion } from "framer-motion";
import { Clock, Calendar, User } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/portfolio/PageLayout";
import BackLink from "@/components/portfolio/BackLink";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/portfolioData";
import { getCategoryColor } from "@/lib/colors";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <PageLayout showSkipToContent>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          author: { "@type": "Person", name: "Juan Reyes" },
          url: `https://juanreyes.dev/blog/${post.slug}`,
        }}
      />
      <main id="main-content" className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <BackLink to="/blog" label="Back to Blog" />
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <Badge variant="outline" className={`${getCategoryColor(post.category)} mb-4`}>
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" aria-hidden="true" />
                <span>Juan Reyes</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden mb-12"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-none mb-12"
          >
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="glass rounded-2xl p-8 mb-8">
              <MarkdownRenderer content={post.content} />
            </div>
          </motion.article>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-16"
          >
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <div className="p-6">
                      <Badge variant="outline" className={`${getCategoryColor(relatedPost.category)} mb-3`}>
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>
    </PageLayout>
  );
};

export default BlogPost;
