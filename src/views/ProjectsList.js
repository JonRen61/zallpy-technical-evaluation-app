import React from 'react'

import { withRouter } from 'react-router-dom'
import moment from 'moment'
import ProjectService from '../services/ProjectServices'
class ProjectsList extends React.Component {
  
  state = {
    projects: []
  }

  constructor() {
    super()
    this.service = new ProjectService();
  }

  componentDidMount() {
    const storageUser = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: { Authorization: `Bearer ${storageUser.token}` }
    };
    this.service.getProjects(storageUser.userId, config)
    .then( response => { 
      this.setState({ projects: response.data }) })
    .catch(err => 
      console.error(err.response));
  }

  onClickUpdate = (projectId) => {
    this.props.history.push(`/projects/update/${projectId}`)
  }
  
  render() {
    return (
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Nome do Projeto</th>
            <th scope="col">Horas Apontadas</th>
            <th scope="col">Data de registro</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.state.projects.map(project =>
            <tr>
              <td>{project.name}</td>
              <td>{project.appointedHours}</td>
              <td>{!!project.registerDate ? moment.utc(project.registerDate, 'YYYY-MM-DDThh:mm:ss.fff').format('DD-MM-YYYY') : ''}</td>
              <td><button type="button" class="btn btn-info" onClick={() => this.onClickUpdate(project.id)}>Editar</button></td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

export default withRouter(ProjectsList)