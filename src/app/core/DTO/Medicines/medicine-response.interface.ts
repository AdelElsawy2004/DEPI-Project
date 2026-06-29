export interface MedicineResponseDto {
  id: number;
  tradeName: string;
  activeIngredient: string;
  manufactrer?: string | null;
  form: string;
  strength: string;
  requiresPrescription: boolean;
  categoryId?: number | null;
}

