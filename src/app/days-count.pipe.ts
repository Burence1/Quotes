import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysCount'
})
export class DaysCountPipe implements PipeTransform {

  transform(value: any): string {
    let today: Date = new Date(); 
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    var dateDifference = Math.abs(todayWithNoTime - value); //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an a day
    var dateDifferenceSeconds = dateDifference * 0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds / secondsInDay;
    let outputMessage: string;

    if (dateCounter >= 1 && value < todayWithNoTime) {
      outputMessage = `${dateCounter} days ago`;
      return outputMessage;
    } else {
      outputMessage = `0 days ago`;
      return outputMessage;
    }
  }

}
