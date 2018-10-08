import { Injectable } from '@angular/core';

@Injectable()
export class StringFormatter {

  toKebabCase(str: string): string {
    return str.toLowerCase().replace(/ /g, '-');
  }

  toCamelCase(str: string): string {
    let wordsArr: string[] = [],
        index: number = 0,
        strConverted: string = '';
    if (!str) {
      return str;
    }
    str = str.replace('-', ' ');
    wordsArr = str.split(' ');
    wordsArr.forEach((word) => {
      let wordArr: string[] = word.split('');
      if (index > 0) {
        wordArr[0] = wordArr[0].toUpperCase();
      } else {
        wordArr[0] = wordArr[0].toLowerCase();
      }
      strConverted += wordArr.join('');
      index++;
    });
    return strConverted;
  }
}