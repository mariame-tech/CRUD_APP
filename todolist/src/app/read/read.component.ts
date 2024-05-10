import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit{
    constructor(private service:ApiserviceService){}
    ngOnInit(): void{
      this.service.getAllDatas().subscribe((res)=>{
        console.log(res,"res===>");
      })

    }
    
}
