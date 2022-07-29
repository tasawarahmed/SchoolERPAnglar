import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  constructor(private _toastr: ToastrService) { }

  ngOnInit() {
    this._toastr.success("Saved Success", "User Master");
    this._toastr.info("Info Success", "User Master");
    this._toastr.warning("Warning", "User Master");
    this._toastr.error("Error", "User Master");

  }

}
