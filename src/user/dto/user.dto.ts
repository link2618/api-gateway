import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserDto {
    @ApiProperty({ description: 'the name for user', default: 'Nombre Swagger', type: String})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly username: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}