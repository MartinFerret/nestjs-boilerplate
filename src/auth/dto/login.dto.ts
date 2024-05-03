import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6,{ message: "Password must be longer than or equal to 6 characters" })
  @Transform(({ value }) => value.trim())
  password: string;
}
