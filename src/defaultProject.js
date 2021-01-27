const defaultProject = () => {
	if (!("hasRunCodeBefore" in localStorage)) {
		let lists = [
			{
				name: "To-Doer is here to make your life easy and comfortable",
				description: "",
				priority: "critical selected",
				dueDate: "2021-01-14",
				completed: false,
			}			
		];
		// let allProjects = [
		// 	{ name: "Welcome", description: "Welcome to To-Doer", lists },
		// ];
		localStorage.setItem("allProjects", JSON.stringify(allProjects));
		localStorage.setItem("hasRunCodeBefore", true);
	}
}
export default defaultProject;
