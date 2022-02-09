const { Type, Device } = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res) {
        const { name } = req.body
        const type = await Type.create({ name })
        return res.json(type)
    }

    async remove(req, res) {
        const { name, id } = req.body
        const type = await Type.findOne({ name })
        let devices = await Device.findAndCountAll({ where: { typeId: id } })
        console.log(devices.rows)
        for (let device of devices.rows) {
            await device.destroy();
        };
        await type.destroy();
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()
