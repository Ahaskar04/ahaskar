/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'IIT Kanpur',
    position: 'Research Assistant',
    url: 'https://c3ihub.org/',
    startDate: '2024-06-01',
    endDate: '2024-09-01',
    summary: 'Built an efficient asset management system with Docker, Node.js, and MongoDB, boosting data handling and retrieval speed for a cybersecurity firm at IIT Kanpur. Contributed to SIEM technology for enhanced threat monitoring.',
    highlights: [
      'Developed a robust asset management system for a cybersecurity firm at IIT Kanpur, using Docker, Node.js, and MongoDB, resulting in an increased system efficiency and reliability by implementing automated data handling processes and integrating ElasticSearch for improved data retrieval',
      "Created and optimized backend APIs for the firm's internal applications by utilizing Node.js and Cron jobs, which reduced API response times and improved overall system performance, streamlining data processing and retrieval",
      "Contributed to the development of SIEM technology, integrating various cybersecurity features and tools, supporting the firm's goal of advanced threat monitoring and management",
    ],
  },
  {
    name: 'Kyodo',
    position: 'Co Founder',
    url: 'https://www.kyodo.co.in/',
    startDate: '2024-01-01',
    endDate: '2024-09-01',
    summary: `Led Led the development of a local-language coding platform to break language barriers in coding education, 
    implemented across four schools with government partnership and engaging 900+ students. 
    Coordinated with officials and a non-profit to ensure long-term impact and sustainability.`,
    highlights: [
      'Initiated a local-language coding platform to address language barriers in coding education, achieving a 50% preference rate in post-pilot surveys, by leading a team of 20 and partnering with a state government to implement it in 4 schools.',
      'Coordinated with 7 officials and administrators to successfully integrate the coding platform into school curricula for 3 months, resulting in the engagement of 900+ students.',
      'Partnered with a non-profit trust to transfer the coding platform, ensuring its long-term sustainability and continued impact on coding education for students in India.',
    ],
  },
  {
    name: 'EchoEase',
    position: 'Machine Learning Project',
    url: 'https://github.com/Ahaskar04/Echo_Ease.git',
    startDate: '2023-10-01',
    endDate: '2024-02-01',
    summary: `Developed an ensemble machine learning model with 92% accuracy for detecting asthma and COPD from cough sounds, 
    collaborating with global researchers to gather diverse datasets. 
    Built the app in React Native and Python, optimizing detection accuracy and performance.`,
    highlights: [
      'Achieved a 92% accuracy rate in detecting asthma and Chronic Obstructive Pulmonary Disease from cough sounds by developing an ensemble machine learning model and coordinating with global researchers and clinics to collect and analyze diverse cough sound datasets.',
      "Engineered the app using React Native and Python, integrating various machine learning models and finalizing an ensemble model that provided the highest detection accuracy, improving the app's performance.",
    ],
  },
  {
    name: 'Google Developers Students Club',
    position: 'Vice-President',
    // url: 'https://arthena.com',
    startDate: '2023-09-01',
    endDate: '2024-05-01',
    summary: `As Vice President of the Google Developers Student Club, 
    boosted visibility and engagement by organizing industry-led workshops and managing social media, 
    increasing event attendance and online engagement.`,
    highlights: [
      'Enhanced the Google Developers Student Club’s visibility and engagement as Vice President by organizing workshops with various industry speakers and managing social media, resulting in increase in event attendance and a boost in online engagement.',
      'Led communication for Google Developers Student Club, coordinating workshops with prominent speakers and managing social media, boosting outreach and event promotion.',
    ],
  },
  {
    name: ' RSP Physically Challenged Club',
    position: 'Publicity Head',
    url: 'https://www.instagram.com/ntuwsc_rsppc/',
    startDate: '2024-09-01',
    summary: `Organized weekly events and sports tournaments for the WSC-RSP club, strengthening community bonds. 
    Secured sponsorships to enhance resources, 
    while leading social media and promotional efforts that boosted participation and engagement across Singapore.`,
    highlights: [
      'Coordinated the planning and execution of weekly and festive events for the WSC-RSP club, including sports tournaments and bonding sessions, resulting in stronger community connections.',
      "Secured sponsorships and engaged potential customers for the WSC-RSP club, enhancing the club's resources and event quality, which improved overall event funding.",
      'Led social media, design, and promotion efforts for the WSC-RPC club, organizing and managing events such as powerchair football and house visits across Singapore, which increased event participation and boosted community engagement',
    ],
  },
];

export default work;
