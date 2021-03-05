import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.loadScript('http://www.some-library.com/library.js');
    this.loadScript('assets/vendor/chart.js/Chart.min.js');
    this.loadScript('assets/js/demo/chart-area-demo.js');
    this.loadScript('assets/js/demo/chart-pie-demo.js');
    this.loadScript('assets/js/demo/chart-bar-demo.js');

  }
  // tslint:disable-next-line:typedef
  public loadScript(url: string) {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
