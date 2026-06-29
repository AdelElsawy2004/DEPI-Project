 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { MedicineStockRequestDto } from '../DTO/Stock/medicine-stock-request.interface';
import { MedicineStockResponseDto } from '../DTO/Stock/medicine-stock-response.interface';

@Injectable({ providedIn: 'root' })
export class MedicineStockService extends ApiService {

  getAllStock(): Observable<MedicineStockResponseDto[]> {
    return this.http.get<MedicineStockResponseDto[]>(`${this.apiUrl}/MedicineStock`);
  }

  getStockByPharmacy(pharmacyId: number): Observable<MedicineStockResponseDto[]> {
    return this.http.get<MedicineStockResponseDto[]>(
      `${this.apiUrl}/MedicineStock/pharmacy/${pharmacyId}`
    );
  }

  getStockDetails(pharmacyId: number, medicineId: number): Observable<MedicineStockResponseDto> {
    return this.http.get<MedicineStockResponseDto>(
      `${this.apiUrl}/MedicineStock/${pharmacyId}/${medicineId}`
    );
  }

  addOrUpdateStock(dto: MedicineStockRequestDto): Observable<MedicineStockResponseDto> {
    return this.http.post<MedicineStockResponseDto>(`${this.apiUrl}/MedicineStock`, dto);
  }

  deleteStock(pharmacyId: number, medicineId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/MedicineStock/${pharmacyId}/${medicineId}`);
  }
}

