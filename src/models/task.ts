import { Column, Entity, EntitySchema, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("nvarchar")
    title: string;

    @Column("nvarchar")
    description: string;

    @Column("timestamp",
        { default: new Date().toISOString().split('T')[0] + ' 23:59:59' })
    dueDate: Date;

    @Column({ default: false })
    isFinished: boolean;
}

const TaskSchema = new EntitySchema({
    name: 'Task',
    tableName: 'tasks',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true
        },
        title: {
            type: 'nvarchar'
        },
        description: {
            type: 'nvarchar'
        },
        dueDate: {
            type: 'timestamp',
            default: new Date().toISOString().split('T')[0] + ' 23:59:59',
        },
        isFinished: {
            type: 'boolean',
            default: false
        }
    }
});

// export default TaskSchema;
