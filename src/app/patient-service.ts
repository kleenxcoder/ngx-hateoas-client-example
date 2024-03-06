import { Injectable } from "@angular/core";
import { HateoasResourceOperation, HateoasResourceService, ResourceCollection, PagedResourceCollection } from "@lagoshny/ngx-hateoas-client";
import { Observable } from "rxjs";
import { Patient, PatientProjection } from "./patient";

@Injectable({providedIn: 'root'})
export class PatientService extends HateoasResourceOperation<Patient> {
  constructor(private resourceHateoasService: HateoasResourceService) {
    super(Patient);
  }
  
  public getPatientProjection(id: number): Observable<PatientProjection> {
    return this.resourceHateoasService.getResource(PatientProjection, id);
  }
    
  public getPatientProjections(): Observable<ResourceCollection<PatientProjection>> {
    return this.resourceHateoasService.getCollection(PatientProjection);
  }    

  public getPagedPatientProjections(): Observable<PagedResourceCollection<PatientProjection>> {
    return this.resourceHateoasService.getPage(PatientProjection);
  }    
   
  public searchPatientProjection(searchQuery: string): Observable<PatientProjection> {
    return this.resourceHateoasService.searchResource(PatientProjection, searchQuery);
  }
    
  public searchPatientProjections(searchQuery: string): Observable<ResourceCollection<PatientProjection>> {
    return this.resourceHateoasService.searchCollection(PatientProjection, searchQuery);
  }    

  public searchPagedPatientProjections(searchQuery: string): Observable<PagedResourceCollection<PatientProjection>> {
    return this.resourceHateoasService.searchPage(PatientProjection, searchQuery);
  }

}