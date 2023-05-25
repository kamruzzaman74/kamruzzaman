import React from "react";
import AboutMe from "./Components/AboutMe.jsx";
import { aboutMe, skills, professionalData } from "../Data/page-data.jsx";
import ProfessionalExperience from "./Components/ProfessionalExperience.jsx";

const page = () => {
	return (
		<div>
			<AboutMe data={aboutMe} skills={skills} />
			<ProfessionalExperience data={professionalData} />
		</div>
	);
};

export default page;