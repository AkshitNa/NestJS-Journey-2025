import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('content')
export class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'bytea' })
  content: Buffer;
}
