
import { Component } from '@angular/core';

@Component({
 selector: 'app-server',
 templateUrl: './server.component.html'
})

export class ServerComponent{
  serverId:number = 10;
  serverStatus:string = '';

constructor() {
  this.serverStatus = Math.random() > .5 ? 'Offline' : 'Online';
}

getServerStatus() {
  return this.serverStatus;
}
}
