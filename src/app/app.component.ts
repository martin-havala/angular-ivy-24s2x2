import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngAfterViewInit() {
    this.loadPagedJsPolyfill();
  }

  loadPagedJsPolyfill() {
    const node = document.createElement('script');
    node.src = 'https://unpkg.com/pagedjs/dist/paged.polyfill.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
