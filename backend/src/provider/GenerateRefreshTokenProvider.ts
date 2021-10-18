import dayjs from "dayjs"

import { client } from "../prisma/client"

class GenerateRefreshTokenProvider {
    async execute(userId: string) {
      const expiresIn = dayjs().add(1, "day").unix();

      const generateRefreshToken = await client.refreshToken.create({
        data: {
          userId,
          expiresIn
        },
      });

      return generateRefreshToken;
    }
}

export { GenerateRefreshTokenProvider };