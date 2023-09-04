import { Controller } from '@nestjs/common';
import {
  nestControllerContract,
  NestControllerInterface,
  NestRequestShapes,
  TsRest,
  TsRestRequest,
} from '@ts-rest/nest';
import { IPostsContract, postsContract } from 'contract';

const c: IPostsContract = nestControllerContract(postsContract);
type RequestShapes = NestRequestShapes<typeof c>;

const _post = {
  id: 'z.string()',
  title: 'z.string()',
  body: 'z.string()',
};

@Controller('')
export class PostController implements NestControllerInterface<typeof c> {
  constructor() {}

  @TsRest(c.getPost)
  async getPost(@TsRestRequest() { params: { id } }: RequestShapes['getPost']) {
    console.log({ id });
    const post = { ..._post };

    console.log({ id });

    return { status: 200 as const, body: post };
  }

  @TsRest(c.createPost)
  async createPost(@TsRestRequest() { body }: RequestShapes['createPost']) {
    console.log({ body });
    const post = { ..._post };

    return { status: 201 as const, body: post };
  }
}
