import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayJoiner'
})
export class ArrayJoinerPipe implements PipeTransform {

  transform(value: string | string[], ...args: unknown[]): unknown {
    return (Array.isArray(value)) ? value.join('='): value
  }

}
