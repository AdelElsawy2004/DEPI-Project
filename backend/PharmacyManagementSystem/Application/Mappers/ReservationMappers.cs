using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Domain.Entities;

namespace PharmacyManagementSystem.Application.Mappers
{
    public static class ReservationMappers
    {
        public static ReservationResponseDto ToResponseDto(this Reservation reservation,string patientName)
        {
            return new ReservationResponseDto
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
    }
}
