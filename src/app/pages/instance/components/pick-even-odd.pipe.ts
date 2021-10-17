import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pickEvenOdd',
})
export class PickEvenOddPipe implements PipeTransform {

  transform(value: any[], even: boolean = false): unknown {
    const v = even ? 1 : 0;
    return value?.filter((e, i) => i % 2 === v);
  }

}
