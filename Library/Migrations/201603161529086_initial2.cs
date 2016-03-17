namespace Library.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial2 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Books", "image", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Books", "image", c => c.Binary());
        }
    }
}
