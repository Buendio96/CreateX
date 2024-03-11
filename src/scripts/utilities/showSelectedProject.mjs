import { initGetData } from '@js-api/getProjectsData'
import STORE from '@js-store/store'
import projectTemplate from '@p-temp/selectedProject'

const initShowSelectedProject = async (id, container) => {
	if (id !== null) {
		await initGetData(id)
	}
	const PROJECT = STORE.PROJECTS.selectedProject[0]

	const templateOptions = setTemplateOptions(PROJECT)
	const renderHTML = projectTemplate(templateOptions)

	if (!renderHTML || !container) {
		console.log('Container element or PROJECT template not found')
	} else {
		container.innerHTML = renderHTML
	}

	const typeOfProject = PROJECT?.dataType || null

	return typeOfProject
}

const setTemplateOptions = (project) => {
	return {
		projectId: project?.id || null,
		projectName: project?.name || 'Nameless',
		projectDescription: project?.introduce?.text || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Obcaecati a ipsam illo voluptatem esse reiciendis ut accusamus rem sapiente! Quasi.',
		projectGoal: project?.introduce?.goal || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Obcaecati a ipsam illo voluptatem esse reiciendis ut accusamus rem sapiente! Quasi.',
		projectLocation: project?.details?.location || 'Not found',
		projectClient: project?.details?.client || 'Not found',
		projectArchitect: project?.details?.architect || 'Not found',
		projectSize: project?.details?.size || 'Not found',
		projectValue: project?.details?.value || 'Not found',
		projectCompleted: project?.details?.completed || 'Not found',
		projectImage1: project?.introduce?.pathToImages?.one || 'not-found.png',
		projectImage2: project?.introduce?.pathToImages?.two || 'not-found.png',
		projectImage3: project?.introduce?.pathToImages?.three || 'not-found.png',
		projectImage4: project?.introduce?.pathToImages?.four || 'not-found.png',
		projectImage5: project?.introduce?.pathToImages?.five || 'not-found.png',
		projectImage6: project?.introduce?.pathToImages?.six || 'not-found.png',
	}
}





export default initShowSelectedProject