namespace Library.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Authors",
                c => new
                    {
                        idAuthor = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Nationality = c.String(),
                    })
                .PrimaryKey(t => t.idAuthor);
            
            CreateTable(
                "dbo.Books",
                c => new
                    {
                        idBook = c.Int(nullable: false, identity: true),
                        title = c.String(nullable: false),
                        description = c.String(),
                        image = c.Binary(),
                        idAuthor = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.idBook)
                .ForeignKey("dbo.Authors", t => t.idAuthor, cascadeDelete: true)
                .Index(t => t.idAuthor);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Books", "idAuthor", "dbo.Authors");
            DropIndex("dbo.Books", new[] { "idAuthor" });
            DropTable("dbo.Books");
            DropTable("dbo.Authors");
        }
    }
}
