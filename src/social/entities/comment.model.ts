import {
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Post } from './post.model';
import { Video } from './videos.model';

@Table
export class Comment extends Model {
  @Column({ type: DataType.STRING })
  content: string;

  @Column({ type: DataType.INTEGER })
  commentableId: number;

  @Column({ type: DataType.STRING })
  commentableType: string;

  // Relación polimórfica
  @BelongsTo(() => Post, {
    foreignKey: 'commentableId',
    constraints: false,
  })
  post: Post;

  @BelongsTo(() => Video, {
    foreignKey: 'commentableId',
    constraints: false,
  })
  video: Video;
}
