import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { MedicineCategoryRequestDto } from '../DTO/Medicines/medicine-category-request.interface';
import { MedicineCategoryResponseDto } from '../DTO/Medicines/medicine-category-response.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicineCategoryService extends ApiService {
  private readonly endpoint = `${this.apiUrl}/MedicineCategories`;

  getAllCategories(): Observable<MedicineCategoryResponseDto[]> {
    return this.http.get<MedicineCategoryResponseDto[]>(this.endpoint);
  }

  getCategoryById(id: number): Observable<MedicineCategoryResponseDto> {
    return this.http.get<MedicineCategoryResponseDto>(`${this.endpoint}/${id}`);
  }

  createCategory(
    dto: MedicineCategoryRequestDto
  ): Observable<MedicineCategoryResponseDto> {
    return this.http.post<MedicineCategoryResponseDto>(this.endpoint, dto);
  }

  updateCategory(
    id: number,
    dto: MedicineCategoryRequestDto
  ): Observable<void> {
    return this.http.put<void>(`${this.endpoint}/${id}`, dto);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
}

