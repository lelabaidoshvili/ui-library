import {Directive, ElementRef, Input, OnChanges, OnInit, Optional, Renderer2, Self} from '@angular/core';
import {NgControl} from "@angular/forms";
import {SimpleChanges} from "@angular/core";

@Directive({
  selector: 'input[altInput], textarea[altInput]',
  exportAs: 'altInput',
  standalone: true,
  host: {
    '[class.alt-input]': 'true',
    '[class.alt-input-disabled]': 'disabled',
    '[attr.disabled]': 'disabled || null',
    '[class.alt-input-sm]': 'size === "sm"',
    '[class.alt-input-lg]': 'size === "lg"',
    '[class.alt-input-borderless]': 'borderless',
  }
})
export class InputDirective implements OnChanges, OnInit{
  @Input() borderless: boolean = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() prefixCls: string = 'alt-input';
  @Input()
  get disabled(): boolean {
    if(this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }
  set disabled(value: boolean | string) {
    this._disabled = value != null && `${value}` !== 'false';
  }
  _disabled: boolean = false;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    renderer.addClass(elementRef.nativeElement, 'alt-input');
  }

  ngOnChanges(changes: SimpleChanges) {
  }
  ngOnInit() {
    if (this.prefixCls) {
      this.renderer.addClass(this.elementRef.nativeElement, this.prefixCls);

    }

    if(this.ngControl) {
      this.ngControl.statusChanges?.subscribe((status) => {
        console.log(status)
        if(status === 'INVALID') {
          this.renderer.addClass(this.elementRef.nativeElement, 'alt-input-invalid');
        } else {
          this.renderer.removeClass(this.elementRef.nativeElement, 'alt-input-invalid');
        }
      })
    }
  }

}
