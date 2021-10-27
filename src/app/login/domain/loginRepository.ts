import { Login } from './login';

export interface LoginRepository {
  login(login: Login): Promise<void>;
}