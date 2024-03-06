import { HateoasProjection, HateoasResource, ProjectionRel, ProjectionRelType, Resource } from "@lagoshny/ngx-hateoas-client";


/* 
  Resource name 'products' should be map to server-side resource name that used to build resource self URL.
  For example in this case it can be: http://localhost:8080/api/v1/products
 */
@HateoasResource('patients')
export class Patient extends Resource {
    public id?: string;
    public firstName?: string;
    public lastName?: string;
    public agency?: Agency;
}

@HateoasResource('agencies')
export class Agency extends Resource {
    public id?: string;
}

@HateoasProjection(Patient, 'patientProjection')
export class PatientProjection extends Resource {
    public id?: string;
    public firstName?: string;
    public lastName?: string;

    @ProjectionRel(Agency)
    public agency?: ProjectionRelType<Agency>;
}