using PharmacyManagementSystem.Application.DTOs.Reservation.Patient;
using PharmacyManagementSystem.Application.DTOs.Reservation.Pharmacist;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Mappers
{
    public static class ReservationMappers
    {
        public static PharmacistReservationResponseDto ToPharmacyAdminResponseDto(this Reservation reservation,string patientName)
        {
            return new PharmacistReservationResponseDto
            {
                Id = reservation.Id,
                PatientName = patientName,
                MedicineName = reservation.Medicine?.TradeName ?? "Unknown Medicine",
                MedicineQuantity = reservation.Quantity,
                Status = reservation.Status.ToString(),
                CreatedAt = reservation.CreatedAt,
                ExpiresAt = reservation.ExpiresAt,
                Notes = reservation.Notes
            };
        }

        public static PatientReservationResponseDto ToPatientResponseDto(this Reservation reservation)
        {
            return new PatientReservationResponseDto
            {
                Id = reservation.Id,
                MedicineName = $"{reservation.Medicine?.TradeName} {reservation.Medicine?.Strength}" ?? "Unknown Medicine",
                PharmacyName = reservation.Pharmacy?.Name ?? "Unknown Pharmacy",
                Quantity = reservation.Quantity,
                Status = reservation.Status.ToString(),
                CreatedAt = reservation.CreatedAt,
                ExpiresAt = reservation.ExpiresAt
            };
        }
    }
}
