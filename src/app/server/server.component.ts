import {Component} from '@angular/core';
@Component({
    selector:'server-componment',
    templateUrl: 'server.component.html',
    styles:[`
        h2{
            color: dodgerblue;
        }
    `]
})
export class ServerComponent{
    serverName : string = "No Server";
    serverId: number =0;
    isOnline: boolean = false;
    creationStatus: boolean = false;
    serverCreationStatus: string ="No Server is Created"
    constructor()
    {
        setTimeout (() => { 
            this.creationStatus = true;
        },2000);
        
    }

    onCreateServer(){
        this.serverId = 10; 
        this.isOnline = true;
        this.serverCreationStatus = "Server was created!!!";
    }

    onUpdateServerName(event:Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}