import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Profile } from './profile.entity';

@Entity('profiles_follows')
@Unique(['follower_profile_id', 'followed_profile_id'])
export class ProfileFollow {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  follower_profile_id: string;

  @Column({ type: 'uuid' })
  followed_profile_id: string;

  @Column({ type: 'boolean', nullable: true })
  accepted: boolean;

  @CreateDateColumn()
  created_at: Date;

  @Column({ type: 'uuid' })
  created_by: string;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'uuid', nullable: true })
  updated_by: string;

  // Relations
  @ManyToOne(() => Profile, profile => profile.following)
  @JoinColumn({ name: 'follower_profile_id' })
  followerProfile: Profile;

  @ManyToOne(() => Profile, profile => profile.followers)
  @JoinColumn({ name: 'followed_profile_id' })
  followedProfile: Profile;
}
