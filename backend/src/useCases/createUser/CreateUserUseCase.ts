import { client } from "../../prisma/client";
import { hash } from "bcryptjs"

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {

  async execute({name, email, password}: IUserRequest) {

    // Verifica se o usuário já está cadastrado
    const userAlreadyExists = await client.user.findFirst({
      where: {
        email
      }
    })

    if(userAlreadyExists) {
      throw new Error("User already exists!");
    }

    // Cadastra usuário
    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    })

    return user;

  }
}

export { CreateUserUseCase };
