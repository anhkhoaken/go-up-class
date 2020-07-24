// import {Component, Inject} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//
// export interface DialogData {
//   question: string;
// }
//
// /**
//  * @title Dialog Overview
//  */
// @Component({
//   selector: 'dialog-overview-example',
//   templateUrl: 'dialog-question.component.html',
// })
// export class DialogOverviewExample {
//
//   question: string;
//
//   constructor(public dialog: MatDialog) {}
//
//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       width: '250px',
//       data: {question: this.question}
//     });
//
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//     });
//   }
//
// }
//
// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: './dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {
//
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
//
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//
// }
