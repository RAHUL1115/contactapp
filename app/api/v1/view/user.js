const db = require('../../../db/models');
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

    setId(id){
        this.id = id;
    }

    async create() {
        this.createId()
        return await db.User.create(this)
    }

    async update() {
        return await db.User.update(this, {where: {id: this.id}})
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
        if(user){
            return user.toJSON()
        }else{
            throw new Error("No user details found for userid")
        }
    }

    static async getByUserName(username) {
        let user = await db.User.findOne({ where: { username: username } })
        return user
    }
    
    static async getDeletedByUsername(username) {
        let user = await db.User.findOne({ where: { username: username }, paranoid: false })
        return user
    }

    static async delete(id) {
        let alluser = await db.User.destroy({where : {id:id,}});
        return alluser;
    }
}

module.exports = User;