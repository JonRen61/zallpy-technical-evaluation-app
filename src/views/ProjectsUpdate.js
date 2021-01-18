import React from 'react'

import Card from '../components/Card'
import { withRouter } from 'react-router-dom'
import ProjectService from '../services/ProjectServices'
import FormGroup from '../components/FormGroup'

class ProjectsUpdate extends React.Component {

  state = {
    name: "",
    registerDate: "",
    appointedHours: 0,
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
    this.service.getProject(this.props.match.params.id, config)
    .then( response => { 
      this.setState({ ...response.data }) })
    .catch(err => 
      console.error(err.response));
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  getSaveObject = () => ({
    id: Number(this.props.match.params.id),
    name: this.state.name,
    registerDate: this.state.registerDate,
    appointedHours: this.state.appointedHours
  })

  submit = () => {
    console.log(`test`)
    const storageUser = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: { Authorization: `Bearer ${storageUser.token}` }
    };
    this.service
      .saveProject(this.getSaveObject(), config)
      .then(response => {
          this.props.history.push('/projects')
      })
  }

  cancel = () => {
    this.props.history.push("/projects")
  }

  render() {
    return (
      <Card>
        <div className="row">
          <div className="col-md-6">
            <FormGroup id="inputName">
              <input type="text" value={this.state.name} name="name" label="Name: " className="form-control" disabled />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormGroup id="inputRegisterDate">
              <input type="date" name="registerDate" value={this.state.registerDate} onChange={this.handleChange} label="Data de registro: " className="form-control" />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormGroup id="inputAppointedHours">
              <input type="number" name="appointedHours" value={this.state.appointedHours} onChange={this.handleChange} label="Horas apontadas: " className="form-control" />
            </FormGroup>
          </div>
        </div><br />
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-success" onClick={() => this.submit()}>Salvar</button>
            <button className="btn btn-danger" onClick={() => this.cancel()}>Cancelar</button>
          </div>
        </div>
      </Card>
    )
  }

}

export default withRouter(ProjectsUpdate)