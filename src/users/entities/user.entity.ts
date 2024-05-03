import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class User {
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: "user" })
  rol: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
