import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HateoasResourceService, NgxHateoasClientConfigurationService, NgxHateoasClientModule } from '@lagoshny/ngx-hateoas-client';
import { Agency, Patient, PatientProjection } from './patient';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PatientService } from './patient-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ngx-hateoas-client-example';
  form: FormGroup = new FormGroup({});

  constructor(private hateoasConfig: NgxHateoasClientConfigurationService,
    private resourceService: HateoasResourceService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private patientService: PatientService
  ) {


    hateoasConfig.configure({
      http: {
        rootUrl: 'http://localhost:8080/rest-services/'
        // rootUrl: 'https://dev-backend.pflegezeit24.at/rest-services/'
      },
      useTypes: {
          resources: [Patient, Agency, PatientProjection]
      }
    });


  }

  ngOnInit(): void {
  }

  onLoad() {
    this.resourceService.getResource(Patient, 1).subscribe((response) => {
      console.log('Resource loaded: ', response);
    });
    this.patientService.getPatientProjection(1).subscribe((response) => {
      console.log('Resource loaded: ', response);
    });
  }

  onReset() {

  }
  onSubmit() {
    const patient = new Patient();
    // patient.id = '10';
    patient.firstName = 'John';
    patient.lastName = 'Doe';

    this.resourceService.createResource(Patient, {
      body: patient
    }).subscribe((response) => {
      console.log('Resource created: ', response);      
    });
  }


}
