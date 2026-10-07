const courses = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript and build modern websites.",
    category: "Development",
    level: "Beginner",
    icon: "💻",

    lessons: [
      {
        id: 1,
        title: "Introduction to Web Development",
        description:
          "Understand how websites work and learn about HTML, CSS and JavaScript.",
        content: [
          "Web development is the process of creating websites and web applications.",
          "HTML is used to structure the content of a webpage.",
          "CSS is used to style and design webpages.",
          "JavaScript adds interactivity and functionality to websites.",
        ],
      },
      {
        id: 2,
        title: "HTML Fundamentals",
        description:
          "Learn how to structure webpages using HTML elements and tags.",
        content: [
          "HTML stands for HyperText Markup Language.",
          "HTML uses elements and tags to structure webpage content.",
          "Common HTML elements include headings, paragraphs, links, images and lists.",
        ],
      },
      {
        id: 3,
        title: "HTML Forms",
        description:
          "Learn how to create forms and collect information from users.",
        content: [
          "HTML forms allow websites to collect information from users.",
          "Forms can contain inputs, labels, buttons and other controls.",
          "Common input types include text, email, password and number.",
        ],
      },
      {
        id: 4,
        title: "CSS Fundamentals",
        description:
          "Learn how to style webpages using CSS.",
        content: [
          "CSS stands for Cascading Style Sheets.",
          "CSS controls colors, spacing, fonts, layouts and visual appearance.",
          "Selectors are used to target HTML elements.",
        ],
      },
      {
        id: 5,
        title: "CSS Layouts",
        description:
          "Learn how to create professional webpage layouts.",
        content: [
          "CSS Flexbox and Grid are powerful tools for creating layouts.",
          "Flexbox is useful for arranging elements in rows and columns.",
          "CSS Grid is useful for creating complex two-dimensional layouts.",
        ],
      },
      {
        id: 6,
        title: "Responsive Web Design",
        description:
          "Learn how to make websites work on different screen sizes.",
        content: [
          "Responsive design allows websites to adapt to different devices.",
          "Media queries can change styles based on screen size.",
          "A responsive website should work well on phones, tablets and computers.",
        ],
      },
    ],
  },

  {
    id: 2,
    title: "React.js",
    description:
      "Build interactive web applications using React.",
    category: "Development",
    level: "Intermediate",
    icon: "⚛️",

    lessons: [
      {
        id: 1,
        title: "Introduction to React",
        description:
          "Understand React and why developers use it.",
        content: [
          "React is a JavaScript library for building user interfaces.",
          "React applications are built using reusable components.",
          "React helps developers create interactive and dynamic interfaces.",
        ],
      },
      {
        id: 2,
        title: "React Components",
        description:
          "Learn how to create and use React components.",
        content: [
          "Components are reusable building blocks of React applications.",
          "A component can contain its own structure, logic and styling.",
          "Components help keep applications organized and maintainable.",
        ],
      },
      {
        id: 3,
        title: "JSX Fundamentals",
        description:
          "Learn how JSX works in React applications.",
        content: [
          "JSX allows developers to write HTML-like syntax inside JavaScript.",
          "JSX makes React components easier to understand and write.",
          "JavaScript expressions can be used inside JSX.",
        ],
      },
      {
        id: 4,
        title: "Props in React",
        description:
          "Learn how to pass information between components.",
        content: [
          "Props allow data to be passed from one component to another.",
          "Props are commonly passed from parent components to child components.",
          "Props help make components reusable.",
        ],
      },
      {
        id: 5,
        title: "React State",
        description:
          "Understand state and how it changes your interface.",
        content: [
          "State stores information that can change during the lifetime of a component.",
          "React re-renders components when their state changes.",
          "The useState hook is commonly used to manage state.",
        ],
      },
      {
        id: 6,
        title: "React Events",
        description:
          "Learn how to handle user interactions.",
        content: [
          "React can respond to events such as clicks, typing and form submissions.",
          "Event handlers allow developers to execute code when users interact with the application.",
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Cyber Security",
    description:
      "Learn the fundamentals of protecting systems and networks.",
    category: "Security",
    level: "Beginner",
    icon: "🔐",

    lessons: [
      {
        id: 1,
        title: "Introduction to Cyber Security",
        description:
          "Understand the fundamentals of cyber security.",
        content: [
          "Cyber security involves protecting computers, networks and information from unauthorized access and attacks.",
          "Security is important for individuals, organizations and governments.",
        ],
      },
      {
        id: 2,
        title: "Types of Cyber Threats",
        description:
          "Learn about common cyber security threats.",
        content: [
          "Cyber threats can target systems, networks and users.",
          "Common examples include phishing, malware and unauthorized access.",
          "Understanding threats helps organizations develop better security practices.",
        ],
      },
      {
        id: 3,
        title: "Password Security",
        description:
          "Learn how to create and manage strong passwords.",
        content: [
          "Strong passwords help protect accounts from unauthorized access.",
          "Passwords should be unique and difficult to guess.",
          "Multi-factor authentication can provide an additional layer of security.",
        ],
      },
      {
        id: 4,
        title: "Network Security",
        description:
          "Understand the basics of protecting computer networks.",
        content: [
          "Network security protects devices and communication systems.",
          "Firewalls and secure network configurations can help reduce security risks.",
        ],
      },
      {
        id: 5,
        title: "Phishing Awareness",
        description:
          "Learn how to recognize suspicious messages and websites.",
        content: [
          "Phishing attempts often try to trick users into revealing sensitive information.",
          "Users should carefully check unexpected messages and links before interacting with them.",
        ],
      },
      {
        id: 6,
        title: "Cyber Security Best Practices",
        description:
          "Learn practical security habits.",
        content: [
          "Keep software updated.",
          "Use strong unique passwords.",
          "Enable multi-factor authentication when available.",
          "Avoid opening suspicious links or attachments.",
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Database Management",
    description:
      "Understand databases, queries and data management.",
    category: "Database",
    level: "Intermediate",
    icon: "🗄️",

    lessons: [
      {
        id: 1,
        title: "Introduction to Databases",
        description:
          "Understand what databases are and why they are important.",
        content: [
          "A database is an organized collection of information.",
          "Databases allow applications to store, manage and retrieve data efficiently.",
        ],
      },
      {
        id: 2,
        title: "Database Types",
        description:
          "Explore different types of databases.",
        content: [
          "Relational databases organize information into tables.",
          "NoSQL databases use flexible structures for storing data.",
          "Different applications may require different database technologies.",
        ],
      },
      {
        id: 3,
        title: "Tables and Records",
        description:
          "Learn how relational databases organize information.",
        content: [
          "Tables contain records and fields.",
          "A record represents one item of information.",
          "A field represents a specific type of information.",
        ],
      },
      {
        id: 4,
        title: "SQL Fundamentals",
        description:
          "Learn the basics of querying databases.",
        content: [
          "SQL is commonly used to interact with relational databases.",
          "Queries can retrieve, add, update and remove information.",
        ],
      },
      {
        id: 5,
        title: "Database Relationships",
        description:
          "Understand relationships between database tables.",
        content: [
          "Tables can be connected through relationships.",
          "Common relationships include one-to-one, one-to-many and many-to-many.",
        ],
      },
      {
        id: 6,
        title: "Database Security",
        description:
          "Learn how to protect stored information.",
        content: [
          "Database security helps prevent unauthorized access to information.",
          "Access control, authentication and proper configuration are important security measures.",
        ],
      },
    ],
  },

  {
    id: 5,
    title: "UI/UX Design",
    description:
      "Learn how to design useful and beautiful digital products.",
    category: "Design",
    level: "Beginner",
    icon: "🎨",

    lessons: [
      {
        id: 1,
        title: "Introduction to UI/UX",
        description:
          "Understand the difference between UI and UX design.",
        content: [
          "UI means User Interface and focuses on the visual interface of a product.",
          "UX means User Experience and focuses on how users interact with a product.",
        ],
      },
      {
        id: 2,
        title: "Understanding Users",
        description:
          "Learn why understanding users is important.",
        content: [
          "Good design begins with understanding the people who will use a product.",
          "Designers consider user needs, goals and challenges.",
        ],
      },
      {
        id: 3,
        title: "Wireframing",
        description:
          "Learn how to plan digital interfaces.",
        content: [
          "Wireframes are simple representations of a digital interface.",
          "They help designers plan layouts before creating detailed designs.",
        ],
      },
      {
        id: 4,
        title: "Color and Typography",
        description:
          "Learn how visual choices affect design.",
        content: [
          "Color can influence how users understand and interact with an interface.",
          "Typography affects readability, hierarchy and visual personality.",
        ],
      },
      {
        id: 5,
        title: "Design Systems",
        description:
          "Understand reusable design elements.",
        content: [
          "Design systems provide reusable components, colors, typography and guidelines.",
          "They help maintain consistency across products.",
        ],
      },
      {
        id: 6,
        title: "Usability Testing",
        description:
          "Learn how to evaluate a design.",
        content: [
          "Usability testing helps identify problems users may experience.",
          "Designers can use feedback to improve an interface.",
        ],
      },
    ],
  },

  {
    id: 6,
    title: "Python Programming",
    description:
      "Start programming with Python and develop practical skills.",
    category: "Programming",
    level: "Beginner",
    icon: "🐍",

    lessons: [
      {
        id: 1,
        title: "Introduction to Python",
        description:
          "Learn what Python is and how it is used.",
        content: [
          "Python is a popular programming language known for its readable syntax.",
          "It is used for web development, automation, data analysis and many other applications.",
        ],
      },
      {
        id: 2,
        title: "Python Variables",
        description:
          "Learn how to store information in Python.",
        content: [
          "Variables are names used to store values.",
          "Python can store strings, numbers and many other types of data.",
        ],
      },
      {
        id: 3,
        title: "Python Data Types",
        description:
          "Understand common Python data types.",
        content: [
          "Common Python data types include strings, integers, floats, booleans, lists and dictionaries.",
        ],
      },
      {
        id: 4,
        title: "Conditional Statements",
        description:
          "Learn how programs make decisions.",
        content: [
          "Conditional statements allow programs to execute different code depending on conditions.",
          "Python uses if, elif and else statements.",
        ],
      },
      {
        id: 5,
        title: "Python Loops",
        description:
          "Learn how to repeat operations.",
        content: [
          "Loops allow developers to repeat code.",
          "Python commonly uses for loops and while loops.",
        ],
      },
      {
        id: 6,
        title: "Python Functions",
        description:
          "Learn how to organize reusable code.",
        content: [
          "Functions are reusable blocks of code.",
          "Functions can accept inputs and return results.",
        ],
      },
    ],
  },
];

export default courses;