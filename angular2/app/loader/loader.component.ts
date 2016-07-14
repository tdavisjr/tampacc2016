import { Component } from '@angular/core';
@Component({
  selector: 'my-loader',
  template: 
  `
  <div class="row">
      <div class="col-md-2 col-md-offset-5 well well-lg bg-info">
          <span class="glyphicon glyphicon-refresh"></span>
          Loading...
      </div>
  </div>  
  `
})
export class LoaderComponent { }