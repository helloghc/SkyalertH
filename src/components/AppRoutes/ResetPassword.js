import React, { Component } from 'react';
import styled from 'styled-components';
import ApiController from './api';

const Api = new ApiController();

const Content = styled.div`
  position: relative;
  padding: 3rem;
  display: flex;
  padding: 10em 3em;
  @media only screen and (min-width: 320px) {
    width: 100%;
    margin: 0 auto;
    flex-flow: column wrap;
  }
  @media only screen and (min-width: 992px) {
    width: 1085px;
    margin: 0 auto;
    flex-flow: row wrap;
  }

  .mailAlert {
    color: #ea6911;
  }
  p {
    font-size: 1rem;
    padding: 0.5rem 2rem;
    border-radius: 0.5em;
  }
`;

const Container = styled.div`
  min-height: 700px;
  background: url(img/about/fondoSome.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`;

const Column = styled.div`
  max-width: 480px;
  margin: 0 auto;
  @media only screen and (min-width: 320px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
    margin-bottom: 0;
  }
  a {
    color: #ea6911;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;

const Button = styled.button`
  border-radius: 1rem;
  background: #ea6911;
  color: White;
  border: none;
  padding: 0.7rem;
  font-size: 1.2rem;
  margin-top: 0.5em;
  @media only screen and (min-width: 320px) {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: auto;
  }
`;

const h2 = styled.h2`
  font-size: 3em;
 
  font-weight: bold;
  text-align: center;
  @media only screen and (min-width: 320px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 992px) {
    font-size: 2rem;
  }
`;

export class ResetPassword extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      password: '',
      verification: '',
      success: false,
    };

    this.passwordChange = this._passwordChange.bind(this);
    this.verification = this._verification.bind(this);
    this.submit = this._submit.bind(this);
  }

  _passwordChange(event) {
    this.setState({ alert: '', password: event.target.value });
  }

  _verification(event) {
    this.setState({ alert: '', verification: event.target.value });
  }

  async _submit(event) {
    const { password, verification } = this.state;
    if (!password || !verification) {
      this.setState({ alert: 'Por favor, escribe tu nueva contraseña' });
      return;
    }

    if (password !== verification) {
      this.setState({ alert: 'Las contraseñas deben de ser iguales' });
      return;
    }

    if (password.length < 6) {
      this.setState({
        alert: 'Tu nueva contraseña debe tener al menos 6 caracteres',
      });
      return;
    }

    let token;
    if (this.props.match.params && this.props.match.params.token) {
      token = this.props.match.params.token;
    } else if (this.props.location.search) {
      const params = new URLSearchParams(this.props.location.search);
      token = params.get('token');
    } else {
      this.setState({
        alert:
          'No encontramos tu clave de restauración. Asegúrate de copiar la liga que se envió en tu correo de restauración',
      });
      return;
    }

    try {
      await Api.setPassword(token, password);
      this.setState({ success: true });
    } catch (e) {
      if (e.message === '404') {
        this.setState({
          alert:
            'Clave de restauración expirada. Es posible que exista un correo de restauración más reciente que el que utilizaste.',
        });
      } else {
        this.setState({
          alert: 'Ocurrió un error. Intenta más tarde.' + e.message,
        });
      }
    }

    return;
  }

  render() {
    const { password, verification, success } = this.state;

    return (
      <Container>
        <Content>
          {!success && (
            <Column>
              <h2 style={{ fontSize: '2em',  marginBottom: '0.7em' }}>Cambio de contraseña</h2>
              <div>
                <FormGroup>
                  <Input
                    type="password"
                    placeholder="Ingresa tu nueva contraseña"
                    value={password}
                    onChange={this.passwordChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    placeholder="Confirma tu nueva contraseña"
                    value={verification}
                    onChange={this.verification}
                  />
                </FormGroup>
                <p id="validacion-envio" className="mailAlert">
                  <b>{this.state.alert}</b>
                </p>
                <Button onClick={this.submit}>Actualizar Contraseña</Button>
              </div>
            </Column>
          )}
          {success && (
            <Column>
              <h2 style={{padding: '0.5rem 2rem'}}>¡Contraseña actualizada existosamente!</h2> 
              <p>
                Puedes cerrar esta ventana y acceder a tu cuenta utilizando tu
                nueva contraseña.
              </p>
            </Column>
          )}
        </Content>
      </Container>
    );
  }
}
