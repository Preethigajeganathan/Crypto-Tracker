import "./Blog.css";

const blogs = [
  {
    title: "What is Bitcoin?",
    desc: "Learn how Bitcoin works and why it is the world's most popular cryptocurrency.",
  },
  {
    title: "Understanding Blockchain",
    desc: "Discover the technology behind cryptocurrencies.",
  },
  {
    title: "Bull vs Bear Market",
    desc: "Understand market cycles and investor behavior.",
  },
];

const Blog = () => {
  return (
    <div className="blog">
      <h1>Crypto Blog</h1>
      <p className="subtitle">
        Learn more about cryptocurrency and blockchain.
      </p>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.desc}</p>

            <button>Read More →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;