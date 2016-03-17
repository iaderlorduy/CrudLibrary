using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Library.DTOs
{
    public class BookDetailDto
    {
        public string title { get; set; }
        public string description { get; set; }
        public string author { get; set; }
        public Byte[] image { get; set; }
    }
}