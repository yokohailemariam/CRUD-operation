export class Detail {
  Id: number;
  FirstName: string;
  Secondname: string;
  PhoneNumber: string;
  Region: string;
  Date: string;
  constructor(
    Id,
    FirstName: any,
    Secondname: any,
    PhoneNumber: any,
    Region: any,
    Date: any
  ) {
    this.Id = Id;
    this.FirstName = FirstName;
    this.Secondname = Secondname;
    this.PhoneNumber = PhoneNumber;
    this.Region = Region;
    this.Date = Date;
  }
}
