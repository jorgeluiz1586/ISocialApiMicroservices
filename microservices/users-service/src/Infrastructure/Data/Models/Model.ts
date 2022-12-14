import database from "src/Config/Database";

export default abstract class Model
{
    constructor(private model = database, private tableName: string) {}

    public all()
    {
        database.query(`SELECT * FROM ${this.tableName}`,
            function(err, results, fields) {
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
                if (err) {
                    console.log(err);
                } else {
                    return results;
                }
            }
        )
    }
}