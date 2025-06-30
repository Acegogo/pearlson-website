import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Badge from '../components/Badge';

const BlogPost = () => {
  const { id } = useParams();

  // Blog posts data - in a real app, this would come from an API
  const posts = [
    {
      id: 1,
      title: 'How Tutors Boost CBC Language Skills in Kenyan Schools',
      date: 'June 1, 2025',
      author: 'Flency Atswenje',
      category: 'Education',
      readTime: '5 min read',
      image: 'blog-tutor-cbc.jpg',
      content: `
        The Competency-Based Curriculum (CBC) has revolutionized education in Kenya, placing a strong emphasis on language skills development. At Pearlson Language School, our tutors have been at the forefront of this transformation, implementing innovative teaching methods that align with CBC objectives.

        Our approach focuses on three key areas:

        1. **Interactive Learning**: We use games, role-playing, and multimedia resources to make language learning engaging for young learners. This hands-on approach helps students develop practical communication skills.

        2. **Cultural Integration**: We incorporate Kenyan cultural elements into our language lessons, making the learning experience more relatable and meaningful for students.

        3. **Assessment Methods**: Our tutors use continuous assessment techniques that align with CBC requirements, providing regular feedback to both students and parents.

        The results have been remarkable. Students who participate in our programs show significant improvement in their language proficiency, confidence, and overall academic performance. Our tutors work closely with classroom teachers to ensure seamless integration of our language programs with the school curriculum.

        "The transformation we've seen in our students' language skills is incredible," says Sarah Muthoni, a Grade 3 teacher at St. Mary's Primary School. "The Pearlson tutors have brought a new energy to our language classes."

        As we continue to expand our programs across more schools, we remain committed to supporting the CBC's vision of producing well-rounded, competent learners who are prepared for the challenges of the 21st century.
      `
    },
    {
      id: 2,
      title: 'Interactive Lessons: Engaging Young Learners with French',
      date: 'June 5, 2025',
      author: 'Pearlson Team',
      category: 'Teaching',
      readTime: '4 min read',
      image: 'blog-interactive-french.jpg',
      content: `
        Teaching French to young learners requires a special approach that combines education with entertainment. At Pearlson Language School, we've developed a comprehensive methodology that makes French learning both effective and enjoyable.

        **Our Interactive Teaching Methods:**

        **1. Musical Learning**
        We use French songs and rhymes to teach vocabulary and pronunciation. Children naturally love music, and this method helps them remember words and phrases more easily. Our collection includes traditional French children's songs as well as modern adaptations.

        **2. Storytelling Sessions**
        French stories come alive in our classrooms through dramatic readings, puppets, and interactive elements. Students not only learn new vocabulary but also develop listening comprehension skills.

        **3. Role-Playing Activities**
        Students practice French through real-life scenarios like ordering food, asking for directions, or introducing themselves. This practical approach builds confidence and conversational skills.

        **4. Technology Integration**
        We use educational apps and digital resources to supplement traditional teaching methods. Interactive whiteboards and tablets make learning more engaging for tech-savvy young learners.

        **5. Cultural Immersion**
        We introduce French culture through food, art, and celebrations. Students learn about French holidays, traditional dishes, and famous landmarks, making the language learning experience more comprehensive.

        Our results speak for themselves: 95% of our students show improved French pronunciation and vocabulary retention after just three months of our interactive program. Parents often report that their children practice French at home, singing songs and using phrases they've learned in class.

        "My daughter now sings French songs around the house and even tries to teach me what she's learned," says Mary Wanjiku, a parent. "The interactive approach has made French her favorite subject."
      `
    },
    {
      id: 3,
      title: 'Cultural Benefits of German in Primary Education',
      date: 'June 8, 2025',
      author: 'Flency Atswenje',
      category: 'Culture',
      readTime: '6 min read',
      image: 'blog-german-culture.jpg',
      content: `
        Introducing German language and culture in primary education goes far beyond just learning a new language. It opens doors to understanding one of Europe's most influential cultures and prepares students for future opportunities in a globalized world.

        **Why German Matters in Today's World:**

        **Economic Opportunities**
        Germany is Europe's largest economy and a global leader in technology, engineering, and innovation. Learning German at an early age gives students a competitive advantage in future career opportunities, especially in fields like engineering, science, and international business.

        **Academic Advantages**
        Germany offers excellent educational opportunities, with many universities providing free or low-cost education to international students. Early exposure to German language and culture makes it easier for students to pursue higher education in Germany later.

        **Cultural Understanding**
        German culture has made significant contributions to literature, music, philosophy, and science. Learning about German culture helps students develop a broader worldview and appreciation for different perspectives.

        **Our German Program Features:**

        **1. Cultural Immersion**
        We celebrate German holidays like Oktoberfest and Christmas traditions, introduce German fairy tales, and explore German history and geography through interactive lessons.

        **2. Language Skills Development**
        Our program focuses on building a strong foundation in German grammar, vocabulary, and pronunciation, using age-appropriate materials and methods.

        **3. Technology Integration**
        We use German educational apps and online resources to supplement classroom learning, making the language more accessible and engaging.

        **4. Cultural Exchange**
        We organize virtual exchanges with German schools and invite German speakers to share their experiences with our students.

        The benefits of our German program extend beyond language skills. Students develop critical thinking skills, cultural sensitivity, and a global perspective that will serve them well throughout their lives.

        "Learning German has opened my eyes to a whole new world," says 10-year-old student James Kiprop. "I love learning about German castles and fairy tales, and I can't wait to visit Germany one day."
      `
    },
    {
      id: 4,
      title: 'Preparing for the Multilingual Fest 2025',
      date: 'June 12, 2025',
      author: 'Pearlson Team',
      category: 'Events',
      readTime: '3 min read',
      image: 'blog-multilingual-fest.jpg',
      content: `
        The Multilingual Fest 2025 is our biggest event of the year, bringing together students, parents, teachers, and language enthusiasts for a celebration of linguistic diversity and cultural exchange. This year's festival promises to be more exciting than ever with new features and expanded participation.

        **What to Expect at Multilingual Fest 2025:**

        **Student Performances**
        Students will showcase their language skills through dramatic performances, poetry recitations, and musical presentations in French, German, English, and Kenyan Sign Language. Each performance will highlight the cultural elements of the respective language.

        **Cultural Exhibitions**
        Interactive booths will feature traditional foods, clothing, music, and artifacts from different cultures. Students will act as cultural ambassadors, explaining the significance of various cultural elements to visitors.

        **Language Workshops**
        Mini-workshops will be available for visitors to learn basic phrases in different languages. These hands-on sessions will be led by our experienced tutors and advanced students.

        **Competitions**
        Language competitions will test students' skills in various categories including pronunciation, vocabulary, and cultural knowledge. Prizes will be awarded to winners in each category.

        **Guest Speakers**
        We're excited to welcome guest speakers from different cultural backgrounds who will share their experiences and insights about language learning and cultural exchange.

        **Preparation Timeline:**
        - **May 15-30**: Student auditions and selection
        - **June 1-10**: Intensive rehearsals and practice sessions
        - **June 11**: Final dress rehearsal
        - **June 12**: Multilingual Fest 2025

        **How to Participate:**
        Parents and community members are encouraged to attend and support our students. Admission is free, and we welcome everyone to join us in celebrating the power of language and cultural diversity.

        "The Multilingual Fest is not just about showcasing language skills," says our director, "it's about building bridges between cultures and fostering understanding and respect for diversity."
      `
    },
    {
      id: 5,
      title: 'Sign Language Inclusion in Kenyan Classrooms',
      date: 'June 15, 2025',
      author: 'Flency Atswenje',
      category: 'Inclusion',
      readTime: '5 min read',
      image: 'blog-sign-language.jpg',
      content: `
        At Pearlson Language School, we believe that language education should be inclusive and accessible to everyone. That's why we've integrated Kenyan Sign Language (KSL) into our curriculum, making it an essential part of our language program.

        **Why Kenyan Sign Language Matters:**

        **Inclusivity and Accessibility**
        By teaching KSL to all students, we create an inclusive environment where deaf and hard-of-hearing students can fully participate in classroom activities. This approach promotes understanding and breaks down communication barriers.

        **Enhanced Communication Skills**
        Learning sign language improves students' visual-spatial skills, memory, and overall communication abilities. It also helps develop empathy and understanding of different ways of communicating.

        **Career Opportunities**
        Sign language interpreters are in high demand in Kenya, and early exposure to KSL can open up future career opportunities for students interested in working with the deaf community.

        **Our KSL Program Features:**

        **1. Basic Communication Skills**
        Students learn essential KSL vocabulary and phrases for everyday communication, including greetings, numbers, colors, and common expressions.

        **2. Cultural Integration**
        We incorporate deaf culture education into our KSL lessons, helping students understand the history, values, and experiences of the deaf community in Kenya.

        **3. Interactive Learning**
        Our KSL classes use games, songs, and storytelling to make learning engaging and memorable. Students practice signing through role-playing and group activities.

        **4. Technology Support**
        We use video resources and digital tools to supplement classroom learning, allowing students to practice signing at their own pace.

        **5. Community Involvement**
        We invite members of the deaf community to share their experiences and provide authentic language models for our students.

        The impact of our KSL program has been profound. Students report increased confidence in communicating with deaf peers, and parents appreciate the inclusive approach to language education.

        "Learning sign language has made me more aware of the importance of inclusive communication," says 12-year-old student Aisha Hassan. "I now have friends who are deaf, and I can communicate with them easily."

        Our goal is to create a generation of students who are not only multilingual but also inclusive and empathetic communicators who can bridge gaps between different communities.
      `
    },
    {
      id: 6,
      title: 'Success Stories: Tutors Transforming Language Learning',
      date: 'June 16, 2025',
      author: 'Pearlson Team',
      category: 'Success Stories',
      readTime: '7 min read',
      image: 'blog-tutor-success.jpg',
      content: `
        Behind every successful language learner at Pearlson Language School is a dedicated tutor who has gone above and beyond to make learning meaningful and effective. Today, we share some inspiring success stories that highlight the transformative power of quality language education.

        **Story 1: Maria's Journey to French Fluency**

        Maria, a shy 8-year-old student, struggled with confidence in speaking French. Her tutor, Madame Sophie, recognized her potential and created a personalized learning plan that focused on building confidence through drama and role-playing.

        "Maria was incredibly bright but lacked confidence," recalls Madame Sophie. "I started with simple conversations and gradually increased the complexity. We used puppets and storytelling to make her feel comfortable speaking French."

        Within six months, Maria was not only speaking French fluently but also performing in French plays and helping other students with their pronunciation. She recently won first place in our French speaking competition.

        **Story 2: James and German Grammar**

        James, a 10-year-old student, found German grammar particularly challenging. His tutor, Herr Klaus, developed a unique approach using visual aids and interactive games to make complex grammar concepts accessible.

        "German grammar can be intimidating, but I believe in making it fun and understandable," says Herr Klaus. "I created games that helped James understand sentence structure and verb conjugations."

        James's progress was remarkable. He went from struggling with basic sentences to writing short stories in German. His parents were amazed by his transformation and his newfound love for the language.

        **Story 3: Sarah's Sign Language Breakthrough**

        Sarah, a 9-year-old student, was initially hesitant about learning Kenyan Sign Language. Her tutor, Teacher Grace, who is deaf herself, helped Sarah understand the beauty and importance of sign language.

        "I wanted Sarah to see sign language as a beautiful form of communication, not just a tool for the deaf," explains Teacher Grace. "We started with simple signs and gradually built up to more complex conversations."

        Sarah's perspective completely changed. She became passionate about sign language and now volunteers to help teach basic signs to younger students. She dreams of becoming a sign language interpreter.

        **Story 4: David's Multilingual Success**

        David, a 12-year-old student, was already proficient in English and Swahili when he joined our program. His tutor, Ms. Atswenje, encouraged him to learn French and German simultaneously, recognizing his natural language aptitude.

        "David had an incredible ability to understand language patterns," says Ms. Atswenje. "I challenged him to learn both French and German, and he excelled beyond our expectations."

        David now speaks four languages fluently and serves as a peer tutor, helping other students with their language studies. He plans to study linguistics in university.

        **The Common Thread**

        What makes these success stories special is the personalized approach our tutors take. They don't just teach languages; they inspire confidence, foster curiosity, and create meaningful connections with their students.

        "Every student is unique, and every learning journey is different," says our director. "Our tutors understand this and adapt their teaching methods to meet each student's individual needs and learning style."

        These success stories remind us that language learning is not just about memorizing vocabulary and grammar rules. It's about opening doors to new cultures, building confidence, and creating opportunities for personal and academic growth.

        As we continue to expand our programs, we remain committed to maintaining the high standards of personalized instruction that have made these success stories possible.
      `
    },
  ];

  // Find the post by ID
  const post = posts.find(p => p.id === parseInt(id)) || {
    title: 'Blog Post Not Found',
    date: 'Unknown',
    author: 'Unknown',
    category: 'General',
    readTime: 'Unknown',
    content: 'This blog post could not be found. Please check the URL and try again.',
    image: 'blog-tutor-cbc.jpg'
  };

  // Function to format content with proper markdown-like styling
  const formatContent = (content) => {
    return content
      .split('\n')
      .map((paragraph, index) => {
        if (paragraph.trim() === '') return null;
        
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return (
            <motion.h3 
              key={index}
              className="text-xl font-bold text-pearlson-navy mt-6 mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {paragraph.replace(/\*\*/g, '')}
            </motion.h3>
          );
        }
        
        if (paragraph.startsWith('        **')) {
          return (
            <motion.h4 
              key={index}
              className="text-lg font-semibold text-pearlson-navy mt-4 mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {paragraph.replace(/\*\*/g, '').trim()}
            </motion.h4>
          );
        }
        
        if (paragraph.startsWith('        ')) {
          return (
            <motion.p 
              key={index}
              className="text-gray-600 mb-4 ml-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {paragraph.trim()}
            </motion.p>
          );
        }
        
        if (paragraph.startsWith('- **')) {
          return (
            <motion.li 
              key={index}
              className="text-gray-600 mb-2 ml-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {paragraph.replace(/^- \*\*/, '').replace(/\*\*: /, ': ')}
            </motion.li>
          );
        }
        
        if (paragraph.startsWith('- ')) {
          return (
            <motion.li 
              key={index}
              className="text-gray-600 mb-2 ml-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {paragraph.replace(/^- /, '')}
            </motion.li>
          );
        }
        
        if (paragraph.startsWith('        - **')) {
          return (
            <motion.li 
              key={index}
              className="text-gray-600 mb-2 ml-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {paragraph.replace(/^- \*\*/, '').replace(/\*\*: /, ': ').trim()}
            </motion.li>
          );
        }
        
        return (
          <motion.p 
            key={index}
            className="text-gray-600 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {paragraph}
          </motion.p>
        );
      })
      .filter(Boolean);
  };

  return (
    <div className="bg-cream min-h-screen">
      <motion.div
        className="relative bg-teal py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              Blog Post
            </h1>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="section-padding"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-cream p-8 rounded-lg shadow-lg border border-orange"
            whileHover={{ scale: 1.02, boxShadow: '0 8px 32px 0 rgba(255,53,0,0.12)' }}
          >
            <div className="w-full h-64 bg-gray-100 rounded-lg mb-6 border border-orange flex items-center justify-center overflow-hidden">
              <img src={`/Images/${post.image}`} alt={post.title} className="w-full h-full object-contain rounded-lg" />
            </div>
            <Badge variant="primary" className="mb-2 bg-orange text-cream">{post.category}</Badge>
            <h2 className="text-3xl font-bold mb-2 text-black">{post.title}</h2>
            <div className="flex items-center text-olive text-sm mb-4">
              <span className="mr-2">{post.date}</span>|
              <span className="mx-2">{post.author}</span>|
              <span className="ml-2">{post.readTime}</span>
            </div>
            <div className="prose prose-lg text-olive max-w-none mb-8">
              {formatContent(post.content)}
            </div>
            <Link to="/blog" className="btn-primary hover:scale-105">Back to Blog</Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPost;
