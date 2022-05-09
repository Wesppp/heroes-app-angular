import {Component, OnInit, Input} from '@angular/core';
import {InputOptions} from "../../shared/interfaces/input-options";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true
    }
  ]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  @Input() options: InputOptions = {
    maxlength: 15,
    placeholder: 'Input value',
    name: '',
    type: 'text',
    label: '',
    pattern: ''
  }
  hide: boolean = true
  @Input() value!: string
  onChange!: (value: string) => void
  onTouched!: () => void

  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  writeValue(obj: any): void {
    this.value = obj
  }
}
