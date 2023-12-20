import { Employee } from "src/entities/Employee"
import { DataSource, EntityManager } from "typeorm"

let PostgresDataSource: DataSource

const getDBConnection = async (): Promise<EntityManager> => {

  if (PostgresDataSource && PostgresDataSource.isInitialized) {
    console.log('connection is already available')
    return PostgresDataSource.manager
  }
  else {
    console.log("connction not available. creating new one ")
    const PostgresDataSource = new DataSource({
      applicationName: 'sls-emp-service',
      type: "postgres",
      host: "employee-db-instance-1.cwvzaedbozps.us-east-1.rds.amazonaws.com",
      port: 5432,
      username: "postgres",
      password: "Ucsc1234",
      schema: "public",
      database: "postgres",
      connectTimeoutMS: 30000,
      synchronize: true,
      logging: false,
      useUTC: true,
      entities: [
        Employee
      ],
    })
    return await PostgresDataSource
      .initialize()
      .then(() => {
        console.log("creating manager")
        console.log(PostgresDataSource.manager)
        return PostgresDataSource.manager
      })
      .catch((e) => {
        console.log('error while creating the connection')
        throw new Error(e)
      })
  }
};

export { getDBConnection }

