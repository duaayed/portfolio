type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Duaa Al-Qudimat — Portfolio",
    fullName: "Duaa Al-Qudimat",
    email: "duaaqud@gmail.com",
  },
  hero: {
    name: "Duaa Al-Qudimat",
    p: ["I am a full stack developer, user", "and a UI/UX designer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `A passionate Business Information Technology student at the
      University of Jordan with a strong interest in web development, UI/UX
      design, AI, and continuous learning. Skilled in combining technology
      and business insights to develop innovative solutions. Always eager to
      tackle challenges, enhance my skills, and stay at the forefront of the
      tech industry.`,
    }, 
    // I'm a skilled software developer with experience in TypeScript and
    //   JavaScript, and expertise in frameworks like React, Node.js, and
    //   Three.js. I'm a quick learner and collaborate closely with clients to
    //   create efficient, scalable, and user-friendly solutions that solve
    //   real-world problems. Let's work together to bring your ideas to life!
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
  
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
