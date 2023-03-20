import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'alt-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
    @Input() altValue: string | number | boolean = false;
    @Input() disabled: boolean = false;
    @Input() checked: boolean = false;

}
