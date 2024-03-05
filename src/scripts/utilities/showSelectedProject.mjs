import { initGetData } from '@js-api/getProjectsData'
import projectTemplate from '@p-temp/selectedProject'

import STORE from '@js-store/store'


const initShowSelectedProject = async (id) => {
	if (id === null) {
		console.log("Project ID were not transferred")
	}
	const containerElement = document.getElementById('selected-project')
	await initGetData(id)
	const project = STORE.PROJECTS.selectedProject[0]
	console.log(project.id)
	const PROJECT_TEMPLATE_OPTIONS = {
		projectId: project.id,
		projectName: project.name,
		projectDescription: project.introduce.text,
		projectGoal: project.introduce.goal,
		projectLocation: project.details.location,
		projectClient: project.details.client,
		projectArchitect: project.details.architect,
		projectSize: project.details.size,
		projectValue: project.details.value,
		projectCompleted: project.details.completed,
	}

	const renderHTML = projectTemplate(PROJECT_TEMPLATE_OPTIONS)
	if (!renderHTML || !containerElement) {
		console.log('Container element or project template not found')
	} else {
		containerElement.innerHTML = renderHTML
	}
}

export default initShowSelectedProject