import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Badge from '../components/Badge';

const Blog = () => {
  const posts = [
    {
      id: 7,
      title: 'Announcing the 2026 Multilingual Festival National Tour',
      excerpt: 'Join us for an exciting national tour featuring four regional editions across Kenya. Discover dates, locations, and how to register for this groundbreaking celebration of language diversity.',
      image: 'IMG-20250410-WA0038.jpg',
      date: 'November 1, 2025',
      author: 'Pearlson Team',
      category: 'Announcements',
      readTime: '5 min read',
      content: `
        We are thrilled to announce the 2026 Multilingual Festival National Tour, our most ambitious celebration of language diversity yet! This year, we're taking the festival across Kenya with four regional editions, bringing together schools, students, and communities in a nationwide celebration of multilingual excellence.

        **The Four-Edition National Tour:**

        **Nairobi Edition - February 14, 2026**
        Kickstarting our national tour in the capital city, the Nairobi Edition will bring together schools from across the metropolitan area. This edition sets the tone for the entire tour, showcasing the incredible linguistic talents of students in Kenya's educational hub.

        **Coast Edition - February 27, 2026**
        Celebrating coastal diversity and cultural fusion, the Coast Edition highlights the unique linguistic heritage of Kenya's coastal region. This edition emphasizes the rich cultural exchange between Swahili, Arabic, and other languages that thrive along the coast.

        **Rift Valley Edition - March 7, 2026**
        Expanding horizons across the entire Rift Valley region, this edition brings together schools from one of Kenya's most diverse regions. Students will showcase performances that reflect the region's multicultural landscape.

        **Western Edition - March 21, 2026**
        Our grand finale celebration, the Western Edition marks the culmination of our national tour. This edition brings together the best of what we've seen across the country, creating a spectacular finale that celebrates Kenya's linguistic diversity.

        **What's New for 2026:**

        **Enhanced Competition Categories**
        We've expanded our categories to include more opportunities for students at different levels, from kindergarten through secondary school. Each category celebrates different aspects of language learning and cultural expression.

        **Improved Registration Process**
        Our new online registration system makes it easier than ever for schools to register. Each edition has its own dedicated registration form, streamlining the process and ensuring accurate data collection.

        **National Recognition**
        Winners from each regional edition will be recognized at a special national ceremony, celebrating excellence in multilingual education across Kenya.

        **Early Bird Registration**
        Schools that register before December 31, 2025, will receive special benefits including priority performance slots and discounted entry fees. Don't miss this opportunity to secure your spot!

        **How to Register:**

        Registration is now open for all four editions. Simply visit our Events page and click on the "Register Now" button for your preferred edition. Each edition has its own registration form, making it easy to sign up for the location most convenient for your school.

        **Our Vision for 2026:**

        The 2026 National Tour represents our commitment to making multilingual education accessible across Kenya. By bringing the festival to different regions, we're ensuring that students from all corners of the country have the opportunity to showcase their linguistic talents and celebrate cultural diversity.

        "This national tour is a testament to our belief that language education should be accessible to all Kenyan students," says Flency Atswenje, founder of Pearlson Languages. "We're excited to see how schools across the country will bring their unique perspectives to this celebration of multilingualism."

        Join us on this incredible journey as we celebrate language diversity across Kenya. Register today and be part of the 2026 Multilingual Festival National Tour!
      `
    },
    {
      id: 8,
      title: 'Celebrating Success: Reflecting on the 2025 Coast Multilingual Festival',
      excerpt: 'A comprehensive look back at the 2025 Coast Multilingual Festival, highlighting student achievements, cultural exchanges, and the lasting impact on participating schools and communities.',
      image: 'IMG-20250410-WA0107.jpg',
      date: 'November 7, 2025',
      author: 'Flency Atswenje',
      category: 'Events',
      readTime: '4 min read',
      content: `
        The 2025 Coast Multilingual Festival was a resounding success, bringing together schools from across the coastal region for a vibrant celebration of language diversity and cultural exchange. As we reflect on this incredible event, we're filled with gratitude for the participants, organizers, and community members who made it possible.

        **Event Highlights:**

        **Record Participation**
        Over 25 schools participated in the 2025 Coast Edition, with more than 500 students showcasing their multilingual talents. The event featured performances in eight different languages, including English, Swahili, French, German, Arabic, and local languages.

        **Outstanding Performances**
        Students delivered exceptional performances across all categories, from kindergarten singing games to secondary school skits. The creativity and passion displayed by participants were truly inspiring, demonstrating the power of multilingual education.

        **Cultural Exchange**
        One of the most beautiful aspects of the festival was the cultural exchange that took place. Students from different backgrounds came together, sharing their languages, traditions, and perspectives. This exchange created lasting friendships and a deeper appreciation for Kenya's linguistic diversity.

        **Impact on Schools**

        **Enhanced Language Programs**
        Many participating schools reported increased interest in language learning programs following the festival. The event served as a catalyst for schools to expand their language offerings and invest more in multilingual education.

        **Student Confidence**
        Teachers and parents noted significant improvements in student confidence, particularly in public speaking and performance. The festival provided a safe and supportive environment for students to showcase their skills, building self-esteem and communication abilities.

        **Community Engagement**
        The festival brought together not just schools, but entire communities. Parents, local leaders, and community members came out to support the students, creating a sense of pride and unity around multilingual education.

        **Lessons Learned**

        **The Power of Regional Focus**
        Focusing on a specific region allowed us to create a more intimate and meaningful experience. Schools were able to connect with others in their area, fostering regional collaboration and support networks.

        **Importance of Preparation**
        The success of the festival highlighted the importance of thorough preparation. Schools that invested time in practice and preparation delivered the most polished performances, demonstrating the value of dedicated effort.

        **Community Support Matters**
        The overwhelming community support showed us that multilingual education resonates deeply with Kenyan communities. This support is essential for the continued growth and success of language education programs.

        **Testimonials**

        "The Coast Festival was transformative for our students," says Principal Jane Mwangi of Mombasa Primary School. "They gained confidence, made new friends, and developed a deeper appreciation for languages. We're already preparing for 2026!"

        "My daughter participated in the French performance category," shares parent Ahmed Hassan. "The experience boosted her confidence tremendously, and she's now more enthusiastic about learning languages than ever before."

        **Looking Forward to 2026**

        Building on the success of the 2025 Coast Edition, we're excited to expand the festival into a national tour in 2026. The lessons learned from this event will inform our approach as we bring multilingual celebrations to Nairobi, Rift Valley, and Western regions.

        The 2025 Coast Multilingual Festival was more than just an event—it was a celebration of Kenya's linguistic diversity, a showcase of student talent, and a testament to the power of multilingual education. As we move forward, we carry with us the inspiration and lessons from this incredible experience.

        Thank you to everyone who made the 2025 Coast Edition possible. Your participation, support, and enthusiasm made it a truly memorable event. We can't wait to see what 2026 brings!
      `
    },
    {
      id: 1,
      title: 'How Tutors Boost CBC Language Skills in Kenyan Schools',
      excerpt: 'Discover how our dedicated tutors are enhancing language education in Kenyan primary schools through the CBC curriculum, creating engaging and effective learning experiences.',
      image: 'blog-tutor-cbc.jpg',
      date: 'June 1, 2025',
      author: 'Flency Atswenje',
      category: 'Education',
      readTime: '5 min read',
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
      excerpt: 'Explore our innovative approach to teaching French to young learners through interactive games, songs, and activities that make language learning fun and memorable.',
      image: 'blog-interactive-french.jpg',
      date: 'June 5, 2025',
      author: 'Pearlson Team',
      category: 'Teaching',
      readTime: '4 min read',
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
      excerpt: 'Learn how introducing German language and culture in primary schools broadens students\' horizons and prepares them for a globalized future.',
      image: 'blog-german-culture.jpg',
      date: 'June 8, 2025',
      author: 'Flency Atswenje',
      category: 'Culture',
      readTime: '6 min read',
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
      excerpt: 'Get ready for our upcoming language festival where students will showcase their multilingual talents through performances, presentations, and cultural displays.',
      image: 'blog-multilingual-fest.jpg',
      date: 'June 12, 2025',
      author: 'Pearlson Team',
      category: 'Events',
      readTime: '3 min read',
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
      excerpt: 'How we\'re integrating Kenyan Sign Language into our curriculum to promote inclusivity and communication skills among all students.',
      image: 'blog-sign-language.jpg',
      date: 'June 15, 2025',
      author: 'Flency Atswenje',
      category: 'Inclusion',
      readTime: '5 min read',
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
      excerpt: 'Inspiring stories from our tutors who have helped students overcome language barriers and achieve remarkable progress in their language journey.',
      image: 'blog-tutor-success.jpg',
      date: 'June 16, 2025',
      author: 'Pearlson Team',
      category: 'Success Stories',
      readTime: '7 min read',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div
      className="relative"
      style={{ backgroundImage: "url('/Images/Past Events/Nairobi Edition/1 (289).jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-white/70" />
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="relative py-20 bg-center bg-cover"
          style={{ backgroundImage: "url('/Images/IMG-20250410-WA0074.jpg')" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center glass-panel rounded-xl p-6 inline-block mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
                Blog
              </h1>
              <p className="text-xl text-orange max-w-3xl mx-auto">
                Insights, tips, and stories from our language learning community
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Featured Posts */}
        <motion.div 
          className="section-padding bg-olive/95"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-cream"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Articles
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {posts.slice(0, 2).map((post, index) => (
                <motion.div key={post.id} variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(255,53,0,0.15)' }}>
                  <Card className="p-6 hover:shadow-2xl transition-shadow duration-300 bg-cream/90 backdrop-blur-sm border border-orange glass-card">
                    <div className="w-full h-48 bg-gray-100/60 rounded-lg mb-4 border border-orange flex items-center justify-center overflow-hidden">
                      <img src={`/Images/${post.image}`} alt={post.title} className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <Badge variant="primary" className="mb-2 bg-orange text-cream">{post.category}</Badge>
                    <h3 className="text-xl font-bold mb-2 text-black">{post.title}</h3>
                    <p className="text-olive mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-olive text-sm mb-4">
                      <span className="mr-2">{post.date}</span>|
                      <span className="mx-2">{post.author}</span>|
                      <span className="ml-2">{post.readTime}</span>
                    </div>
                    <Link to={`/blog/post/${post.id}`} className="btn-primary w-full text-center hover:scale-105">Read More</Link>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Recent Articles */}
        <motion.div 
          className="section-padding"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-black"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Recent Articles
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {posts.slice(2).map((post, index) => (
                <motion.div key={post.id} variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(255,53,0,0.15)' }}>
                  <Card className="p-6 hover:shadow-2xl transition-shadow duration-300 bg-cream/90 backdrop-blur-sm border border-orange glass-card">
                    <div className="w-full h-40 bg-gray-100/60 rounded-lg mb-4 border border-orange flex items-center justify-center overflow-hidden">
                      <img src={`/Images/${post.image}`} alt={post.title} className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <Badge variant="primary" className="mb-2 bg-orange text-cream">{post.category}</Badge>
                    <h3 className="text-lg font-bold mb-2 text-black">{post.title}</h3>
                    <p className="text-olive mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-olive text-sm mb-4">
                      <span className="mr-2">{post.date}</span>|
                      <span className="mx-2">{post.author}</span>|
                      <span className="ml-2">{post.readTime}</span>
                    </div>
                    <Link to={`/blog/post/${post.id}`} className="btn-primary w-full text-center hover:scale-105">Read More</Link>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          className="section-padding bg-pearlson-navy/95"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container-custom">
            <motion.div 
              className="max-w-3xl mx-auto text-center glass-panel rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-200 mb-8">
                Stay updated with the latest language learning tips, events, and success stories
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-pearlson-red focus:border-transparent"
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog; 