export interface PharmacyAdminProfileDto {
    fullName: string;
    email: string;
    pharmacyName: string;
    city: string;
    address: string | null;
    phone: string | null;
    pharmacyId: number | null;
    createdAt: string;
}