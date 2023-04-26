import { UserModel } from './user.model';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';


export const CurrentUser = createParamDecorator(
  (data: keyof UserModel, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log(request);
    const user = request.user;

    return data ? user[data] : user;
  },
);