export interface MedicineRequestDto {
  tradeName: string;
  activeIngredient: string;
  manufactrer?: string | null;
  form: string;
  strength: string;
  requiresPrescription: boolean;
  categoryId?: number | null;
}

