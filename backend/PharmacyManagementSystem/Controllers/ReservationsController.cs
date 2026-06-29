using Microsoft.AspNetCore.Mvc;
using PharmacyManagementSystem.Application.DTOs;
using PharmacyManagementSystem.Application.Interfaces.Services;

namespace PharmacyManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationsController : ControllerBase
    {
        private readonly IReservationService _reservationService ;

        public ReservationsController(IReservationService reservationService)
        {
            _reservationService = reservationService ;
        }

        [HttpGet("pharmacy/{pharmacyId}")]
        public async Task<ActionResult<List<ReservationResponseDto>>> GetPharmacyReservations(int pharmacyId)
        {
            var reservations = await _reservationService.GetPharmacyReservationsAsync(pharmacyId);
            return Ok(reservations);
        }
    }
}
