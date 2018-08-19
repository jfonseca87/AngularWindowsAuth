using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Script.Serialization;

namespace TestWindowsAuth.Controllers
{
    [Authorize]
    public class TestController : ApiController
    {
        [HttpGet]
        public IHttpActionResult getValues()
        {
            return Ok("Values");
        }

        [HttpPost]
        public IHttpActionResult postValue(object value)
        {
            try
            {
                dataService valueSaved = new JavaScriptSerializer().Deserialize<dataService>(value.ToString());
                return Ok(string.Format("New value added: {0}", valueSaved.value));
            }
            catch (Exception ex)
            {

                string error = string.Format("Message: {0} - StackTrace: {1} - Inner Exception: {2}", ex.Message, ex.StackTrace, ex.InnerException);

                return BadRequest(error);
                
            }
            
        }

        [HttpPut]
        public IHttpActionResult putValue(object value)
        {
            try
            {
                dataService valueSaved = new JavaScriptSerializer().Deserialize<dataService>(value.ToString());
                return Ok(string.Format("Value modified: {0}", valueSaved.value));
            }
            catch (Exception ex)
            {

                string error = string.Format("Message: {0} - StackTrace: {1} - Inner Exception: {2}", ex.Message, ex.StackTrace, ex.InnerException);

                return BadRequest(error);

            }
            
        }

        [HttpDelete]
        public IHttpActionResult deleteValue(int id)
        {
            try
            {
                return Ok(string.Format("Value deleted with id = {0}", id));
            }
            catch (Exception ex)
            {
                string error = string.Format("Message: {0} - StackTrace: {1} - Inner Exception: {2}", ex.Message, ex.StackTrace, ex.InnerException);
                return BadRequest(error);
            }
            
        }
            
    }

    public class dataService
    {
        public string value { get; set; }
    }
      
    
}
