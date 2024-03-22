import { ExecutionContext, InternalServerErrorException, createParamDecorator } from "@nestjs/common";

export const GetUser = createParamDecorator(
    (data, context: ExecutionContext) => {
        const req = context.switchToHttp().getRequest();
        const user = req.user;
        if (!user) throw new InternalServerErrorException('User not found (request)');
        return user;
    }
);