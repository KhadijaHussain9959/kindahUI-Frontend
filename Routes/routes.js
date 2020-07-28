const express = require("express");
const router = express.Router();

const KindahController = require("../Controller/controllers.js");

//index page
router.get("/", KindahController.getHomePage);

// Patient Routes
router.get("/patientDashboard", KindahController.getPatientDashboard);

router.get("/patientAppointments", KindahController.getPatientAppointments);

router.get("/patientVideo", KindahController.getPatientVideo);

router.get("/patientReqAppointment", KindahController.getPatientReqAppointment);

//Doctor Routes

router.get("/docCallLog", KindahController.getDoctorCallLog);

router.get("/docCallQueue", KindahController.getDoctorCallQueue);

router.get("/docDashboard", KindahController.getDoctorDashboard);

router.get("/docAppointments", KindahController.getDoctorAppointments);

router.get("/kindahPatients", KindahController.getKindahPatients);

router.get("/docVideoCall", KindahController.getDoctorVideoCall);

router.get("/docEditProfile", KindahController.getDoctorEditProfile);
// video page
// router.get("/public/video", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../", "public", "video.html"));
// });

module.exports = router;
