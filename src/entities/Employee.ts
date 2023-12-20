import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('employee')
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({type: String})
    name: string
    @Column({type: String})
    designation: string
    @Column({type: String})
    city: string
}