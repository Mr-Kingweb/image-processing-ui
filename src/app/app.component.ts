import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewChecked,
  NgZone,
} from '@angular/core';
import { DataClearServiceService } from './view/dataClear/data-clear-service.service';
import { clearData } from './data-clear.type';
import { NzTableSortFn } from 'ng-zorro-antd/table';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Chart } from 'chart.js';
import 'chart.js/auto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  title = 'data-clear';
  constructor(
    private dataClearServiceService: DataClearServiceService,
    private notification: NzNotificationService,
    private NgZone: NgZone,
    private nzMessage: NzMessageService
  ) {}
  ngAfterViewChecked(): void {
    if (this.clearDataArray && this.clearDataArray.length > 0) {
      this.isSpinning = false;
    }
  }
  chart: Chart | undefined;
  visible = false;
  visible_1 = false;
  placement: NzDrawerPlacement = 'right';
  diffTofNs: any[] = [];
  isSpinning: boolean = true;
  standardFlow: any[] = [];
  spreadData: any[] = [];
  spreadData_1: any[] = [];
  clearDataArray: clearData[] = [];
  sumTofNs: any[] = [];
  tmpTable: any[] = [];
  meterNum: any = '';
  meterNum_1: any;
  meterNum_2: any = '';
  meterNum_3: any;
  flowPoint: any;
  tempPoint: any;
  // 自适应屏幕大小
  screenHeight: any = window.innerHeight;
  rowHeight: any = 50;
  numberOfRows = Math.floor((this.screenHeight - 210) / this.rowHeight);
  pageSize: number = this.numberOfRows;
  pageIndex: number = 1;
  //排序规则
  sortCodeFn: NzTableSortFn<clearData> = (a: clearData, b: clearData) =>
    Number(a.meterNum) - Number(b.meterNum);
  sortNameFn: NzTableSortFn<clearData> = (a: clearData, b: clearData) =>
    Number(a.sumTofNs) - Number(b.sumTofNs);
  sortStateFn: NzTableSortFn<clearData> = (a: clearData, b: clearData) =>
    Number(a.ampUp) - Number(b.ampUp);

  response: any;
  ngOnInit(): void {}
  ngAfterViewInit() {}
  exportExcel_1() {
    if (this.meterNum == 0) {
      this.notification.blank('空数据', '请输入模糊筛选表号--Joker', {
        nzPlacement: 'bottomLeft',
      });
    } else {
      let jokerTest = this.meterNum;
      this.dataClearServiceService
        .exportExcel_1(jokerTest)
        .subscribe((res: any) => {
          //处理成功接到的响应
          const filename = `筛选数据_${jokerTest}.xlsx`;
          const blob = new Blob([res], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          });
          if (window.navigator && (window.navigator as any).msSaveOrOpenBlob) {
            // 处理兼容性，适用于IE浏览器
            (window.navigator as any).msSaveOrOpenBlob(blob, filename);
          } else {
            // 创建下载链接
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.click();
            // 释放URL对象
            window.URL.revokeObjectURL(url);
          }
        });
    }
  }
  exportExcel_2() {
    if (this.meterNum == 0) {
      this.notification.blank('空数据', '请输入模糊筛选表号--Joker', {
        nzPlacement: 'bottomLeft',
      });
    } else {
      let jokerTest = this.meterNum;
      this.dataClearServiceService
        .exportExcel_2(jokerTest)
        .subscribe((res: any) => {
          //处理成功接到的响应
          const filename = `特征化数据${jokerTest}.xlsx`;
          const blob = new Blob([res], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          });
          if (window.navigator && (window.navigator as any).msSaveOrOpenBlob) {
            // 处理兼容性，适用于IE浏览器
            (window.navigator as any).msSaveOrOpenBlob(blob, filename);
          } else {
            // 创建下载链接
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.click();
            // 释放URL对象
            window.URL.revokeObjectURL(url);
          }
        });
    }
  }
  exportExcel_3() {
    if (this.meterNum_2 == '') {
      this.notification.blank('空数据', '请输入验证模糊表号--Joker', {
        nzPlacement: 'bottomLeft',
      });
    } else {
      let jokerTest = this.meterNum_2;
      this.dataClearServiceService
        .exportExcel_3(jokerTest)
        .subscribe((res: any) => {
          //处理成功接到的响应
          const filename = `验证数据_${jokerTest}.xlsx`;
          const blob = new Blob([res], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          });
          if (window.navigator && (window.navigator as any).msSaveOrOpenBlob) {
            // 处理兼容性，适用于IE浏览器
            (window.navigator as any).msSaveOrOpenBlob(blob, filename);
          } else {
            // 创建下载链接
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.click();
            // 释放URL对象
            window.URL.revokeObjectURL(url);
          }
        });
    }
  }
  exportExcel_4() {
    if (this.meterNum_2 == '') {
      this.notification.blank('空数据', '请输入验证模糊表号--Joker', {
        nzPlacement: 'bottomLeft',
      });
    } else {
      let jokerTest = this.meterNum_2;
      this.dataClearServiceService
        .exportExcel_4(jokerTest)
        .subscribe((res: any) => {
          //处理成功接到的响应
          const filename = `误差表数据_${jokerTest}.xlsx`;
          const blob = new Blob([res], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          });
          if (window.navigator && (window.navigator as any).msSaveOrOpenBlob) {
            // 处理兼容性，适用于IE浏览器
            (window.navigator as any).msSaveOrOpenBlob(blob, filename);
          } else {
            // 创建下载链接
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.click();
            // 释放URL对象
            window.URL.revokeObjectURL(url);
          }
        });
    }
  }
  refreshPage() {
    this.onInput();
  }
  openSpreadPhoto() {
    if (this.chart) {
      this.chart.destroy();
    }
    this.visible = true;
    if (this.meterNum == '') {
      this.nzMessage.info('请输入正确的筛选表号');
    }
    setTimeout(() => {
      this.spreadData = this.diffTofNs.map((x, i) => ({
        x: Number(x),
        y: Number(this.standardFlow[i]),
      }));

      setTimeout(() => {
        this.NgZone.runOutsideAngular(() => {
          this.chart = new Chart(this.chartCanvas.nativeElement, {
            type: 'scatter',
            data: {
              datasets: [
                {
                  label: '散点图实例',
                  data: this.spreadData,
                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  borderColor: 'rgba(54, 162, 235, 1)',
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
              maintainAspectRatio: false, // 保持图表原有比例
              scales: {
                x: {
                  type: 'linear',
                  position: 'bottom',
                },
                y: {
                  type: 'linear',
                  position: 'left',
                },
              },
            },
          });
        });
      }, 0);
    }, 0);
  }
  openSpreadPhoto_1() {
    this.visible_1 = true;
    if (this.chart) {
      this.chart.destroy();
    }
    setTimeout(() => {
      this.spreadData_1 = this.sumTofNs.map((x, i) => ({
        x: Number(x),
        y: Number(this.tmpTable[i]),
      }));
    }, 0);

    setTimeout(() => {
      this.chart = new Chart(this.chartCanvas.nativeElement, {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: '反比例图实例',
              data: this.spreadData_1,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true, // 设置图表为响应式，根据屏幕窗口变化而变化
          maintainAspectRatio: false, // 保持图表原有比例
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
            },
            y: {
              type: 'linear',
              position: 'bottom',
            },
          },
        },
      });
    }, 0);
  }

  closeSpreadPhoto(): void {
    this.visible = false;
  }

  closeSpreadPhoto_1(): void {
    this.visible_1 = false;
  }
  onInput() {
    let param = this.meterNum;
    if (this.meterNum == '') {
      this.nzMessage.info('请输入正确的筛选表号');
    }
    //  1. 搜索框数据不匹配为空   2.模糊查询所有数据 3.搜索框为空，显示所有数据
    else {
      this.dataClearServiceService.getSearchMeterNum(param).subscribe((res) => {
        this.response = res;
        this.clearDataArray = this.response;
      });
    }
  }
  onInput_2() {
    let param = this.meterNum_2;
    if (this.meterNum_2 == '') {
      this.nzMessage.info('请输入正确的验证表号');
    }
    //  1. 搜索框数据不匹配为空   2.模糊查询所有数据 3.搜索框为空，显示所有数据
  }
  // 固定筛选条件筛选内容
  getData() {
    // let params = {
    //   page: this.pageIndex,
    //   size: this.pageSize,
    // };
    // this.dataClearServiceService.getAllDataBp(params).subscribe((res) => {
    //   this.response = res;
    //   this.clearDataArray = this.response;
    // });
  }
  onInput_1() {
    if (this.meterNum_1 != null && this.tempPoint != null) {
      let params = {
        meterNum: this.meterNum_1,
        tempPoint: this.tempPoint,
      };
      this.dataClearServiceService.getSpreadData(params).subscribe((res) => {
        this.response = res;
        this.diffTofNs = this.response.diffTofNs;
        this.standardFlow = this.response.standardFlow;
        this.openSpreadPhoto();
      });
    }
  }
  onInput_3() {
    if (this.meterNum_3 != null) {
      let param = {
        meterNum: this.meterNum_3,
      };
      this.dataClearServiceService.getFeatureData(param).subscribe((res) => {
        this.response = res;
        this.sumTofNs = this.response.sumTofNs;
        this.tmpTable = this.response.tmpTable;
        this.openSpreadPhoto_1();
      });
    }
  }
  // 页码改变时的回调
  pageIndexChange() {
    let params = {
      page: this.pageIndex,
      size: this.pageSize,
    };
    this.dataClearServiceService.getAllDataBp(params).subscribe((res) => {
      this.response = res;
      this.clearDataArray = this.response;
    });
  }
}
