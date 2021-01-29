using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Detail
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string FirstName { get; set; }
        [Required]
        [Column(TypeName = "varchar(16)")]
        public string Secondname { get; set; }
        [Required]
        [Column(TypeName = "varchar(16)")]
        public int PhoneNumber { get; set; }
        [Required]
        [Column(TypeName = "varchar(16)")]
        public string Region { get; set; }
        [Required]
        [Column(TypeName = "varchar(16)")]
        public string Date { get; set; }
    }
}
