import axios from 'axios'
import  Server  from './server'

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

    //News

    async getTags() {
        const response = await fetch(`${this.root}/article-tags`, {
            method: 'GET',
            headers: this.headers,
        });

        return response.json();  
    }

    filterbyTags(array) {
        if (array !== undefined && array.length !== 0) {
            const filterTags = axios.get(`${Backend.URL}/posts&${array}`)
                .then(response => {
                    return response
                })
                .catch(error => {
                    console.log(error)
                })
            return filterTags;
        }else{
            throw 'Id param is required.';
        }
    }

    async checkTag() {
        if (!ApiController.pressTag) {
            const response = await this.getTags();
            const pressTag = response.data.tags.find(tag => tag.name === 'Comunicados de Prensa');
            if (pressTag) {
                ApiController.pressTag = pressTag.id;
            }
        }
    }

    async getAllArticles() {
        await this.checkTag();
        const response = await fetch(`${this.root}/articles/feed?tags=${ApiController.pressTag}`, {
            method: 'GET',
            headers: this.headers,
        });

        return response.json();  
    }

    async getAllArticlesPaged(page, epp = 4) {
        await this.checkTag();
        const response = await fetch(`${this.root}/articles/feed?tags=${ApiController.pressTag}&page=${page}&epp=${epp}`, {
            method: 'GET',
            headers: this.headers,
        });

        return response.json();        
    }

    async getOneArticle(id) {
        const response = await fetch(`${this.root}/articles/${id}`, {
            method: 'GET',
            headers: this.headers,
        });

        return response.json();  
    }

    getCommentsPostDetail(id) {
        if (id ==! undefined){
            const commentsArticle = axios.get(`${Backend.URL}/comments/${id}`)
                .then(response => {
                    return response
                })
                .catch(error => {
                    console.log(error)
                })
            return commentsArticle;
        }else{
            throw 'Id param is required.';
        }
    }

    getSearch(search) {
        if (search !== undefined) {
            const user = axios.get(`${Backend.URL}/posts&search=${search}&categories=2`)
                .then(response => {
                    return response
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            return user;
        }else{
            throw 'Search param is required.';
        }
    }

    // pipedrive

    getUsersforPipe() {
        const user = axios.get(`${Backend.URLPipedrive}/users`,
            {
                params: {
                    api_token: `${Backend.Token}`
                }
            })
            .then(response => {
                return response
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        return user;
    }

    addUserPipe(name, email, phone, company) {
        const user = axios.post(`${Backend.URLPipedrive}/persons?api_token=${Backend.Token}`,
            {
                name: name,
                email: email,
                phone: phone,
                visible_to:'1',
                org_id: company
            })
            .then(response => {
                return response
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        return user;
    }

    addOrganizationPipe(nameCompany, peoples) {
        const user = axios.post(`${Backend.URLPipedrive}/organizations?api_token=${Backend.Token}`,
            {
                name: nameCompany,
                people_count: peoples,
            })
            .then(response => {
                return response
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        return user;
    }

    addLeadPipe(nameCompany, person, org) {
        const userLead = axios.post(`${Backend.URLPipedrive}/deals?api_token=${Backend.Token}`,
            {
                title: nameCompany,
                visible_to: 1,
                person_id: person,
                org_id: org,
            })
            .then(response => {
                return response
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        return userLead;
    }

    getPicURL(idOrSlug) {
        const name = id => `/media/images/${id}/pic`
        const url = this.root + name(idOrSlug);
        return url;
    }

    suscribeToListChimp(mail){
    

        const member = axios.get(`https://user:fe761ddfcd265adc9f089b009f061f46-us7@us7.api.mailchimp.com/3.0/lists/083e6f00d6/members`,
            {
               headers: {
                   'Authorization': 'Basic  dXNlcjpmZTc2MWRkZmNkMjY1YWRjOWYwODliMDA5ZjA2MWY0Ni11czc=',
                //    'WWW-Authenticate': 'Basic fe761ddfcd265adc9f089b009f061f46-us7',
                   'WWW-Authenticate': 'Basic dXNlcjpmZTc2MWRkZmNkMjY1YWRjOWYwODliMDA5ZjA2MWY0Ni11czc=',
                   'X-Frame-Options': 'SAMEORIGIN',
                   'X-Frame-Options': 'DENY',
                   'Proxy-Authorization':'Basic dXNlcjpmZTc2MWRkZmNkMjY1YWRjOWYwODliMDA5ZjA2MWY0Ni11czc=',
                   'Accept-Encoding': 'gzip;q=1.0, identity; q=0.5, *;q=0',
                   'Content-Type':'application/json',
                   'Cache-Control': 'no-cache',
                   'Postman-Token': '332b9ed9-df6a-3e76-2f10-45a47a6d7150'

               },
               crossDomain: true,
           
             
            },{
                 username:'PruebaRT',
            password:'fe761ddfcd265adc9f089b009f061f46-us7'
            })
            .then(response => {
                return response
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        return member;
    }
    
    async getAllOrganizations(){
        const response = await fetch(`${Backend.amazon.root}/organizations/selected`, {
            method: 'GET',
            headers: {
                'x-api-key': Backend.amazon.key,
                'Content-Type': 'application/json',
            },
        });

        return response.json();
    }

    async createLead(body){
        try {
            // const environment = process.env.NODE_ENV || 'staging';
            const api = Backend.aws['production'];
            const endpoint = '/contact-form';
            
            const response = await axios.post(
                `${api.root}${endpoint}`,
                body,
                {
                    headers: api.headers
                }
            );
        
            return response.status;
          } catch (error) {
            console.error(error);
            return error.status;
          }
    }

    async getAllStatesMX(){
        try{
            const {root: url, endpoints: { states }, headers} = Backend.inegi;
            const response = await axios.get(`${url}${states}`,
                { headers }
            );
            return response.data;
        } catch (error){
            console.log(error);
            return error
        }
    }

    async getState(id){
        try{
            const {root: url, endpoints: { state }, headers} = Backend.inegi;
            const response = await axios.get(`${url}${state(id)}`,
                { headers }
            );
            return response.data;
        } catch (error){
            console.log(error);
            return error
        }
    }
}

export default ApiController;
