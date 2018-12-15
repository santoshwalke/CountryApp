import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(item: any[], searchText : string): any[] {
      if (!(item && searchText)) return [];

    searchText = searchText.toLowerCase();
    return item.filter( i => {
        return i.name.toLowerCase().includes(searchText);
    })
  }
}