import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { RefreshTokenUserController } from "./useCases/refreshTokenUser/RefreshTokenUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenUserController.handle);

router.get("/tasks", ensureAuthenticated, (request, response) => {
  return response.json([
    {
      id: 1,
      title: "Limpar quarto",
      description: "Com cera e com lenço umidecido",
    },
    {
      id: 2,
      title: "Fazer tarefa",
      description: "lembrar de enviar até o dia 12/04",
    },
    {
      id: 3,
      title: "Estudar",
      description: "Estudar frontend com nextjs",
    },
  ]);
});

export { router };
