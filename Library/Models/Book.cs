using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Library.Models
{
    public class Book
    {
        [Key]
        public int idBook { get; set; }
        [Required]
        public string title { get; set; }
        public string description { get; set; }
        public string image { get; set; }
        public int  idAuthor { get; set; }
        [ForeignKey("idAuthor")]
        public Author author { get; set; }
    }
}