const { v4: uuidv4 } = require('uuid');

class User{
    static users = []

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

    update(id) {
        return User.users
    }

    static getAll(){
        return User.users
    }

    static get(id) {
        return User.users
    }

    static delete(id) {
        return User.users
    }
}

module.exports = User;