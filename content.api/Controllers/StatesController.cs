using Microsoft.AspNetCore.Mvc;
using ContentApi.Models;
using ContentApi.Services;

namespace ContentApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StatesController : ControllerBase
    {
        private readonly IStateService _stateService;

        public StatesController(IStateService stateService)
        {
            _stateService = stateService;
        }

        /// <summary>
        /// Get all states
        /// </summary>
        /// <returns>List of all US states</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<State>>> GetStates()
        {
            try
            {
                var states = await _stateService.GetStatesAsync();
                return Ok(states);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        /// <summary>
        /// Search states by name or abbreviation
        /// </summary>
        /// <param name="query">Search query</param>
        /// <returns>Filtered list of states</returns>
        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<State>>> SearchStates([FromQuery] string query)
        {
            try
            {
                var states = await _stateService.SearchStatesAsync(query);
                return Ok(states);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
