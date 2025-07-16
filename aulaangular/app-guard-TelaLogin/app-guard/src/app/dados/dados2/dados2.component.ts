import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../serviceAPI/api.service';



@Component({
  selector: 'app-dados2',
  imports: [CommonModule],
  templateUrl: './dados2.component.html',
  styleUrl: './dados2.component.css'
})
export class Dados2Component implements OnInit {

email:any[] = [];
  constructor(private http: ApiService) { }

  ngOnInit(): void {

    this.http.getUsuarios().subscribe(data => {
      this.email = data.map(user => user);
      console.log(this.email);
    });
  }


}