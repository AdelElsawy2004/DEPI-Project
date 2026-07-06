import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { SearchResponseDto } from '../DTO/Search/search-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends ApiService {

  private readonly endpoint = `${this.apiUrl}/Search/medicine`;

  searchMedicine(tradeName: string, latitude?: number, longitude?: number): Observable<SearchResponseDto> {
    const params: string[] = [];
    params.push(`tradeName=${encodeURIComponent(tradeName)}`);

    if (latitude !== undefined && latitude !== null && longitude !== undefined && longitude !== null) {
      params.push(`latitude=${encodeURIComponent(String(latitude))}`);
      params.push(`longitude=${encodeURIComponent(String(longitude))}`);
    }

    const url = `${this.endpoint}?${params.join('&')}`;
    return this.http.get<SearchResponseDto>(url);
  }

}
