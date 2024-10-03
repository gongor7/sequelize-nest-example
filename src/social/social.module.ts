import { Module } from '@nestjs/common';
import { Post } from './entities/post.model';
import { Video } from './entities/videos.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from './entities/comment.model';
import { SocialService } from './social.service';
import { SocialController } from './social.controller';

@Module({
  controllers: [SocialController],
  providers: [SocialService],
  imports: [SequelizeModule.forFeature([Comment, Post, Video])],
})
export class SocialModule {}
