import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sweetalert2',
  templateUrl: './sweetalert2.component.html',
  styleUrls: ['./sweetalert2.component.css']
})
export class Sweetalert2Component implements OnInit {

  constructor() { }

  ngOnInit() {

    // For More Examples https://sweetalert2.github.io/
    //Basic Alert
    //Swal.fire("Hello World");

    //A title with a text
    // Swal.fire(
    //   'The Internet?', 'That thing is still around', 'question'
    // );

    //A modal with a title, an error icon, a text, and a footer
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Oops...',
    //   text: 'Something went wrong!',
    //   footer: '<a href="">Why do I have this issue?</a>'
    // });

    //A dialog with three buttons
    // Swal.fire({
    //   title: 'Do you want to save the changes?',
    //   showDenyButton: true,
    //   showCancelButton: true,
    //   confirmButtonText: 'Save',
    //   denyButtonText: `Don't save`,
    // }).then((result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
    //     Swal.fire('Saved!', '', 'success')
    //   } else if (result.isDenied) {
    //     Swal.fire('Changes are not saved', '', 'info')
    //   }
    // })

    //A confirm dialog, with a function attached to the "Confirm"-button
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your file has been deleted.',
    //       'success'
    //     )
    //   }
    // })

    //A message with auto close timer
    // let timerInterval: any;
    // Swal.fire({
    //   title: 'Auto close alert!',
    //   html: 'I will close in <b></b> milliseconds.',
    //   timer: 2000,
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading()
    //     // const b = Swal.getHtmlContainer().querySelector('b')
    //     timerInterval = setInterval(() => {
    //       // b.textContent = Swal.getTimerLeft()
    //     }, 100)
    //   },
    //   willClose: () => {
    //     clearInterval(timerInterval)
    //   }
    // }).then((result) => {
    //   /* Read more about handling dismissals below */
    //   if (result.dismiss === Swal.DismissReason.timer) {
    //     console.log('I was closed by the timer')
    //   }
    // })


    Swal.fire('Oops...', 'Something went wrong!', 'error');

  }

}
