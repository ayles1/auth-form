import {Body, Controller, HttpCode, Param, Put, UsePipes, ValidationPipe} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserDto} from "./user.dto";
import {Auth} from "../auth/auth.decorator";
import {CurrentUser} from "./user.decorator";
import {Types} from "mongoose";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {
    }


    // @HttpCode(200)
    // @Get("profile")
    // @Auth()
    // async getProfile(@CurrentUser("_id") _id: Types.ObjectId) {
    //     return this.userService.getUserProfile(_id);
    // }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put("profile")
    @Auth()
    async updateProfile(@CurrentUser("_id") _id: Types.ObjectId, @Body() dto: UserDto) {
        return this.userService.updateProfile(_id, dto);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put(":id")
    @Auth()
    async updateUser(@Param("id") _id: Types.ObjectId, @Body() dto: UserDto) {
        return this.userService.updateProfile(_id, dto);
    }


}
