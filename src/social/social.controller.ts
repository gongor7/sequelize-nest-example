import { Controller, Post, Body, Param } from '@nestjs/common';
import { SocialService } from './social.service';

@Controller('comments')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}
//   console.log('2sad');
  @Post('post/:postId')
  createCommentForPost(
    @Param('postId') postId: number,
    @Body('content') content: string,
  ) {
    console.log('sdajaks');
    return this.socialService.createCommentForPost(postId, content);
  }

  @Post('video/:videoId')
  createCommentForVideo(
    @Param('videoId') videoId: number,
    @Body('content') content: string,
  ) {
    return this.socialService.createCommentForVideo(videoId, content);
  }
}
