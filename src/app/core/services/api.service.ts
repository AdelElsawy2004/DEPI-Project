import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';

export abstract class ApiService {

    protected http = inject(HttpClient);

    protected readonly apiUrl = environment.apiUrl;

}