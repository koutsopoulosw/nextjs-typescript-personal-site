type ResumeItemData = {
  startDate : string;
  endDate : string;
  companyName : string;
  jobTitle : string;
  description : string;
}

const resumeItemList : ResumeItemData[] = [{
  startDate : "September 2023",
  endDate : "November 2024",
  companyName : "Academy of Language Arts",
  jobTitle : "Full time Japanese Student",
  description : "Studied and practiced Japanese full time in an advanced conversational school in Japan in a collaborative, communicative environment.\n \
    Improved Japanese Speaking, Writing, and Listening skills to a JLPT N2 Level."
  },
  {
  startDate : "July 2021",
  endDate : "June 2023",
  companyName : "Gooten",
  jobTitle : "Fullstack Software Engineer",
  description : "Designed, implemented, and led efforts and cross-functional team meetings for business critical backend integration Microservices in C#, .NET Core, Node.js, Azure, and SQL. \n \
    Designed Microservice REST API in C# with Swagger / OpenAPI definition and UI for testability and documentation. \n \
    Strong experience improving, maintaining, and creating components for customer-facing Frontend ERP web application using React, Redux, HTML, CSS, and Node.js \n \
    Worked on a small, fast moving team using DevOps, Git, Scrum and Agile, and communicated directly to upper management."
},
{
  startDate : "March 2020",
  endDate : "July 2021",
  companyName : "TekSystems, Consultant at Nike",
  jobTitle : "Senior Full Stack Software Engineer",
  description : "Designed and Developed a high performance, accurate, asynchronous Serverless change processing and notification generation platform using API Gateway, Lambda, Node.js, DynamoDB, S3, SQS, and Serverless Framework. \n \
    Planned and Implemented both Frontend and Backend features, writing clean, maintainable, well-documented code for a business critical ERP application and its downstream integrations using React, Redux, and CSS. \n \
    Collaborated with small, adaptive team meeting business requirements using Agile, Scrum, Git, and DevOps."
},
{
  startDate : "October 2019",
  endDate : "March 2020",
  companyName : "Launch Consulting Group",
  jobTitle : "Software Engineer",
  description : "Developed highly secure features, permissions, and REST API in Serverless AWS for an insurance claims application with Cloudformation, AWS SAM, API Gateway, Lambda, SNS, SQS, Cloudformation, and Terraform in a fast-paced environment. \n \
    Completely rewrote and delivered React, HTML and CSS codebase using best practices for a critical project under quick deadlines. \n \
    Reduced codebase by more than 50% with same functionality and improved user experience and optimization. \n \
    Experience working with varying teams with tight schedules in an ever-changing environment using Scrum, Agile, Git, DevOps, Jenkins, and Jira."
},
{
  startDate : "January 2019",
  endDate : "October 2019",
  companyName : "FWDThink",
  jobTitle : "Software Developer I",
  description : "Worked with clients directly to architect and implement frontend and backend features based directly on client requirements. \n \
    Utilized React, React Native, DynamoDB, MongoDB, AWS Amplify, AppSync, GraphQL, Apollo, AWS Lambda, API Gateway, S3, Cognito, Cloudformation, HTML, CSS and AWS SAM to build, deploy, and deliver mobile apps, web apps, and REST API directly to customers. \n \
    Part of very small, self-led team meeting customers directly to determine business needs, then implementing them with Scrum, Agile, Git, DevOps, and Kanban."
},
{
  startDate : "February 2017",
  endDate : "January 2019",
  companyName : "Les Schwab",
  jobTitle : "Software Developer I",
  description : "Created serverless frontend and backend prototypes, REST API, and web applications using React, Lambda, S3, SQS, SNS, API Gateway, and deployed with CICD and Cloudformation. \n \
    Developed Serverless AWS backend integrations to sync order data across important BI Databases using SQL and Snowflake. \n \
    Developed new features for reporting software using Java, Eclipse, and Jasper reports. \n \
    Developed new features for various fast prototype Web Applications in React, Javascript, HTML, CSS, Angular, and Typescript. \n \
    Worked on a multidisciplinary team migrating to AWS Serverless in a fast environment using Agile, Scrum, DevOps, and Kanban."
}];

export type { ResumeItemData };
export { resumeItemList };