import { Component } from '@angular/core';

@Component({
  selector: 'user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {
  username: string="";
  isCreated: boolean = false;
  isEmpty: boolean = true;
  checkEmpty(){
    if(this.username.length > 0){
      
      
      return false;
    }
    else{
      return true;
    }
  }

  clearTextField(){
    this.isCreated = true;
    this.username = "";
  }    
}
