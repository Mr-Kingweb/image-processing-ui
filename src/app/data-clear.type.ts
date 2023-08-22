export interface clearData {
  time: Date;
  meterNum: string;
  diffTofNs: string; // 1
  sumTofNs: string;
  meterFlowM3h: string;
  standardFlow: string; //2
  flowMode: string;
  tmpIn: string;
  tmpOut: string;
  tmpTable: string;
  tofUp: string;
  tofDown: string;
  pwrUp: string;
  pwrDown: string;
  ampUp: number;
  ampDown: number;
  flowPoint: number;
  tempPoint: number;
}
