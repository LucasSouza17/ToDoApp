import dayjs from "dayjs";
import { client } from "../../prisma/client";
import { GenerateRefreshTokenProvider } from "../../provider/GenerateRefreshTokenProvider";
import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";

class RefreshTokenUserUseCase {
  async execute(refresh_token: string) {

    const refreshToken = await client.refreshToken.findFirst({
      where: {
        id: refresh_token
      }
    });

    const user = await client.user.findFirst({
      where: {
        id: refreshToken.userId
      }
    })

    if(!refreshToken) {
      throw new Error("Refresh token invalid");
    }
 
    const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn));
    
    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(refreshToken.userId);

    if(refreshTokenExpired) {
      await client.refreshToken.deleteMany({
        where: {
          userId: refreshToken.userId
        }
      })

      const generateRefreshTokenProvider = new GenerateRefreshTokenProvider();
      const newRefreshToken = await generateRefreshTokenProvider.execute(refreshToken.userId);

      return { token, refreshToken: newRefreshToken }
    }

    return { token };

  }
}

export { RefreshTokenUserUseCase };
