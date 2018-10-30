import { Component, OnInit } from '@angular/core';
/**
 * import { User } from '@angular/'
 */
/**
 * not push
 */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: ['']
})
export class AdminComponent implements OnInit {

  constructor() { }

  onSubmit() {
  // TODO: Use EventEmitter with form value
  // console.warn(this.profileForm.value);
  }

  pageBack(): void{
    // this.location.back();
  }

  ngOnInit() {
  }

}
