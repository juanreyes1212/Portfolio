import { useState, useMemo, useDeferredValue } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/portfolio/PageLayout";
import PageHeader from "@/components/portfolio/PageHeader";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/portfolioData";
import { getCategoryColor } from "@/lib/colors";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const deferredQuery = useDeferredValue(searchQuery);
  const prefersReducedMotion = useReducedMotion();

  const fade = (delay = 0) =>
    prefersReducedMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay },
        };

  const categories = useMemo(() => {
    const cats = new Set(blogPosts.map((post) => post.category));
    return Array.from(cats);
  }, []);

  const filteredPosts = useMemo(() => {
    const q = deferredQuery.toLowerCase();
    return blogPosts.filter((post) => {
      const matchesSearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));

      const matchesCategory = !selectedCategory || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [deferredQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <PageLayout>
      <SEO
        title="Blog & Insights"
        description="Technical articles on frontend development, React architecture, testing, accessibility, and leadership by Juan Reyes."
        canonical="/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Juan Reyes Blog",
          url: "https://juanreyes.dev/blog",
          author: { "@type": "Person", name: "Juan Reyes" },
        }}
      />
      <main id="main-content" className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <PageHeader
            backTo="/"
            backLabel="Back to Home"
            title="Blog &"
            titleHighlight="Insights"
            description="Technical articles on frontend development, architecture, leadership, and industry trends."
          />

          {/* Search and Filter */}
          <motion.div {...fade(0.1)} className="mb-12 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
                aria-label="Search articles"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Filter by:</span>
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className="text-xs"
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
              {(searchQuery || selectedCategory) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs text-muted-foreground"
                >
                  Clear filters
                </Button>
              )}
            </div>

            {/* Results count */}
            <p className="text-sm text-muted-foreground" aria-live="polite">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </motion.div>

          {filteredPosts.length === 0 ? (
            <motion.div
              {...(prefersReducedMotion ? { initial: false } : { initial: { opacity: 0 }, animate: { opacity: 1 } })}
              className="text-center py-16"
            >
              <p className="text-xl text-muted-foreground mb-2">
                {searchQuery
                  ? <>No articles match <span className="text-foreground">"{searchQuery}"</span></>
                  : "No articles found"}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Try a different keyword or clear the filters.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear filters
              </Button>
            </motion.div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <motion.article
                  {...fade()}
                  className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 mb-12 relative"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-80 overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 lg:block hidden" aria-hidden="true" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent lg:hidden" aria-hidden="true" />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>

                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className={getCategoryColor(featuredPost.category)}>
                          {featuredPost.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          {featuredPost.readTime}
                        </div>
                      </div>

                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                        <Link
                          to={`/blog/${featuredPost.slug}`}
                          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm before:absolute before:inset-0 before:content-['']"
                        >
                          {featuredPost.title}
                        </Link>
                      </h2>

                      <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                        <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                          <span className="text-sm font-medium">Read Article</span>
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )}

              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    {...(prefersReducedMotion
                      ? { initial: false }
                      : {
                          initial: { opacity: 0, y: 30 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.5, delay: index * 0.1 },
                        })}
                    className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col relative"
                  >
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm before:absolute before:inset-0 before:content-['']"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <div className="flex gap-2">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </PageLayout>
  );
};

export default Blog;
