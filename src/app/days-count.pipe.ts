import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysCount'
})
export class DaysCountPipe implements PipeTransform {

  transform(value: any): any {
    let today: Date = new Date(); 
    let todayWithNoTime: any = new Date(today.getFullYear(),today.getMonth(),today.getDate()
    );
    const secondsInDay = 86400;
    var dateDifference = Math.abs(value-todayWithNoTime);
    var dateDifferenceSeconds = dateDifference * 0.001; 
    var dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 1 && value < todayWithNoTime) {
      return dateCounter + 'days ago';
    } else {
      return "0 days";
    }
  }

}
