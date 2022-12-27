import Server from './server';

const Backend = new Server();

class ApiController {
  pressTag = null;

  constructor() {
    const environment = 'production';
    this.root = Backend.clients[environment].root;
    this.key = Backend.clients[environment].key;

    this.headers = new Headers({
      'Content-Type': 'application/json',
      'X-Application-Key': this.key,
    });
  }

  //App

  async setPassword(token, password) {
    const response = await fetch(`${this.root}/recovery`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({ token, password }),
    });

    if (response.status === 204) {
      return true;
    } else {
      throw new Error(response.status);
    }
  }

  async verify(token) {
    const response = await fetch(`${this.root}/verify`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ token }),
    });

    if (response.status === 204) {
      return true;
    } else {
      throw new Error(response.status);
    }
  }
}

export default ApiController;
