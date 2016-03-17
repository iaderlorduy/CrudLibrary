using System.ComponentModel.DataAnnotations;

namespace Library.Models
{
    public class Author
    {
        [Key]
        public int idAuthor { get; set; }
        [Required]
        public string Name { get; set; }
        public string Nationality { get; set; }
    }
}