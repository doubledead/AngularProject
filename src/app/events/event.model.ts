export class Event {
  public id: number;
  // public createDate: Date;
  public description: string;
  // public endDate: Date;
  public imagePath: string;
  public name: string;
  // public startDate: Date;

  constructor(id: number, description: string, imagePath: string, name: string ) {
    this.id = id;
    this.description = description;
    this.imagePath = imagePath;
    this.name = name;
  }
}
