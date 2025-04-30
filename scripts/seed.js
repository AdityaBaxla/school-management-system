const {
  sequelize,
  Student,
  Class,
  AcademicYear,
  Configuration,
  Enrollment,
  FeeType,
  FeeStructure,
  FeeInvoice,
  FeePayment,
} = require("../database/models");

async function seed() {
  try {
    // 1) Recreate schema
    await sequelize.sync({ force: true });
    console.log("✔️ Database synced (all tables dropped & re-created)");

    // 2) Create lookup data
    const ay = await AcademicYear.create({
      name: "2024-2025",
      startDate: "2024-06-01",
      endDate: "2025-05-31",
    });

    const grade1 = await Class.create({ name: "Grade 1", section: "A" });
    const grade2 = await Class.create({ name: "Grade 2", section: "B" });

    const tuition = await FeeType.create({
      name: "Tuition",
      description: "Tuition fees",
    });
    const activity = await FeeType.create({
      name: "Activity",
      description: "Extra-curricular fees",
    });

    await FeeStructure.bulkCreate([
      {
        class_id: grade1.id,
        academic_year_id: ay.id,
        fee_type_id: tuition.id,
        amount: 1000,
        dueDate: "2024-07-15",
      },
      {
        class_id: grade1.id,
        academic_year_id: ay.id,
        fee_type_id: activity.id,
        amount: 200,
        dueDate: "2024-07-15",
      },
    ]);

    // 3) Create a student & enrollment
    const student = await Student.create({
      admissionNumber: "ADM001",
      folioNumber: "FOL1001",
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "2015-08-15",
      gender: "Male",
    });

    const enrollment = await Enrollment.create({
      student_id: student.id,
      class_id: grade1.id,
      academic_year_id: ay.id,
    });

    // 4) Invoice + payment
    const invoice = await FeeInvoice.create({
      student_id: student.id,
      enrollment_id: enrollment.id,
      invoiceDate: new Date(),
      totalAmount: 1200,
      status: "pending",
    });

    await FeePayment.create({
      fee_invoice_id: invoice.id,
      paymentDate: new Date(),
      amountPaid: 1200,
      paymentMethod: "Cash",
      transactionReference: "TXN123ABC",
    });

    console.log("✔️ Dummy data has been populated.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
}

seed();
