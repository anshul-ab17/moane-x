import bcrypt from "bcrypt"

export async function hasedPassword(password:string){
    return bcrypt.hash(password,10)
}

export async function verifyPassword(
    password:string,
    hash:string
) {
    return bcrypt.compare(password,hash)
}