import { Component } from '@angular/core';

@Component({
  selector: 'app-drop',
  standalone: true,
  imports: [],
  templateUrl: './drop.component.html',
  styleUrl: './drop.component.scss',
})
export class DropComponent {
  file: File | null = null;
  onFileSelect(e: Event) {
    const target = e.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
      this.file = target.files[0];
      console.log(this.file);
    }
  }

  onDragOver() {
    console.log('Drag Over');
  }
}
