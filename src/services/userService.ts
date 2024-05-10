import { Repository } from "typeorm";
import { AppDataSource } from "../data-source"; 
import { AbstractService } from "./AbstractService"; 

// import { Task } from "../models/task";
import { User } from "../models/user";

export class UserService  extends AbstractService<User> {
 
  constructor( repository: Repository<User>) { 
    super(AppDataSource.getRepository(User))
  } 
  
}