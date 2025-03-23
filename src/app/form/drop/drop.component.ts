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
  imagePreview: string | null = null;
  draggedOver: boolean = false;
  onFileSelect(e: Event) {
    const target = e.target as HTMLInputElement;
    this.draggedOver = false; // Reset the dragged-over state

    if (target.files && target.files.length > 0) {
      this.file = target.files[0];

      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          this.imagePreview = reader.result as string;
        }
      };

      reader.readAsDataURL(this.file);

      // Reset the file input to allow selecting the same file again
      target.value = '';
    }
  }

  onDragOver() {
    this.draggedOver = true;
  }

  onDragLeave() {
    this.draggedOver = false;
  }

  onRemoveImage() {
    this.imagePreview = null;
    this.file = null;
  }
}
