type ResumeItemData = {
  startDate : string;
  endDate : string;
  companyName : string;
  jobTitle : string;
  description : string;
}

const resumeItemList : ResumeItemData[] = [{
  startDate : "July 2021",
  endDate : "June 2023",
  companyName : "Gooten",
  jobTitle : "Full stack Software Engineer",
  description : "Did some stuff"
},
{
  startDate : "March 2020",
  endDate : "July 2021",
  companyName : "TekSystems, contractor at Nike",
  jobTitle : "Senior Full Stack Software Engineer",
  description : "Did some other stuff"
}];

export type { ResumeItemData };
export { resumeItemList };