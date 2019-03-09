import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customDate"
})
export class CustomDatePipe implements PipeTransform {
  newDate: string;
  data: string[] = [];
  transform(value: any, args?: any): any {
    this.data = value.split("-");
    this.newDate = this.data[2] + "/" + this.data[1] + "/" + this.data[0];

    return this.newDate;
  }
}
