using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PharmacyManagementSystem.Application.DTOs.Reservation.Patient;
using PharmacyManagementSystem.Application.DTOs.Reservation.Pharmacist;
using PharmacyManagementSystem.Application.Interfaces.Services;

namespace PharmacyManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ReservationsController : ControllerBase
    {
        private readonly IReservationService _reservationService ;

        public ReservationsController(IReservationService reservationService)
        {
            _reservationService = reservationService ;
        }

        #region PHARMACY ADMIN
        // GET: api/reservations/pharmacy/5
        [HttpGet("pharmacy/{pharmacyId}")]
        [Authorize(Roles = "PHARMACYADMIN,SUPERADMIN")]
        public async Task<ActionResult<List<PharmacistReservationResponseDto>>> GetPharmacyReservations(int pharmacyId)
        {
            var reservations = await _reservationService.GetPharmacyReservationsAsync(pharmacyId);
            return Ok(reservations);
        }
        #endregion


        #region PATIENT
        // POST: api/Reservations
        [HttpPost]
        public async Task<ActionResult<PatientReservationResponseDto>> CreateReservation(
            [FromBody] CreateReservationRequestDto request)
        {
            var patientId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if(string.IsNullOrEmpty(patientId))
                return Unauthorized(new { Message = "User not authenticated" });

            try
            {
                var result = await _reservationService.CreateReservationAsync(patientId,request);
                return CreatedAtAction(nameof(GetMyReservations),new { },result);
            }
            catch(InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // GET: api/Reservations/my-reservations
        [HttpGet("my-reservations")]
        public async Task<ActionResult<MyReservationsResponseDto>> GetMyReservations()
        {
            var patientId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if(string.IsNullOrEmpty(patientId))
                return Unauthorized(new { Message = "User not authenticated" });

            var result = await _reservationService.GetMyReservationsAsync(patientId);
            return Ok(result);
        }

        // DELETE: api/Reservations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> CancelReservation(int id)
        {
            var patientId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if(string.IsNullOrEmpty(patientId))
                return Unauthorized(new { Message = "User not authenticated" });

            var result = await _reservationService.CancelReservationAsync(id,patientId);
            if(!result)
                return NotFound(new { Message = "Reservation not found or you don't have permission" });

            return Ok(new { Message = "Reservation cancelled successfully" });
        }
        #endregion
    }
}
