module.exports = {
  pathPrefix: "/myfolio",
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://deep7k.github.io/myfolio/`,
    // Your Name
    name: 'Deepak Nalathwad',
    // Main Site Title
    title: `Deepak Nalathwad | Cloud Enthusiast`,
    // Description that goes under your name in main bio
    description: `Information Science & Engg graduate with focus in Cloud and Devops`,
    // Optional: Twitter account handle
    author: `@deepakna7`,
    // Optional: Github account URL
    github: `https://github.com/Deep7k`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/deepakna7/`,
    // Content of the About Me section
    about: `I'm a cloud/Devops Enthusiast with a degree in Information Science & engg. I'm passionate about technology in general, I write blogs and do pencil sketches.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Dotfiles',
        description:
          'Configuration files for most of the tools I use, along with a script to install and configure them.',
        link: 'https://github.com/Deepk/dotfiles',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'ALS India (Student Internship)',
        description: 'IOT Intern, December 2021 - March 2022',
        link: 'https://www.alsindia.net/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, Bash Scripting',
      },
      {
        name: 'Developer Tools',
        description:
          'Docker, Amazon Web Services (AWS), Git, Ansible, Kubernetes, Jenkins',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `myfolio`,
        short_name: `myfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
