import React from 'react'

import axios from 'axios'
class ProjectsList extends React.Component {
  
  state = {
    projects: []
  }

  componentDidMount() {
    const token = JSON.parse(localStorage.getItem('user')).token;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    axios.get('http://localhost:8081/projects/list', config).then( response => { this.setState({ projects: response.data }) }).catch(err => console.error(err.response));
  }
  
  render() {
    return (
      <div>
        {this.state.projects.map(project => project)}
      </div>
    )
  }
}

export default ProjectsList