// Blog posts data
var blogPosts = [
  {
    id: 1,
    title: "My Journey into Clinical Medicine",
    category: "Medical",
    date: "2025-01-15",
    author: "July",
    image: "assets/img/portfolio-1.jpg",
    excerpt: "Sharing my experiences and insights from studying clinical medicine at Southern Medical University. From the challenges to the rewarding moments...",
    content: `
      <p>Studying clinical medicine has been one of the most challenging yet rewarding experiences of my life. At Southern Medical University, I've had the opportunity to learn from exceptional faculty and work alongside dedicated peers.</p>

      <h2>The Beginning</h2>
      <p>When I first entered medical school, I was overwhelmed by the sheer volume of information I needed to learn. Anatomy, physiology, biochemistry - each subject presented its own unique challenges.</p>

      <h2>Finding My Passion</h2>
      <p>As I progressed through my studies, I discovered a particular interest in the microbiome field. The intricate relationship between microorganisms and human health fascinates me endlessly.</p>

      <h3>Key Learnings</h3>
      <ul>
        <li>Patience and perseverance are essential in medicine</li>
        <li>Collaboration with peers enhances learning</li>
        <li>Practical experience is invaluable</li>
        <li>Continuous learning is a lifelong commitment</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>I'm excited about the future and the opportunity to make a difference in healthcare. Combining medical knowledge with technology opens up endless possibilities.</p>
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
