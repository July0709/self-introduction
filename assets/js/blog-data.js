// Blog posts data
var blogPosts = [
  {
    id: 1,
    title: "2026年的第一天-从9.03km开始",
    category: "Life",
    date: "2026-01-01",
    author: "July",
    image: "assets/img/life-01.jpg",
    excerpt: "记录2026年的第一天，新的开始，新的希望...",
    content: `
      <p>新年的第一天去登高，于白云山摩星岭处拥抱整座城市。</p>
      <p>难忘是白云山入口处满墙铺满的三角梅，那好似象征白云的迎客建筑；</p>
      <img src="assets/img/life-01-01.jpg" alt="三角梅墙">

      <p>是有氧小径处白发老人草编飞鸟，耳旁的哨笛忽得演一番百鸟朝凤；</p>
      <img src="assets/img/life-01-04.jpg" alt="草编飞鸟">

      <p>去看山涧处兀自盛开的睡莲，去拥大风吹向我们的“我爱广州”的气球，似春风春草温柔的娇羞。</p>
      <img src="assets/img/life-01-03.jpg" alt="睡莲">

      <p>城市被白雾笼罩，又在风的吹动下，映照在我的心房。</p>
      <p>飞鸟点缀在烟雨花城图之上，古典凉亭同高楼齐色。</p>
      <img src="assets/img/life-01-05.jpg" alt="白雾笼罩的城市">

      <p>我在山顶，远眺这座城，心中满是对未来的期待与憧憬。</p>
    `
  },
  {
    id: 2,
    title: "Exploring Microbiome Research",
    category: "Research",
    date: "2025-01-10",
    author: "July",
    image: "assets/img/portfolio-2.jpg",
    excerpt: "Diving deep into the fascinating world of microbiome research and its implications for human health and disease treatment...",
    content: `
      <p>The human microbiome represents one of the most exciting frontiers in medical research. These trillions of microorganisms living in and on our bodies play crucial roles in our health.</p>

      <h2>What is the Microbiome?</h2>
      <p>The microbiome refers to all the microorganisms (bacteria, viruses, fungi, and other microbes) that live in a particular environment. In humans, our gut microbiome is particularly important.</p>

      <h2>Research Applications</h2>
      <p>Current research is exploring how the microbiome influences:</p>
      <ul>
        <li>Immune system function</li>
        <li>Mental health and mood</li>
        <li>Metabolic disorders</li>
        <li>Response to medications</li>
      </ul>

      <blockquote>
        "The microbiome is like a hidden organ that we're only beginning to understand." - Research Insight
      </blockquote>

      <h2>My Research Experience</h2>
      <p>Working in this field has opened my eyes to the complexity of biological systems and the importance of interdisciplinary collaboration.</p>
    `
  },
  {
    id: 3,
    title: "Web Design for Medical Projects",
    category: "Technology",
    date: "2025-01-05",
    author: "July",
    image: "assets/img/portfolio-3.jpg",
    excerpt: "How I combine my passion for medicine with web design skills to create user-friendly medical platforms like SMOOTH...",
    content: `
      <p>Combining medicine with technology has become increasingly important in modern healthcare. Through my work on the SMOOTH project, I've learned how good design can make medical information more accessible.</p>

      <h2>The SMOOTH Project</h2>
      <p>SMOOTH is a platform designed to streamline medical data visualization and make it more intuitive for healthcare professionals.</p>

      <h3>Design Principles</h3>
      <ul>
        <li><strong>Clarity:</strong> Medical information must be clear and unambiguous</li>
        <li><strong>Accessibility:</strong> Design should be inclusive and easy to navigate</li>
        <li><strong>Efficiency:</strong> Quick access to critical information saves lives</li>
        <li><strong>Reliability:</strong> Systems must be stable and trustworthy</li>
      </ul>

      <h2>Technologies Used</h2>
      <p>In building SMOOTH, we utilized modern web technologies including:</p>
      <ul>
        <li>Bootstrap for responsive design</li>
        <li>JavaScript for interactive features</li>
        <li>Data visualization libraries</li>
      </ul>

      <h2>Lessons Learned</h2>
      <p>This project taught me the importance of user feedback and iterative design. Healthcare professionals have unique needs, and understanding these needs is crucial for creating effective tools.</p>
    `
  },
  {
    id: 4,  // 新 ID，从 4 开始递增
    title: "我的医学学习心得",
    category: "Medical",  // 分类：Medical, Research, Technology 或自定义
    date: "2025-01-20",  // 发布日期
    author: "July",
    image: "assets/img/portfolio-1.jpg",  // 使用现有图片或上传新图片
    excerpt: "这是文章摘要，显示在博客列表卡片上，建议 50-100 字...",
    content: `
      <p>这里开始写正文内容。可以使用 HTML 标签格式化文本。</p>

      <h2>一级标题</h2>
      <p>这是一个段落。可以写很长的内容。</p>

      <h3>二级标题</h3>
      <p>更多段落内容...</p>

      <ul>
        <li>列表项 1</li>
        <li>列表项 2</li>
        <li>列表项 3</li>
      </ul>

      <blockquote>
        这是一段引用文字，适合用来引用名言或重要观点。
      </blockquote>

      <p>可以使用 <strong>粗体</strong> 和 <em>斜体</em>。</p>

      <p>代码示例：<code>console.log('Hello')</code></p>

      <h2>总结</h2>
      <p>文章结尾内容...</p>
    `
  }
];

// Function to get blog posts (with optional limit)
function getBlogPosts(limit) {
  if (limit) {
    return blogPosts.slice(0, limit);
  }
  return blogPosts;
}

// Function to get a single blog post by ID
function getBlogPost(id) {
  return blogPosts.find(function(post) {
    return post.id === parseInt(id);
  });
}
