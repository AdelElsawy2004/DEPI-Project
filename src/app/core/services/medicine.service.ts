import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineRequestDto } from '../DTO/Medicines/medicine-request.interface';
import { MedicineResponseDto } from '../DTO/Medicines/medicine-response.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MedicineService extends ApiService {

  private readonly endpoint = `${this.apiUrl}/medicines`;

  getAllMedicines(): Observable<MedicineResponseDto[]> {
    return this.http.get<MedicineResponseDto[]>(this.endpoint);
  }

  getMedicineById(id: number): Observable<MedicineResponseDto> {
    return this.http.get<MedicineResponseDto>(`${this.endpoint}/${id}`);
  }

  createMedicine(dto: MedicineRequestDto): Observable<MedicineResponseDto> {
    return this.http.post<MedicineResponseDto>(this.endpoint, dto);
  }

  updateMedicine(id: number, dto: MedicineRequestDto): Observable<void> {
    return this.http.put<void>(`${this.endpoint}/${id}`, dto);
  }

  deleteMedicine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
}