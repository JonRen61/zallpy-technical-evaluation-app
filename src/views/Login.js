import React from 'react'
import Card from '../components/Card'
import FormGroup from '../components/FormGroup'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Login extends React.Component {

  state = {
    email: '',
    password: '',
    errorMessage: null,
  }

  login = () => {
    axios
    .post('http://localhost:8081/login',  {
      email: this.state.email, 
      password: this.state.password
    }).then(response => {
      localStorage.setItem('user', JSON.stringify({userId: response.data.authenticatedUser.id, email: response.data.authenticatedUser.email, token: response.data.authenticatedUser.token}))
      this.props.history.push('/projects')
    }).catch(err => {
      this.setState({errorMessage: 'Usuário inválido'})
    })
  }

  render() {
    return (
        <div className="row">
          <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
            <div className="bs-docs-section">
              <Card title="Login">
              <div className="row">
                <span>{this.state.errorMessage}</span>
              </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bs-component">
                      <fieldset>
                        <FormGroup label="Email: *" htmlFor="exampleInputEmail">
                          <input type="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Digite o E-mail" />
                        </FormGroup>
                        <FormGroup label="Password: *" htmlFor="exampleInputPassword">
                          <input type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})} className="form-control" id="exampleInputPassword" placeholder="Password" />
                        </FormGroup><br />
                        <button onClick={this.login} className="btn btn-success">Entrar</button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
    )
  }

}

export default withRouter( Login)