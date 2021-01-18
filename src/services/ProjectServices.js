import ApiService from './ApiService'

class ProjectService extends ApiService {
  
  constructor() {
    super('')
  }

  getProjects(userId, header) {
    return this.get(`/projects/list/${userId}`, header)
  }

  getProject(projectId, header) {
    return this.get(`/projects/find/${projectId}`, header)
  }

  saveProject(project, header) {
    return this.post(`/projects/update`, project, header)
  }

}

export default ProjectService