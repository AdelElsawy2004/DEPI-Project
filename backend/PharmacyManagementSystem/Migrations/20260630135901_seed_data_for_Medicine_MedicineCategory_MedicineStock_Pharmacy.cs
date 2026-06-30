using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PharmacyManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class seed_data_for_Medicine_MedicineCategory_MedicineStock_Pharmacy : Migration
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
                    { 2, "Pain relievers and fever reducers", "Analgesics & Pain Relief" },
                    { 3, "Allergy and hay fever treatments", "Antihistamines" },
                    { 4, "Heart and blood pressure medications", "Cardiovascular" },
                    { 5, "Blood sugar management and diabetes treatments", "Antidiabetics" },
                    { 6, "Digestive system and stomach treatments", "Gastrointestinal" },
                    { 7, "Asthma, cough, and breathing treatments", "Respiratory" },
                    { 8, "Skin condition creams and ointments", "Dermatologicals" },
                    { 9, "Nutritional and immune support", "Vitamins & Supplements" },
                    { 10, "Viral infection treatments", "Antivirals" }
                });

            migrationBuilder.InsertData(
                table: "Pharmacies",
                columns: new[] { "Id", "Address", "City", "IsVerified", "Longitude", "Name", "Phone", "latitude" },
                values: new object[,]
                {
                    { 1, "90 El-Tahrir St", "Cairo", true, 31.235700000000001, "El-Ezaby Pharmacy", "0225741234", 30.0444 },
                    { 2, "Abbassiya Square", "Cairo", true, 31.275099999999998, "Care Pharmacy", "0224825678", 30.062100000000001 },
                    { 3, "15 Nasr City St", "Cairo", true, 31.330200000000001, "Seif Pharmacy", "0224123456", 30.056100000000001 },
                    { 4, "Horreya Avenue", "Alexandria", true, 29.918700000000001, "Rushdy Pharmacy", "034823456", 31.200099999999999 },
                    { 5, "El-Geish St", "Tanta", true, 30.9998, "Misr Pharmacy", "043335678", 30.7865 },
                    { 6, "Al-Galaa St", "Mansoura", false, 31.378499999999999, "Vezeeta Pharmacy", "052234567", 31.041399999999999 },
                    { 7, "Maadi Road 9", "Cairo", true, 31.256599999999999, "Delmar Pharmacy", "0223567890", 29.9602 },
                    { 8, "Corniche El-Nil", "Aswan", false, 32.899799999999999, "Nile Pharmacy", "0972345678", 24.088899999999999 },
                    { 9, "El-Bahr St", "Al-Minya", true, 30.7501, "El-Alfy Pharmacy", "0863456789", 28.1099 },
                    { 10, "Shebin El-Kom Main St", "Menofia", true, 31.008400000000002, "Nile Valley Pharmacy", "0482345678", 30.558 }
                });

            migrationBuilder.InsertData(
                table: "Medicines",
                columns: new[] { "Id", "ActiveIngredient", "CategoryId", "Form", "Manufactrer", "RequiresPrescription", "Strength", "TradeName" },
                values: new object[,]
                {
                    { 1, "Amoxicillin/Clavulanic Acid", 1, "Tablet", "GlaxoSmithKline", true, "1g", "Augmentin" },
                    { 2, "Ciprofloxacin", 1, "Tablet", "Bayer", true, "500mg", "Ciprobay" },
                    { 3, "Azithromycin", 1, "Capsule", "Pfizer", true, "250mg", "Azithromycin" },
                    { 4, "Doxycycline Hyclate", 1, "Capsule", "Generic", true, "100mg", "Doxycycline" },
                    { 5, "Clarithromycin", 1, "Tablet", "Abbott", true, "500mg", "Klacid" },
                    { 6, "Paracetamol", 2, "Tablet", "GSK", false, "500mg", "Panadol Extra" },
                    { 7, "Diclofenac", 2, "Tablet", "Novartis", true, "50mg", "Voltaren" },
                    { 8, "Ibuprofen", 2, "Tablet", "Abbott", false, "400mg", "Brufen" },
                    { 9, "Mefenamic Acid", 2, "Capsule", "Generic", true, "250mg", "Mefenamic Acid" },
                    { 10, "Flurbiprofen", 2, "Tablet", "Bayer", true, "100mg", "Mobilat" },
                    { 11, "Cetirizine", 3, "Tablet", "UCB", false, "10mg", "Zyrtec" },
                    { 12, "Loratadine", 3, "Tablet", "Bayer", false, "10mg", "Claritin" },
                    { 13, "Fexofenadine", 3, "Tablet", "Sanofi", true, "120mg", "Telfast" },
                    { 14, "Fluticasone", 3, "Nasal Spray", "GSK", true, "50mcg", "Avamys" },
                    { 15, "Budesonide", 3, "Nasal Spray", "AstraZeneca", true, "100mcg", "Rhinocort" },
                    { 16, "Bisoprolol", 4, "Tablet", "Merck", true, "5mg", "Concor" },
                    { 17, "Rosuvastatin", 4, "Tablet", "AstraZeneca", true, "10mg", "Crestor" },
                    { 18, "Amlodipine", 4, "Tablet", "Pfizer", true, "5mg", "Vasocardin" },
                    { 19, "Losartan", 4, "Tablet", "Merck", true, "50mg", "Cozaar" },
                    { 20, "Telmisartan", 4, "Tablet", "Boehringer", true, "40mg", "Micardis" },
                    { 21, "Glimepiride", 5, "Tablet", "Sanofi", true, "2mg", "Amaryl" },
                    { 22, "Metformin", 5, "Tablet", "Merck", true, "500mg", "Glucophage" },
                    { 23, "Sitagliptin", 5, "Tablet", "Merck", true, "100mg", "Januvia" },
                    { 24, "Insulin Degludec", 5, "Injection", "Novo Nordisk", true, "100U", "Tresiba" },
                    { 25, "Insulin Aspart", 5, "Injection", "Novo Nordisk", true, "100U", "NovoRapid" },
                    { 26, "Nifuroxazide", 6, "Capsule", "SEDICO", false, "200mg", "Antinal" },
                    { 27, "Omeprazole", 6, "Capsule", "AstraZeneca", true, "40mg", "Nexium" },
                    { 28, "Domperidone", 6, "Tablet", "Janssen", true, "10mg", "Motilium" },
                    { 29, "Mebeverine", 6, "Tablet", "Mepha", true, "135mg", "Colospasmin" },
                    { 30, "Sodium Alginate", 6, "Suspension", "Reckitt", false, "500mg", "Gaviscon" },
                    { 31, "Salbutamol", 7, "Inhaler", "GSK", true, "100mcg", "Ventolin" },
                    { 32, "Fluticasone/Salmeterol", 7, "Inhaler", "GSK", true, "250mcg", "Seretide" },
                    { 33, "Ipratropium", 7, "Inhaler", "Boehringer", true, "20mcg", "Atrovent" },
                    { 34, "Montelukast", 7, "Tablet", "Merck", true, "10mg", "Singulair" },
                    { 35, "Nedocromil", 7, "Inhaler", "Aventis", true, "2mg", "Tilade" },
                    { 36, "Betamethasone", 8, "Ointment", "GSK", true, "0.1%", "Betnovate" },
                    { 37, "Isoconazole", 8, "Cream", "Bayer", true, "1%", "Travocort" },
                    { 38, "Fusidic Acid", 8, "Cream", "Leo Pharma", true, "2%", "Fucidin" },
                    { 39, "Tacrolimus", 8, "Ointment", "Astellas", true, "0.1%", "Protopic" },
                    { 40, "Pimecrolimus", 8, "Cream", "Meda", true, "1%", "Elidel" },
                    { 41, "Multivitamins", 9, "Tablet", "Pfizer", false, "Adult Formula", "Centrum" },
                    { 42, "Vitamin C", 9, "Tablet", "EVA Pharma", false, "1000mg", "Vitamax" },
                    { 43, "B-Complex Vitamins", 9, "Tablet", "Merck", false, "Strong", "Neurobion" },
                    { 44, "Calcium/Vitamin D", 9, "Tablet", "Sanofi", false, "600mg/400IU", "Calcium-D" },
                    { 45, "Fish Oil", 9, "Capsule", "Nordic", false, "1000mg", "Omega-3" },
                    { 46, "Acyclovir", 10, "Cream", "GSK", false, "5%", "Zovirax" },
                    { 47, "Valacyclovir", 10, "Tablet", "GSK", true, "500mg", "Valtrex" },
                    { 48, "Famciclovir", 10, "Tablet", "Novartis", true, "250mg", "Famvir" },
                    { 49, "Abacavir/Lamivudine", 10, "Tablet", "GSK", true, "600mg/300mg", "Kivexa" },
                    { 50, "Atazanavir", 10, "Capsule", "BMS", true, "300mg", "Reyataz" }
                });

            migrationBuilder.InsertData(
                table: "MedicineStocks",
                columns: new[] { "Id", "ExpiryDate", "LastUpdated", "MedicineId", "PharmacyId", "Price", "QuantityAvailable" },
                values: new object[,]
                {
                    { 1, new DateTime(2027, 12, 31, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4443), 1, 1, 95.00m, 45 },
                    { 2, new DateTime(2027, 11, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4447), 2, 1, 85.50m, 30 },
                    { 3, new DateTime(2028, 3, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4453), 3, 1, 75.00m, 60 },
                    { 4, new DateTime(2027, 9, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4455), 4, 1, 45.00m, 25 },
                    { 5, new DateTime(2028, 6, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4457), 5, 1, 110.00m, 55 },
                    { 6, new DateTime(2028, 1, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4459), 6, 2, 30.50m, 120 },
                    { 7, new DateTime(2027, 8, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4461), 7, 2, 65.00m, 80 },
                    { 8, new DateTime(2028, 4, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4463), 8, 2, 40.00m, 100 },
                    { 9, new DateTime(2027, 10, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4465), 9, 2, 55.50m, 35 },
                    { 10, new DateTime(2028, 2, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4467), 10, 2, 70.00m, 45 },
                    { 11, new DateTime(2027, 9, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4469), 11, 3, 45.00m, 80 },
                    { 12, new DateTime(2028, 5, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4470), 12, 3, 50.00m, 65 },
                    { 13, new DateTime(2027, 12, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4472), 13, 3, 85.00m, 40 },
                    { 14, new DateTime(2028, 7, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4474), 14, 3, 95.00m, 55 },
                    { 15, new DateTime(2027, 11, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4476), 15, 3, 75.00m, 30 },
                    { 16, new DateTime(2028, 3, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4478), 16, 4, 115.00m, 150 },
                    { 17, new DateTime(2027, 9, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4479), 17, 4, 135.00m, 90 },
                    { 18, new DateTime(2028, 8, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4481), 18, 4, 95.00m, 70 },
                    { 19, new DateTime(2027, 10, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4521), 19, 4, 85.00m, 60 },
                    { 20, new DateTime(2028, 1, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4523), 20, 4, 105.00m, 45 },
                    { 21, new DateTime(2027, 11, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4524), 21, 5, 85.50m, 60 },
                    { 22, new DateTime(2028, 4, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4528), 22, 5, 40.00m, 200 },
                    { 23, new DateTime(2027, 8, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4529), 23, 5, 145.00m, 45 },
                    { 24, new DateTime(2028, 2, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4531), 24, 5, 220.00m, 25 },
                    { 25, new DateTime(2028, 6, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4533), 25, 5, 195.00m, 30 },
                    { 26, new DateTime(2028, 8, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4534), 26, 6, 25.00m, 200 },
                    { 27, new DateTime(2027, 12, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4536), 27, 6, 55.00m, 85 },
                    { 28, new DateTime(2028, 5, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4538), 28, 6, 65.00m, 50 },
                    { 29, new DateTime(2027, 9, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4540), 29, 6, 75.00m, 35 },
                    { 30, new DateTime(2028, 7, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4541), 30, 6, 30.00m, 150 },
                    { 31, new DateTime(2028, 1, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4543), 31, 7, 140.00m, 90 },
                    { 32, new DateTime(2027, 10, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4545), 32, 7, 210.00m, 40 },
                    { 33, new DateTime(2028, 3, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4547), 33, 7, 120.00m, 55 },
                    { 34, new DateTime(2027, 11, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4548), 34, 7, 95.00m, 65 },
                    { 35, new DateTime(2028, 9, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4550), 35, 7, 150.00m, 25 },
                    { 36, new DateTime(2027, 4, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4552), 36, 8, 70.00m, 25 },
                    { 37, new DateTime(2028, 6, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4554), 37, 8, 85.00m, 35 },
                    { 38, new DateTime(2027, 8, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4555), 38, 8, 95.00m, 20 },
                    { 39, new DateTime(2028, 2, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4557), 39, 8, 165.00m, 15 },
                    { 40, new DateTime(2027, 12, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4559), 40, 8, 145.00m, 30 },
                    { 41, new DateTime(2029, 5, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4560), 41, 9, 18.75m, 300 },
                    { 42, new DateTime(2029, 3, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4562), 42, 9, 15.00m, 250 },
                    { 43, new DateTime(2028, 11, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4564), 43, 9, 25.00m, 180 },
                    { 44, new DateTime(2029, 1, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4565), 44, 9, 35.00m, 120 },
                    { 45, new DateTime(2028, 9, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4568), 45, 9, 45.00m, 90 },
                    { 46, new DateTime(2027, 5, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4571), 46, 10, 60.25m, 100 },
                    { 47, new DateTime(2028, 4, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4573), 47, 10, 125.00m, 40 },
                    { 48, new DateTime(2027, 7, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4574), 48, 10, 110.00m, 35 },
                    { 49, new DateTime(2028, 8, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4576), 49, 10, 245.00m, 20 },
                    { 50, new DateTime(2028, 10, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2026, 6, 30, 13, 59, 1, 285, DateTimeKind.Utc).AddTicks(4578), 50, 10, 285.00m, 25 }
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
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 44);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 45);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 46);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 47);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 48);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 49);

            migrationBuilder.DeleteData(
                table: "MedicineStocks",
                keyColumn: "Id",
                keyValue: 50);

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
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 44);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 45);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 46);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 47);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 48);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 49);

            migrationBuilder.DeleteData(
                table: "Medicines",
                keyColumn: "Id",
                keyValue: 50);

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
