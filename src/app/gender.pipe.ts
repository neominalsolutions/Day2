import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from './pipes-sample-page/pipes-sample-page.component';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {

    if(value == Gender.Erkek)
      return 'Erkek';
    else
      return 'Kadın';

  }

}
