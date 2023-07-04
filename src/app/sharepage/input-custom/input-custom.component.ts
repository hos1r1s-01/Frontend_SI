import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.css']
})
export class InputCustomComponent {

  @Input() formName!: string;
  @Input() formGroup!: FormGroup;
  @Input() type: string = 'text';
  @Input() placeholder!: string;
  @Input() disabled: boolean = false;
  @Input() label!: string;

}
