const fs = require("fs");
// Read the seeds.json file
const seedData = fs.readFileSync("userSeeds.json", "utf8");
const data = JSON.parse(seedData);
// Define your seeding function
async function seed() {
  try {
    // Perform seeding operations heres
    console.log("Seeding data...");
    // Example: Insert data into a database
    await insertDataIntoDatabase(data);
    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Seeding failed:", error);
  }
}
// Example function to insert data into a database
async function insertDataIntoDatabase(data) {
  // Implement your logic to insert data into a database here
  // This is just a placeholder example
  console.log("Inserting data into the database:", data);
}
// Call the seed function to initiate the seeding process
seed();
