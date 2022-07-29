import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/user.interface';
import { UserService } from '../helpers/user.service';
import Swal from 'sweetalert2';
import { ButtonText } from '../model/enum-button-text';
import { DBOperation } from '../model/enum-db-operations';
import { MustMatch } from '../helpers/validator';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css'],
})
export class UserRegistrationFormComponent implements OnInit {
  regForm: FormGroup = new FormGroup({});
  users: User[] = [];
  user: User | undefined;
  textMessage: string = '';
  submitted: boolean = false;
  buttonText: ButtonText = ButtonText.Submit;
  dbops: DBOperation = 0;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    this.setFormState();
    this.getUsers();
  }

  setFormState() {
    this.buttonText = ButtonText.Submit;
    this.dbops = DBOperation.create;

    this.regForm = this._fb.group({
      id: [0],
      title: ['', Validators.required],
      firstName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      dob: [
        '',
        Validators.compose([
          Validators.required
          // ,
          // Validators.pattern(
          //   /^(([0-9])|([0-2][0-9])|([3][0-1]))\-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\-\d{4}$/g
          // )
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  Edit(userId: number) {
    this.buttonText = ButtonText.Update;
    this.dbops = DBOperation.update;

    let myUser: User | undefined;

    this._userService.getUser(userId).subscribe(res => {
      myUser = res;
      this.regForm.patchValue(myUser);
      this.regForm.controls['password'].setValue('');
      this.regForm.controls['confirmPassword'].setValue('');
      this.regForm.controls['acceptTerms'].setValue(false);
    });
  }

  get f(){
    return this.regForm.controls;
  }

  Delete(userId: number) {
    this._userService.getUser(userId).subscribe((res) => {
      this.user = res;
      this.textMessage = `Are you sure to delete ${this.user.firstName} ${this.user.lastName}`;
      Swal.fire({
        title: this.textMessage,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result: any) => {
        if (result.isConfirmed) {
          this._userService.deleteUser(userId).subscribe((res) => {
            this.getUsers();
          });
          this._toastr.success(
            'Record Deleted Successfully.',
            'Delete Confirmation'
          );
          // Swal.fire('Deleted!', 'Your record has been deleted.', 'success');
        }
      });
    });
  }

  getUsers() {
    this._userService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  onCancel() {
    this.buttonText = ButtonText.Submit;
    this.dbops = DBOperation.create;
    this.regForm.reset();
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.regForm.invalid) {
      return;
    }

    switch(this.dbops){
      case DBOperation.create:
        this._userService.addUser(this.regForm.value).subscribe(res => {
          this._toastr.success("User Added!", "User Registration");
          this.getUsers();
          this.onCancel();
        });
      break;

      case DBOperation.update:
        this._userService.editUser(this.regForm.value).subscribe(res => {
          this._toastr.success("User Updated!", "User Registration");
          this.getUsers();
          this.onCancel();
        });
      break;
    }
  }
}
