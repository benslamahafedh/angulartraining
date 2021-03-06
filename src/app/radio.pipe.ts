import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'radioFilter'
})
export class RadioPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toString().toLocaleLowerCase();
    return items.filter(it => {
      return(it.gender.toString().toLocaleLowerCase()==(searchText)) ;
    });
  }
}