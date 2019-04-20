import { axios } from './axios';

export default{
    authenticateUser(credentials){
        axios.post('login',credentials)
        .then(response=> {
            return Promise.resolve(response.data);
        })
        .catch(error=> {
            return Promise.reject(error.response.data);            
        })
    },

    Logout(){
        axios.get('logout')
        .then(response=>{
            return Promise.resolve(response.data);
        })
        .catch(error=>{
            return Promise.reject(error.response.data);
        });
    },

    getUsers(){
        axios.get('users')
        .then(response=>{
            return Promise.resolve(response.data);
        })
        .catch(error =>{
            return Promise.reject(error.response.data);
        })
    },
    AddUser(user){
        axios.post('user',user)
        .then(response =>{
            return Promise.resolve(response.data);
        })
        .catch(error => {
            return Promise.reject(error.response.data);
        })
    }
}

