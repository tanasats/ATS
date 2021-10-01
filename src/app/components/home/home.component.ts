import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activityList: any[] = [
    {
      id: '1',
      title: 'โครงการปฐมนิเทศนิสิตใหม่ระดับปริญญาตรี ปีการศึกษา 2563',
      description:
        'โครงการปฐมนิเทศนิสิตใหม่ระดับปริญญาตรี ปีการศึกษา 2563 เพื่อต้อนรับนิสิตใหม่ มหาวิทยาลัยมหาสารคาม รุ่นภุมริน 12 ณ อาคารเฉลิมพระเกียรติในโอกาสฉลองพระชนมายุ 5 รอบ 2 เมษายน 2558 มหาวิทยาลัยมหาสารคาม (เขตพื้นที่ในเมือง) ในวันที่ 7 กรกฎาคม 2563 ',
      picture: 'assets/images/20200708052222_4.jpg',
    },
    {
      id: '2',
      title: 'ขอเชิญบริจาคโลหิต',
      description: 'โรงพยาบาลสุทธาเวช ขอเชิญบริจาคโลหิต วันจันทร์, 04 ตุลาคม 2564, เวลา 10:00 น.ณ บริเวณหน้าห้องพิพิธภัณฑ์ ชั้น 2 อาคารคณะแพทยศาสตร์ มหาวิทยาลัยมหาสารคาม หลังที่ 2 เขตพื้นที่ในเมือง',
      picture: 'assets/images/20210921103855.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  test() {
    console.log('test()');
    this.activityList = [
      {
        id: '3',
        title: 'โครงการปฐมนิเทศนิสิตใหม่ระดับปริญญาตรี ปีการศึกษา 2563',
        description:
          'โครงการปฐมนิเทศนิสิตใหม่ระดับปริญญาตรี ปีการศึกษา 2563 เพื่อต้อนรับนิสิตใหม่ มหาวิทยาลัยมหาสารคาม รุ่นภุมริน 12 ณ อาคารเฉลิมพระเกียรติในโอกาสฉลองพระชนมายุ 5 รอบ 2 เมษายน 2558 มหาวิทยาลัยมหาสารคาม (เขตพื้นที่ในเมือง) ในวันที่ 7 กรกฎาคม 2563 ',
        picture: 'http://lorempixel.com/400/403/',
      },
      {
        id: '4',
        title: 'กกก',
        description: 'ขขข',
        picture: 'http://lorempixel.com/400/404/',
      },
    ];
  }
}
