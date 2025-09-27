import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { ProfileFollow } from './profile-follow.entity';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  user_id: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 100 })
  display_name: string;

  @Column({ type: 'date' })
  birthday: Date;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  avatar_url: string;

  @Column({ type: 'boolean', default: true })
  is_public: boolean;

  @CreateDateColumn()
  created_at: Date;

  @Column({ type: 'uuid' })
  created_by: string;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'uuid', nullable: true })
  updated_by: string;

  @Column({ type: 'boolean', default: false })
  deleted: boolean;

  // Relations
  @ManyToOne(() => User, user => user.profiles)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => ProfileFollow, follow => follow.followerProfile)
  following: ProfileFollow[];

  @OneToMany(() => ProfileFollow, follow => follow.followedProfile)
  followers: ProfileFollow[];
}
