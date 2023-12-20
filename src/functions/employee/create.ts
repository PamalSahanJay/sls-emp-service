import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import * as EmpService from './employee-service'
import schema from './schema';
import { Employee } from 'src/entities/Employee';
import { success_200, error_400 } from "@libs/response";

const createEmp: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const empDetails = event.body as any as Employee
    try {
        const response = await EmpService.create(empDetails);
        return success_200({
            response
        });
    } catch (error) {
        return error_400({
            error
        })
    }
};

export const main = middyfy(createEmp);
