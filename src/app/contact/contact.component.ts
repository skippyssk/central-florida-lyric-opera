import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { environment } from '../../environments/environment';
import { LoggingService } from '../services/logging.service';
import { ContactFormData, EmailJSResponse, EmailJSError } from '../models/email.interface';

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
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private loggingService: LoggingService
  ) {}

  ngOnInit() {
    if (typeof emailjs !== 'undefined') {
      emailjs.init(environment.emailjs.publicKey);
      this.loggingService.log('EmailJS initialized');
    } else {
      this.loggingService.error('EmailJS is not loaded');
      this.errorMessage =
        'EmailJS is not loaded. Please check your internet connection and refresh the page.';
    }

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
    this.loggingService.log('Form initialized');
  }

  onSubmit() {
    this.loggingService.log('Submit button clicked');
    this.submitted = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.errorMessage = '';
    this.isLoading = true;

    if (this.contactForm.invalid) {
      this.loggingService.log('Form is invalid', this.contactForm.errors);
      this.errorMessage = 'Please fill out all required fields correctly.';
      this.isLoading = false;
      return;
    }

    const formData: ContactFormData = this.contactForm.value;
    this.loggingService.log('Sending email with form data:', formData);

    if (typeof emailjs !== 'undefined') {
      emailjs
        .send(environment.emailjs.serviceId, environment.emailjs.templateId, {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'david.bradley.gehring@gmail.com',
        })
        .then(
          (response: EmailJSResponse) => {
            this.loggingService.log('Email sent successfully:', response);
            this.submitSuccess = true;
            this.contactForm.reset();
            this.submitted = false;
            this.isLoading = false;
          },
          (error: EmailJSError) => {
            this.loggingService.error('Error sending email:', error);
            this.submitError = true;
            this.errorMessage = `Error sending email: ${
              error.text || 'Unknown error'
            }`;
            this.isLoading = false;
          }
        )
        .catch((err: EmailJSError) => {
          this.loggingService.error('Caught error while sending email:', err);
          this.submitError = true;
          this.errorMessage = `Caught error while sending email: ${
            err.message || 'Unknown error'
          }`;
          this.isLoading = false;
        });
    } else {
      this.loggingService.error('EmailJS is not loaded. Cannot send email.');
      this.submitError = true;
      this.errorMessage =
        'EmailJS is not loaded. Please check your internet connection and refresh the page.';
      this.isLoading = false;
    }
  }
}
