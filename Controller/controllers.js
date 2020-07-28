exports.getHomePage = (req, res, next) => {
  res.render("index", {
    pageTitle: "Kindah Home",
  });
};

//Patient Routes

exports.getPatientDashboard = (req, res, next) => {
  res.render("Patient/patientDashboard.ejs", {
    pageTitle: "Patient Dashboard",
  });
};

exports.getPatientAppointments = (req, res, next) => {
  res.render("Patient/patientAppointments.ejs", {
    pageTitle: "Patient Appointments ",
  });
};

exports.getPatientVideo = (req, res, next) => {
  res.render("Patient/patientVideo.ejs", {
    pageTitle: "Patient Video Call ",
  });
};

exports.getPatientReqAppointment = (req, res, next) => {
  res.render("Patient/patientReqAppointment.ejs", {
    pageTitle: "Patient Req Appointment ",
  });
};

//Doctors Routes

exports.getDoctorCallLog = (req, res, next) => {
  res.render("Doctor/docCallLog.ejs", {
    pageTitle: "Doctor Call Log ",
  });
};

exports.getDoctorCallQueue = (req, res, next) => {
  res.render("Doctor/docCallQueue.ejs", {
    pageTitle: "Doctor Call Queue ",
  });
};

exports.getDoctorAppointments = (req, res, next) => {
  res.render("Doctor/docAppointments.ejs", {
    pageTitle: "Doctor Appointments ",
  });
};

exports.getDoctorDashboard = (req, res, next) => {
  res.render("Doctor/docDashboard.ejs", {
    pageTitle: "Doctor Dashboard ",
  });
};

exports.getKindahPatients = (req, res, next) => {
  res.render("Doctor/kindahPatients.ejs", {
    pageTitle: "Kindah Patients ",
  });
};

exports.getDoctorVideoCall = (req, res, next) => {
  res.render("Doctor/docVideoCall.ejs", {
    pageTitle: "Doctor Video  ",
  });
};

exports.getDoctorEditProfile = (req, res, next) => {
  res.render("Doctor/docEditProfile.ejs", {
    pageTitle: "Edit Profile",
  });
};
