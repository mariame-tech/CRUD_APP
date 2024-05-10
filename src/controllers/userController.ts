import { AppDataSource } from "../data-source";
// import { Message } from "../models/message";
//  import { MessageService } from "../services/messageService";
import { UserService } from "../services/userService";
import { User } from "../models/user";
import { Request, Response } from "express";

export class UserController {
    private UserService: UserService;
  
    constructor() {
      AppDataSource.initialize().then(async () => {
  
        this.UserService = new UserService(AppDataSource.getRepository(User));   
              
        console.log(" Type ORM workds and init well the db.")
    
    }).catch(error => console.log(error)) ;
      
    }
  
    async getAll(req: Request, res: Response) {
      try {
        const users = await this.UserService.getAll({});
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  
    async getById(req: Request, res: Response) {
      try {
        const task = await this.UserService.getById({ id: Number(req.params.id) });
        if (task) {
          res.json(task);
        } else {
          res.sendStatus(404);
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  
    async create(req: Request, res: Response) {
      const { fullName, email } = req.body;
      if (fullName === undefined || email === undefined) {
        res.status(400).json({ message: "Request body does not match contract" });
      } else {
        try {
          const user: User = new User();
          user.fullName = fullName;
          user.email = email;
          const data = await this.UserService.create(user);
          res.status(201).json(data);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
    }
  
    async update(req: Request, res: Response) {
      try {
        const user: User = req.body;
        user.id = Number(req.params.id);
        const data = await this.UserService.update({ id: user.id }, user);
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  
    async delete(req: Request, res: Response) {
      try {
        const id = Number(req.params.id);
        const result = await this.UserService.delete(id);
        res.sendStatus(204);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  }