import sql from './configs/db.js';

async function checkTable() {
    try {
        const result = await sql`SELECT table_name FROM information_schema.tables WHERE table_name = 'creations'`;
        if (result.length > 0) {
            console.log("Table 'creations' exists.");
        } else {
            console.log("Table 'creations' does NOT exist.");
        }
    } catch (error) {
        console.error("Error checking table:", error.message);
    }
}

checkTable();
