import { Directive, Input, HostBinding, HostListener } from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
 
  readonly classToShowDropdown = 'show';
  @HostBinding('class.show') isOpen = false;
  @Input() appDropdown: HTMLElement;
 
  constructor() {
  }
 
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.appDropdown.classList.toggle(this.classToShowDropdown, this.isOpen);
  }
}