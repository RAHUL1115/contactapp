const db = require('../../../../models/index');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

class User{
    constructor(username,password){
        this.username = username
        this.password = password
    }

    createId(){
        this.id = uuidv4()
    }

    create() {
        this.createId()
        db.User.create(this)
    }

    static async getAll(){
        let alluser = await db.User.findAll()
        return alluser
    }

    static async get(id) {
        let user = await db.User.findByPk(id,{
            include:{
                model:db.Contact,
                include:{
                    model:db.ContactInfo
                }
            }
        })
        return user.toJSON()
    }

    static async getByUserName(username) {
        let user = await db.User.findOne({where : {username:username}})
        return user
    }
}

module.exports = User;