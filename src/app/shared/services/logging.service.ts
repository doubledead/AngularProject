export class LoggingService {
  logStatusChange(status: number) {
    console.log('Event status change: ' + status);
  }

  constructor() { }

}
