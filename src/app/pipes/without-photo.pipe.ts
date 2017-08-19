import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutPhoto'
})
export class WithoutPhotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let noImg = "assets/img/noimage.png";
    if(!value){
      return noImg;
    }
    return (value.length > 0) ? value[1].url : noImg ;
  }

}
