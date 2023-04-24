import {Injectable, NotFoundException, UnauthorizedException} from "@nestjs/common";
import {UserModel} from "./user.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {InjectModel} from "nestjs-typegoose";
import {UserDto} from "./user.dto";
import {genSalt, hash} from "bcryptjs";
import {Types} from "mongoose";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>
    ) {
    }

    async getById(_id: Types.ObjectId) {
        const user = await this.UserModel.findById(_id, "-password, -__v");
        if (!user) throw new UnauthorizedException("User not found");
        return user;
    }


    async updateProfile(_id: Types.ObjectId, dto: UserDto) {
        const user = await this.getById(_id);
        const sameUser = await this.UserModel.findOne({ email: dto.email });
        if (sameUser && String(_id) !== String(sameUser._id)) throw new NotFoundException("Email is taken");
        if (dto.password) {
            const salt = await genSalt(10);
            user.password = await hash(dto.password, salt);
        }
        user.email = dto.email;
        user.avatarPath = dto.avatarPath;
        return await user.save();
    }

}
