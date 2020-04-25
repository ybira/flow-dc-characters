import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-modal',
  template: `
    <div class="modal-backdrop" (click)="onClose()"></div>
    <div class="confirm-modal">
      <h3>Are you sure you want to delete:</h3>
      <h4>{{ name }}</h4>
      <button class="btn btn-primary" (click)="onClose()">Cancel</button>
      <button class="btn btn-danger" (click)="onConfirm()">Confirm Delete</button>
    </div>
  `,
  styles: [
    `
      .modal-backdrop {
        background: rgba(0, 0, 0, 0.75);
      }

      .confirm-modal {
        position: fixed;
        width: 50vw;
        left: 25vw;
        top: 30vh;
        background: white;
        z-index: 1050;
        padding: 1rem;
      }
    `,
  ],
})
export class ConfirmDeleteModalComponent implements OnInit {
  @Input() public name: string;
  @Output() public close: EventEmitter<void> = new EventEmitter<void>();
  @Output() public confirm: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.close.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }
}
