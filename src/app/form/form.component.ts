import { Component, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form = new FormGroup({
    avatar: new FormControl('', {
      validators: [Validators.required],
    }),
    github: new FormControl(''),
  });
  file: File | null = null;
  imagePreview: string | null = null;
  draggedOver: boolean = false;
  exceedsMaxSize: boolean = false;

  onFileSelect(e: Event | DragEvent) {
    const target = e.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
      this.file = target.files[0];

      if (this.file.size > 524288) {
        target.value = '';
        this.file = null;
        this.imagePreview = null;
        this.exceedsMaxSize = true;
        this.form.controls.avatar.reset();
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          this.imagePreview = reader.result as string;
        }
      };

      reader.readAsDataURL(this.file);
      this.exceedsMaxSize = false;
      // Reset the file input to allow selecting the same file again
      target.value = '';
    }
    this.draggedOver = false; // Reset the dragged-over state
  }

  onDragOver(e: DragEvent) {
    e.preventDefault();
    this.draggedOver = true;
  }

  onDragLeave(e: DragEvent) {
    this.draggedOver = false;
  }

  onRemoveImage() {
    this.imagePreview = null;
    this.file = null;
  }
  onSubmit() {
    console.log(this.form);
  }
}
