import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ChartDataModel } from 'src/app/models/chart-data-model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private element: ElementRef) { }

  @Input() useInfoPanel = true;
  @Input() title = '';
  @Input() data: ChartDataModel[] = [];
  @Input() limit: number = 20;

  ngOnInit(): void {
    this.data = this.data.sort(d => d.percent).slice(0, this.limit);
    const dataSummary = this.data.reduce((val, d) => val + (+d.percent), 0);
    if (dataSummary < 100){
      const others = 100 - dataSummary;
      this.data.push({
        color: '#000',
        percent: others,
        label: 'Others'
      } as ChartDataModel)
    }

    const canvas = this.element.nativeElement.querySelector('.chart-canvas');
    const dimensions = this.getObjectFitSize(
      true,
      canvas.clientWidth,
      canvas.clientHeight,
      canvas.width,
      canvas.height
    );

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    const circleR = canvas.width / 4;
    const centerW = canvas.width / 2;
    const centerH = canvas.height / 2;

    const ctx = canvas.getContext("2d");
    ctx.scale(1, 1);


    ctx.beginPath();
    ctx.arc(centerW, centerH, circleR, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#aaeeff";
    ctx.fill();


    let current = -0.5 * Math.PI;
    this.data.forEach(d => {
      ctx.beginPath();
      ctx.moveTo(centerW, centerH);
      ctx.arc(centerW, centerH, circleR, current, current + (2 * Math.PI * d.percent / 100), false);
      ctx.fillStyle = d.color;
      ctx.fill();
      current = current + (2 * Math.PI * d.percent / 100);

    })
    // dark blue percentage circle
    // ctx.beginPath();
    // ctx.moveTo(centerW, centerH);
    // ctx.arc(centerW, centerH, circleR, -0.5 * Math.PI, 0.3 * 2 * Math.PI - 0.5 * Math.PI, false);
    // ctx.fillStyle = "#00aaff";
    // ctx.fill();

    //const current = -0.5 * Math.PI + 0.3 * 2 * Math.PI - 0.5 * Math.PI;

    // ctx.beginPath();
    // ctx.moveTo(centerW, centerH);
    // ctx.arc(centerW, centerH, circleR, current, 0.3 * 2 * Math.PI - 0.5 * Math.PI, false);
    // ctx.fillStyle = "#001244";
    // ctx.fill();

  }

  fillCircle(contextObj: any, x: number, y: number, r: number, start: number, end: number) {
    contextObj.arc(x, y, r, start, end);
    contextObj.fill();
  };


  getObjectFitSize(
    contains: boolean /* true = contain, false = cover */,
    containerWidth: any,
    containerHeight: any,
    width: any,
    height: any
  ) {
    var doRatio = width / height;
    var cRatio = containerWidth / containerHeight;
    var targetWidth = 0;
    var targetHeight = 0;
    var test = contains ? doRatio > cRatio : doRatio < cRatio;

    if (test) {
      targetWidth = containerWidth;
      targetHeight = targetWidth / doRatio;
    } else {
      targetHeight = containerHeight;
      targetWidth = targetHeight * doRatio;
    }

    return {
      width: targetWidth,
      height: targetHeight,
      x: (containerWidth - targetWidth) / 2,
      y: (containerHeight - targetHeight) / 2
    };
  }

}
