import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolename',
})
export class RolenamePipe implements PipeTransform {
  transform(roleid: number) {
    let _rolename = '_rolename_';
    let roledata = {};
    switch (roleid) {
      case 1:
        _rolename = 'Student';
        break;
      case 2:
        _rolename = 'Officer';
        break;
      case 3:
        _rolename = 'Admin';
        break;
      default:
        _rolename = "-";
        break;
    }
    return _rolename;
  }
}
