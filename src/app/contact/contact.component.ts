import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

declare const emailjs: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactInfo = {
    phone: '(407) 620-9629',
    address: '1425 Martinez Dr, The Villages, FL 32159',
    email: 'admin@cflopera.com',
  };

  contactForm!: FormGroup;
  submitted = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (typeof emailjs !== 'undefined') {
      emailjs.init('UG2vCPOYYGaqypUxH');
      console.log('EmailJS initialized');
    } else {
      console.error('EmailJS is not loaded');
      this.errorMessage =
        'EmailJS is not loaded. Please check your internet connection and refresh the page.';
    }

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
    console.log('Form initialized');
  }

  onSubmit() {
    console.log('Submit button clicked');
    this.submitted = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      console.log('Form is invalid', this.contactForm.errors);
      this.errorMessage = 'Please fill out all required fields correctly.';
      return;
    }

    console.log('Sending email with form data:', this.contactForm.value);

    if (typeof emailjs !== 'undefined') {
      emailjs
        .send('service_i6vhsrl', 'template_kdkfvhi]', {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          message: this.contactForm.value.message,
          to_email: 'david.bradley.gehring@gmail.com',
        })
        .then(
          (response: any) => {
            console.log('Email sent successfully:', response);
            this.submitSuccess = true;
            this.contactForm.reset();
            this.submitted = false;
          },
          (error: any) => {
            console.error('Error sending email:', error);
            this.submitError = true;
            this.errorMessage = `Error sending email: ${
              error.text || 'Unknown error'
            }`;
          }
        )
        .catch((err: any) => {
          console.error('Caught error while sending email:', err);
          this.submitError = true;
          this.errorMessage = `Caught error while sending email: ${
            err.message || 'Unknown error'
          }`;
        });
    } else {
      console.error('EmailJS is not loaded. Cannot send email.');
      this.submitError = true;
      this.errorMessage =
        'EmailJS is not loaded. Please check your internet connection and try again.';
    }
  }
}
