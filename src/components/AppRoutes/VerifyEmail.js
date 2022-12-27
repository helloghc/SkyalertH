import React, { Component } from 'react';
import styled from 'styled-components';
import ApiController from './api';

const Api = new ApiController();

const Content = styled.div`
  position: relative;
  padding: 3rem;
  display: flex;
  padding-top: 10rem;
  padding-bottom: 10rem;
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
    font-size: 1.5rem;
    padding: 0rem 3rem;
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

const h2 = styled.h2`
  font-weight: bold;
  text-align: center;
  @media only screen and (min-width: 320px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

export class VerifyEmail extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: 'Espera un momento...',
      success: false,
    };

    this.submit = this._submit.bind(this);
  }

  componentDidMount() {
    this._submit();
  }

  async _submit(event) {
    let token;
    if (this.props.match.params && this.props.match.params.token) {
      token = this.props.match.params.token;
    } else if (this.props.location.search) {
      const params = new URLSearchParams(this.props.location.search);
      token = params.get('token');
    } else {
      this.setState({
        title: 'Aviso',
        alert:
          'No encontramos tu clave de verificación. Asegúrate de copiar la liga que se envió en tu correo de verificación',
      });
      return;
    }

    try {
      await Api.verify(token);
      this.setState({ success: true });
    } catch (e) {
      if (e.message === '404') {
        this.setState({
          title: 'Aviso',
          alert:
            'Clave de verificación expirada. Es posible que exista un correo de verificación más reciente que el que utilizaste.',
        });
      } else {
        this.setState({
          title: 'Aviso',
          alert: 'Ocurrió un error. Intenta más tarde.' + e.message,
        });
      }
    }

    return;
  }

  render() {
    const { title, success } = this.state;

    return (
      <Container>
        <Content>
          {!success && (
            <Column>
              <h2
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '2em',
                }}
              >
                {title}
              </h2>
              <div>
                <p id="validacion-envio" className="mailAlert">
                  <b>{this.state.alert}</b>
                </p>
              </div>
            </Column>
          )}
          {success && (
            <Column>
              <h2>¡Correo verificado!</h2>
              <p>
                ¡Gracias! Puedes cerrar esta ventana y continuar utilizando la
                aplicación de SkyAlert.
              </p>
            </Column>
          )}
        </Content>
      </Container>
    );
  }
}
