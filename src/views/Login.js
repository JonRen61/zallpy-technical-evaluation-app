import React from 'react'
import Card from '../components/Card'
import FormGroup from '../components/FormGroup'

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  login = () => {
    console.log(this.state.email)
    console.log(this.state.password)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
            <div className="bs-docs-section">
              <Card title="Login">
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
      </div>
    )
  }

}

export default Login