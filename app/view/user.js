const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

class User{
    static users = [
        {
            "username": "rahul",
            "password": "123",
            "id": "b1b84f98-6157-4afc-a67e-622407d25a99"
        }
    ]

    constructor(username,password){
        this.username = username
        this.password = password
    }

    createId(){
        this.id = uuidv4()
    }

    create() {
        this.createId()
        User.users.push(this)
    }

    static getAll(){
        return User.users
    }

    static get(id) {
        let user = _.find(User.users, (user)=> {
            if (user.id == id) return true;
        });
        return user
    }

    static getByUserName(username) {
        let user = _.find(User.users, (user) => {
            if (user.username == username) return true;
        });
        return user
    }
}

module.exports = User;