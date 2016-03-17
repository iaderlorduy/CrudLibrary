using Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Library.DTOs
{
    public class BookDto
    {
        public int idBook { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public int idAuthor { get; set; }
        public Author author { get; set; }
        public string image { get; set; }
    }
}