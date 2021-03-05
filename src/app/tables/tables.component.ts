import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // this.loadScript('http://www.some-library.com/library.js');
    this.loadScript('assets/vendor/datatables/jquery.dataTables.min.js');
    this.loadScript('assets/vendor/datatables/dataTables.bootstrap4.min.js');
    this.loadScript('assets/js/demo/datatables-demo.js');

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
