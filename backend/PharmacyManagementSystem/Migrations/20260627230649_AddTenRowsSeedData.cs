using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PharmacyManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class AddTenRowsSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "MedicineCategory",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[,]
                {
                    { 1, "Treatments for bacterial infections", "Antibiotics" },
                    { 2, "Pain relief and fever reducers", "Analgesics" },
                    { 3, "Allergy treatments", "Antihistamines" },
                    { 4, "Medications treating viral infections", "Antivirals" },
                    { 5, "Heart and blood pressure medications", "Cardiovascular" },
                    { 6, "Blood sugar management treatments", "Antidiabetics" },
                    { 7, "Stomach and digestion symptom relief", "Gastrointestinal" },
                    { 8, "Skin condition creams and treatments", "Dermatologicals" },
                    { 9, "Asthma and cough treatment solutions", "Respiratory" },
                    { 10, "Nutritional support and immune system boosters", "Vitamins & Supplements" }
                });

            migrationBuilder.InsertData(
                table: "Pharmacies",
                columns: new[] { "Id", "Address", "City", "IsVerified", "Longitude", "Name", "Phone", "latitude" },
                values: new object[,]
                {
                    { 1, "90 El-Tahrir St", "Cairo", true, 31.235700000000001, "El-Ezaby Pharmacy", null, 30.0444 },
                    { 2, "Abbassiya Square", "Cairo", true, 31.275099999999998, "Care Pharmacy", null, 30.062100000000001 },
                    { 3, "15 Nasr City St", "Cairo", true, 31.330200000000001, "Seif Pharmacy", null, 30.056100000000001 },
                    { 4, "Horreya Avenue", "Alexandria", true, 29.918700000000001, "Rushdy Pharmacy", null, 31.200099999999999 },
                    { 5, "El-Geish St", "Tanta", true, 30.9998, "Misr Pharmacy", null, 30.7865 },
                    { 6, "Al-Galaa St", "Mansoura", false, 31.378499999999999, "Vezeeta Pharmacy", null, 31.041399999999999 },
                    { 7, "Maadi Road 9", "Cairo", true, 31.256599999999999, "Delmar & Attalla", null, 29.9602 },
                    { 8, "Corniche El-Nil", "Aswan", false, 32.899799999999999, "19011 Pharmacy", null, 24.088899999999999 },
                    { 9, "El-Bahr St", "Al-Minya", true, 30.7501, "El-Alfy Pharmacy", null, 28.1099 },
                    { 10, "Shebin El-Kom Main St", "Menofia", true, 31.008400000000002, "Nile Pharmacy", null, 30.558 }
                });

            migrationBuilder.InsertData(
                table: "Medicines",
                columns: new[] { "Id", "ActiveIngredient", "CategoryId", "Form", "Manufactrer", "RequiresPrescription", "Strength", "TradeName" },
                values: new object[,]
                {
                    { 1, "Amoxicillin", 1, "Tablet", null, true, "1g", "Augmentin" },
                    { 2, "Paracetamol", 2, "Tablet", null, false, "500mg", "Panadol Extra" },
                    { 3, "Cetirizine", 3, "Tablet", null, false, "10mg", "Zyrtec" },
                    { 4, "Acyclovir", 4, "Cream", null, false, "5%", "Zovirax" },
                    { 5, "Bisoprolol", 5, "Tablet", null, true, "5mg", "Concor" },
                    { 6, "Glimepiride", 6, "Tablet", null, true, "2mg", "Amaryl" },
                    { 7, "Nifuroxazide", 7, "Capsule", null, false, "200mg", "Antinal" },
                    { 8, "Betamethasone", 8, "Ointment", null, true, "0.1%", "Betnovate" },
                    { 9, "Salbutamol", 9, "Inhaler", null, true, "100mcg", "Ventolin" },
                    { 10, "Multivitamins", 10, "Tablet", null, false, "Adult Formula", "Centrum" }
                });

            migrationBuilder.InsertData(
                table: "MedicineStocks",
                columns: new[] { "Id", "ExpiryDate", "LastUpdated", "MedicineId", "PharmacyId", "Price", "QuantityAvailable" },
                values: new object[,]
                {
                    { 1, new DateTime(2027, 12, 31, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 27, 23, 6, 48, 689, DateTimeKind.Utc).AddTicks(7659), 1, 1, 95.00m, 45 },
                    { 2, new DateTime(2028, 6, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 27, 23, 6, 48, 689, DateTimeKind.Utc).AddTicks(7664), 2, 2, 30.50m, 120 },
                    { 3, new DateTime(2027, 9, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 27, 23, 6, 48, 689, DateTimeKind.Utc).AddTicks(7667), 3, 3, 45.00m, 80 },
                    { 4, new DateTime(2027, 5, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 27, 23, 6, 48, 689, DateTimeKind.Utc).AddTicks(7745), 4, 4, 60.25m, 35 },
                    { 5, new DateTime(2028, 3, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 27, 23, 6, 48, 689, DateTimeKind.Utc).AddTicks(7748), 5, 5, 115.00m, 150 },
                    { 6, new DateTime(2027, 11, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 27, 23, 6, 48, 689, DateTimeKind.Utc).AddTicks(7750), 6, 6, 85.50m, 60 },
                    { 7, new DateTime(2028, 8, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 27, 23, 6, 48, 689, DateTimeKind.Utc).AddTicks(7752), 7, 7, 25.00m, 200 },
                    { 8, new DateTime(2027, 4, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 27, 23, 6, 48, 689, DateTimeKind.Utc).AddTicks(7754), 8, 8, 70.00m, 25 },
                    { 9, new DateTime(2028, 1, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 27, 23, 6, 48, 689, DateTimeKind.Utc).AddTicks(7756), 9, 9, 140.00m, 90 },
                    { 10, new DateTime(2029, 5, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 27, 23, 6, 48, 689, DateTimeKind.Utc).AddTicks(7758), 10, 10, 18.75m, 300 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "MedicineCategory",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "MedicineCategory",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "MedicineCategory",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "MedicineCategory",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "MedicineCategory",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "MedicineCategory",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "MedicineCategory",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "MedicineCategory",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "MedicineCategory",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "MedicineCategory",
                keyColumn: "Id",
                keyValue: 10);
        }
    }
}
