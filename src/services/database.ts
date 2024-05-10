
import { AppDataSource } from "../data-source"

export class Database { 
  constructor() {
        AppDataSource.initialize().then(async () => {

                
            
                console.log(" Type ORM workds and init well the db.")
            
            }).catch(error => console.log(error))
  }
 

   
}
