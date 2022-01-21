import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class PassangerDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
}