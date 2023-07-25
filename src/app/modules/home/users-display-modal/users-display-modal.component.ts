import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
// import { DialogData } from '../filters/filters.component';

@Component({
  selector: 'app-users-display-modal',
  templateUrl: './users-display-modal.component.html',
  styleUrls: ['./users-display-modal.component.scss']
})
export class UsersDisplayModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}


// import {Component, Inject} from '@angular/core';
// import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
// import {NgIf} from '@angular/common';
// import {MatButtonModule} from '@angular/material/button';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

// /**
//  * @title Injecting data when opening a dialog
//  */
// @Component({
//   selector: 'dialog-data-example',
//   templateUrl: 'dialog-data-example.html',
//   standalone: true,
//   imports: [MatButtonModule, MatDialogModule],
// })
// export class DialogDataExample {
//   constructor(public dialog: MatDialog) {}
//
//   openDialog() {
//     this.dialog.open(DialogDataExampleDialog, {
//       data: {
//         animal: 'panda',
//       },
//     });
//   }
// }




// @Component({
//   selector: 'dialog-data-example-dialog',
//   templateUrl: 'dialog-data-example-dialog.html',
//   standalone: true,
//   imports: [MatDialogModule, NgIf],
// })
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }
