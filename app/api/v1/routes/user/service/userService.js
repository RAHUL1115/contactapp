const sequelize = require('../../../../../db/models').sequelize;
const User = require('../../../view/user')
const { BadRequest, UnauthorizedRequest } = require('../../../../../utils/error');

async function login(username, password) {
    let existingUser = await User.getByUserName(username);
    if (!existingUser) {
        throw new UnauthorizedRequest('User dose not exists');
    }

    if (existingUser.username == username && existingUser.password == password) {
        return true
    }

    throw new UnauthorizedRequest('Invalid credentials');
}

async function getAllUser() {
    let data = await User.getAll();
    return data
}

async function getUser(id) {
    let user = await User.get(id);
    return user
}

async function createUser(username,password) {
    const t = sequelize.transaction();
    try {
        let existingUser = await User.getByUserName(username);
        if (existingUser) {
            throw new BadRequest('User already exist');
        }
        let deletedExistingUser = await User.getDeletedByUsername(username);
        if (deletedExistingUser) {
            throw new BadRequest('Username not avalable');
        }
        let user = new User(username, password)
        let result = await user.create();
        return result;
    } catch (error) {
        t.rollback()
        throw error
    }
}

async function updateUser(id, username, password) {
    const t = sequelize.transaction();
    try {
        let user = new User(username, password);
        user.setId(id);
        let result = await user.update();
        return result;
    } catch (error) {
        t.rollback()
        throw error
    }
}


async function deleteUser(id) {
    const t = sequelize.transaction();
    try {
        let result = await User.delete(id)
        return result;
    } catch (error) {
        t.rollback()
        throw error
    }
}


module.exports = {
    login,
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}