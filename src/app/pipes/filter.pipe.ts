import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'appFilter' , pure:false , standalone: true})
export class FilterPipe implements PipeTransform {
  transform(searchList: any[], searchValue: string): any {
      if (searchValue || searchValue === '') {
        return searchList.filter(item => item?.title?.toLowerCase().includes(searchValue.toLowerCase()));
      }

  }

}
