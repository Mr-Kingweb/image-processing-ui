import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataClearServiceService {
  constructor(private http: HttpClient) {}

  getAllData() {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
      }),
    };
    return this.http.get('api/joker', httpOptions);
    // return this.http.get('/joker', httpOptions);
  }
  getFeatureData(param: any) {
    return this.http.post('api/featureData', param);
    // return this.http.post('/featureData', param);
  }
  getSpreadData(params: any) {
    return this.http.post(
      '/api/spreadData',
      // '/spreadData',
      params
    );
  }
  getAllDataBp(params: any) {
    return this.http.post(
      '/api/jokerBp',
      // '/jokerBp',
      params
    );
  }
  exportExcel_1(meterNum: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/octet-stream',
    });
    return this.http.post(
      '/api/uploadExcel_1',
      meterNum,
      // '/uploadExcel_1',
      { headers, responseType: 'blob' as 'json' }
    );
  }
  exportExcel_2(meterNum: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/octet-stream',
    });
    return this.http.post(
      '/api/uploadExcel_2',
      meterNum,
      // '/uploadExcel_2',
      { headers, responseType: 'blob' as 'json' }
    );
  }
  exportExcel_3(meterNum: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/octet-stream',
    });
    return this.http.post(
      '/api/uploadExcel_3',
      meterNum,
      // '/uploadExcel_3',
      { headers, responseType: 'blob' as 'json' }
    );
  }
  exportExcel_4(meterNum: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/octet-stream',
    });
    return this.http.post(
      '/api/uploadExcel_4',
      meterNum,
      // '/uploadExcel_4',
      { headers, responseType: 'blob' as 'json' }
    );
  }
  getSearchMeterNum(param: any) {
    return this.http.post('api/searchByMeter', param);
    // return this.http.post('searchByMeter', param);
  }
}
