import { Module } from '@nestjs/common';
import { PostController } from './posts.controller';

@Module({
  controllers: [PostController],
  providers: [],
})
export class PostsModule {}
