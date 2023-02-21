import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository"
import { CreateUserUseCase } from "./CreateUserUseCase";

describe('CreateUser', () => {
  let userRepository: InMemoryUsersRepository;
  let createUser: CreateUserUseCase;

  beforeAll(() => {
    userRepository = new InMemoryUsersRepository();
    createUser = new CreateUserUseCase(userRepository);
  })

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'admin',
      email: 'administrador@gmail.com',
      password: '1234'
    });

    expect(user).toHaveProperty('id');
  })
})
