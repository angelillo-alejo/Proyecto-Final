import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  @Input() addToParent!: string; //Componente hijo, se lo paso al padre por Input

}
