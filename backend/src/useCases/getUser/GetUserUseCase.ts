import { client } from "../../prisma/client";

class GetUserUseCase {
  async execute(userId: string) {
    const user = await client.user.findFirst({
      where: {
        id: userId
      }
    });

    if(!user) {
      throw new Error("UserId is invalid!");
    }

    return user;
  }
}

export { GetUserUseCase };
