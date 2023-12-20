// import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
// import { middyfy } from '@libs/lambda';
// import * as EmpService from './employee-service'
// import schema from './schema';
// import { success_200, error_400 } from "@libs/response";

// const fetchEmp: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
//     let empployeeId = event.pathParameters?.id;
//     try {
//         const response = EmpService.get(empployeeId);
//         return success_200({
//             response
//         });
//     } catch (error) {
//         return error_400({
//             error
//         })
//     }
// };

// export const main = middyfy(fetchEmp);
