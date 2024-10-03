import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { Comment } from './comment.model';

@Table
export class Video extends Model {
  @Column({ type: DataType.STRING })
  title: string;

  // Relación polimórfica
  @HasMany(() => Comment, {
    foreignKey: 'commentableId',
    constraints: false,
    scope: {
      commentableType: 'video',
    },
  })
  comments: Comment[];
}
