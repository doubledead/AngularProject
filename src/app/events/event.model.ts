export class Event {
  public id: number;
  public createDate: Date;
  public description: string;
  // public endDate: Date;
  public name: string;
  public statusId: number;
  // public startDate: Date;

  constructor(id: number, createDate: Date, description: string, name: string, statusId: number ) {
    this.id = id;
    this.createDate = createDate;
    this.description = description;
    this.name = name;
    this.statusId = statusId;
  }
}
