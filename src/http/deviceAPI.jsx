import { $authHost, $host } from './index'

export const createType = async (type) => {
    try {
        const { data } = await $authHost.post('api/type', type)
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export const removeType = async (type) => {
    try {
        console.log(type)
        const { data } = await $authHost.post('api/type/rm', type)
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchTypes = async () => {
    try {
        const { data } = await $host.get('api/type')
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export const createBrand = async (type) => {
    try {
        const { data } = await $authHost.post('api/brand', type)
        return data

    } catch (error) {
        console.log(error.message)
    }
}

export const fetchBrands = async () => {
    try {
        const { data } = await $host.get('api/brand')
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export const createDevice = async (device) => {
    try {
        const { data } = await $authHost.post('api/device', device)
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchDevices = async ({ typeId = null, brandId, page, limit = 5000 } = {}) => {
    try {
        const { data } = await $host.get('api/device', { params: { typeId, brandId, page, limit } })
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchOneDevice = async (id) => {
    try {
        const { data } = await $host.get('api/device/' + id)
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export const removeDevice = async (id) => {
    try {
        const { data } = await $host.get('api/device/rm/' + id)
        return data
    } catch (error) {
        console.log(error.message)
    }
}
