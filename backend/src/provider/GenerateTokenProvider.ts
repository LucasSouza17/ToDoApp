import { sign } from "jsonwebtoken"

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({userId: userId}, process.env.JWT_SECRET_KEY, {
      subject: userId,
      expiresIn: "2h"
    });

    return token;
  }
}

export { GenerateTokenProvider };