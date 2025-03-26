import {
  Component,
  ElementRef,
  inject,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TicketService } from '../ticket/ticket.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  ticketService = inject(TicketService);

  form = new FormGroup({
    avatar: new FormControl('', {
      validators: [Validators.required],
    }),
    name: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    github: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  // Drop Zone Logic

  file: File | null = null;
  imagePreview: string | null = null;
  draggedOver: boolean = false;
  exceedsMaxSize: boolean = false;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

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
    this.form.controls.avatar.reset();
  }

  onChangeImage() {
    this.fileInput.nativeElement.click();
  }
  onSubmit() {
    const user = {
      avatar: this.imagePreview as string,
      name: this.form.controls.name.value as string,
      email: this.form.controls.email.value as string,
      github: this.form.controls.github.value as string,
    };

    this.ticketService.setUser(user);
  }

  // Form Validtors

  get nameIsInvalid() {
    return (
      this.form.controls.name.invalid &&
      this.form.controls.name.touched &&
      this.form.controls.name.dirty
    );
  }

  get emailIsInvalid() {
    return (
      this.form.controls.email.invalid &&
      this.form.controls.email.touched &&
      this.form.controls.email.dirty
    );
  }

  get githubIsInvalid() {
    return (
      this.form.controls.github.invalid &&
      this.form.controls.github.touched &&
      this.form.controls.github.dirty
    );
  }
}
