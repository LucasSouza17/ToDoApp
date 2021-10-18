import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { GetUserController } from "./useCases/getUser/GetUserController";
import { RefreshTokenUserController } from "./useCases/refreshTokenUser/RefreshTokenUserController";

const router = Router();

const createUserController = new CreateUserController();
const getUserController = new GetUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenUserController.handle);

// Rotas autenticadas
router.get("/users/:id", ensureAuthenticated, getUserController.handle);


export { router };
