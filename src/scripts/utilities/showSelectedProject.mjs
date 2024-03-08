import { initGetData } from '@js-api/getProjectsData'
import STORE from '@js-store/store'
import projectTemplate from '@p-temp/selectedProject'

const initShowSelectedProject = async (id, container) => {
	if (id === null) {
		console.log("project ID were not transferred")
	}

	await initGetData(id)

	const PROJECT = STORE.PROJECTS.selectedProject[0]

	const templateOptions = setTemplateOptions(PROJECT)
	const renderHTML = projectTemplate(templateOptions)

	if (!renderHTML || !container) {
		console.log('Container element or PROJECT template not found')
	} else {
		container.innerHTML = renderHTML
	}

	const typeOfProject = PROJECT.dataType
	return typeOfProject
}


const setTemplateOptions = (project) => {
	return {
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
		projectImage1: project.introduce.pathToImages.one,
		projectImage2: project.introduce.pathToImages.two,
		projectImage3: project.introduce.pathToImages.three,
		projectImage4: project.introduce.pathToImages.four,
		projectImage5: project.introduce.pathToImages.five,
		projectImage6: project.introduce.pathToImages.seven,
	}
}





export default initShowSelectedProject