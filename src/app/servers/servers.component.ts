import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created.';
  serverName = 'Test Server';
  serverCreated = false;
  servers = [
    {id: 1, created: new Date(), name: 'Server', status: 'online'},
    {id: 2, created: new Date(), name: 'Server 2', status: 'online'},
    {id: 3, created: new Date(), name: 'Server 3', status: 'online'}
  ];

  // Method executed when component created by Angular
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created. Name is' + this.serverName;
    this.servers.push(
      {
        id: 4,
        created: new Date(),
        name: this.serverName,
        status: 'online'
      }
    );
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
