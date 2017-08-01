import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  id: number;
  name: string;
  status: string;

  @Input() server: {
    id: number,
    created: Date,
    name: string,
    status: string
  };

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
