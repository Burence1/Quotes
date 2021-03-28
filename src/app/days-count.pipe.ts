import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysCount'
})
export class DaysCountPipe implements PipeTransform {

  transform(value: any): any {
    let today: Date = new Date(); 
    let todayWithNoTime: any = new Date(today.getFullYear(),today.getMonth(),today.getDate()
    );
    var dateDifference = Math.abs(value-todayWithNoTime);
    const secondsInDay = 86400; 
    var dateDifferenceSeconds = dateDifference * 0.001; 
    var dateCounter = dateDifferenceSeconds / secondsInDay;
    let outputMessage: string;

    if (dateCounter >= 1 && value < todayWithNoTime) {
      outputMessage = `${dateCounter} days ago`;
      return outputMessage;
    } else {
      outputMessage = `0 days `;
      return outputMessage;
    }
  }

}
