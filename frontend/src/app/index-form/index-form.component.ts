import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-index-form',
  templateUrl: './index-form.component.html',
  styleUrls: ['./index-form.component.css']
})
export class IndexFormComponent {

  indexForm: FormGroup;

  constructor(private fb: FormBuilder, private indexService: IndexService) {
    this.indexForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      baseValue: [100, Validators.required]
    });
  }

  onSubmit() {
    if (this.indexForm.valid) {
      this.indexService.createIndex(this.indexForm.value).subscribe({
        next: (response) => console.log('Index created', response),
        error: (error) => console.error('Error creating index', error)
      });
    }
  }
}
