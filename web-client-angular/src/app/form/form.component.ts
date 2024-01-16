import { CommonModule } from '@angular/common';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FormServiceService } from './form-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  @Input() title: string = 'Add User';
  @Input() userData: any = {
    name: '',
    agreeToTerms: false,
    sectors: [],
  };
  @Output() formChange = new EventEmitter<any>();
  formData: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    agreeToTerms: new FormControl(false, [Validators.required]),
    sectors: new FormControl(
      [],
      [Validators.required, Validators.minLength(3)]
    ),
  });

  allSectors: any[] = [];
  constructor(
    private formService: FormServiceService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    // Default Values
    this.formData.patchValue({
      name: this.userData.name,
      agreeToTerms: this.userData.agreeToTerms,
      sectors: this.userData.sectors.map((e: any) => e.value),
    });

    this.formService.getSectors().subscribe({
      next: (data: any) => {
        this.allSectors = data;
      },
      error: () => {
        this.allSectors = [];
      },
    });
  }

  handleFormSubmit() {
    this.formChange.emit(this.formData.value);
  }

  get enableSubmitBtn() {
    return this.formData.invalid;
  }
}
