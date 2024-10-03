import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './entities/comment.model';

@Injectable()
export class SocialService {
  constructor(
    @InjectModel(Comment)
    private readonly commentModel: typeof Comment,
  ) {}

  async createCommentForPost(postId: number, content: string) {
    return this.commentModel.create({
      content,
      commentableId: postId,
      commentableType: 'post',
    });
  }

  async createCommentForVideo(videoId: number, content: string) {
    return this.commentModel.create({
      content,
      commentableId: videoId,
      commentableType: 'video',
    });
  }
}
