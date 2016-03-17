namespace Library.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Library.Models.LibraryContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Library.Models.LibraryContext context)
        {
            context.Authors.AddOrUpdate(
                new Author[] {
                    new Author() { idAuthor = 1, Name = "Ralls, Kim" },
                    new Author() { idAuthor = 2, Name = "Corets, Eva" },
                    new Author() { idAuthor = 3, Name = "Randall, Cynthia" },
                    new Author() { idAuthor = 4, Name = "Thurman, Paula" }
             });

           

            context.Books.AddOrUpdate(
                new Book[] {
                    new Book() {
                        idBook = 1,
                        title = "Midnight Rain",
                        idAuthor = 1,
                        description ="A former architect battles an evil sorceress.",
                        image="http://placehold.it/700x400"
                    },
                    new Book() {
                        idBook = 2,
                        title = "Maeve Ascendant",
                        idAuthor = 2,
                        description ="After the collapse of a nanotechnology society, the young" + "survivors lay the foundation for a new society.",
                        image="http://placehold.it/700x400"

                    },
                    new Book() {
                        idBook = 3,
                        title = "The Sundered Grail",
                        idAuthor = 2,
                        description = "The two daughters of Maeve battle for control of England.",
                        image = "http://placehold.it/700x400"
                    },
                    new Book() {
                        idBook = 4,
                        title = "Lover Birds",
                        idAuthor= 3,
                        description = "When Carla meets Paul at an ornithology conference, tempers fly.",
                        image="http://placehold.it/700x400"
                    },
                    new Book() {
                        idBook = 5,
                        title = "Splish Splash",
                        idAuthor = 4,
                        description = "A deep sea diver finds true love 20,000 leagues beneath the sea.",
                        image="http://placehold.it/700x400"
                    },
    });
        }
    }
}
