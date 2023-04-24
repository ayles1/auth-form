import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';
import {prop} from "@typegoose/typegoose";
import {UserModel} from "../user/user.model";

export interface TokenModel extends Base {
}

export class TokenModel extends TimeStamps {
    @prop({ref: () => UserModel})
    user: UserModel;

    @prop()
    refreshToken: string
}
