import { getDBConnection } from "@libs/db-manager"
import { Employee } from "src/entities/Employee"

const create = async (data: Employee): Promise<Employee> => {
    try {
        // console.log('connction creating ...')
        const connction = await getDBConnection();
        const empRepo = connction.getRepository(Employee);
         console.log('connection success')
         console.log(empRepo)
        const response = await empRepo.save(data);
        return response;
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