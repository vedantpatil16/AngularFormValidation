import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  constructor(private _fobj : FormBuilder)
  {}

  MarvellousForm = this._fobj.group(
    {
      name : [null, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      contact : [null, Validators.compose([ Validators.required, Validators.pattern("[0-9]{10}")])],
      email : [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]{1,}\\.[a-z]{2,}$")])],
      city: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.pattern("[a-zA-Z][a-zA-Z ]+")])],
      zipcd : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern("^[0-9]*$")])],
      comments : [null, Validators.compose([Validators.required, Validators.minLength(30)])]
    }
  )
}
