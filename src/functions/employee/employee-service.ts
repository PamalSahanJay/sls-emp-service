import { getDBConnection } from "@libs/db-manager"
import { Employee } from "src/entities/Employee"

const create = async (data: Employee): Promise<Employee> => {
    try {
        // console.log('connction creating ...')
        const empRepo = (await getDBConnection()).getRepository(Employee);
         console.log('connection success')
         console.log(empRepo)
        return await empRepo.save(data);
    } catch (error) {
        throw error;
    }
}

const get = async () => {
    // try {
    //     const empRepo = await getConnection();
    //     return empRepo.findOneBy({ id })
    // } catch (err) {
    //     throw err;
    // }

}

const getAll = async () => {
    // try {
    //     const empRepo = await getConnection();
    //     return empRepo.find()
    // } catch (error) {
    //     throw error
    // }
}

const update = async () => {

}

const del = async () => {

}


export {
    create,
    get,
    getAll,
    update,
    del
}