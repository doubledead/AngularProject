export class Account {
  public id: number;
  public createDate: Date;
  public description: string;
  public primaryFullName: string;
  public statusId: number;

  constructor(id: number, createDate: Date, description: string, primaryFullName: string, statusId: number) {
    this.id = id;
    this.createDate = createDate;
    this.description = description;
    this.primaryFullName = primaryFullName;
    this.statusId = statusId;
  }
}
