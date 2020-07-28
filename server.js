const express = require("express");
const app = express();
var http = require("http");
var socketIo = require("socket.io");
var path = require("path");

var easyrtc = require("easyrtc");
process.title = "node-easyrtc";

app.set("view engine", "ejs");
app.set("views", "views");

var webServer = http.createServer(app);

const KindahRoutes = require("./Routes/routes");
const AuthRoutes = require("./Routes/AuthRoutes.js");

// Start Socket.io so it attaches itself to Express server
var socketServer = socketIo.listen(webServer, { "log level": 1 });

easyrtc.setOption("logLevel", "debug");

// Overriding the default easyrtcAuth listener, only so we can directly access its callback
easyrtc.events.on("easyrtcAuth", function (
  socket,
  easyrtcid,
  msg,
  socketCallback,
  callback
) {
  easyrtc.events.defaultListeners.easyrtcAuth(
    socket,
    easyrtcid,
    msg,
    socketCallback,
    function (err, connectionObj) {
      if (err || !msg.msgData || !msg.msgData.credential || !connectionObj) {
        callback(err, connectionObj);
        return;
      }

      connectionObj.setField("credential", msg.msgData.credential, {
        isShared: false,
      });

      console.log(
        "[" + easyrtcid + "] Credential saved!",
        connectionObj.getFieldValueSync("credential")
      );

      callback(err, connectionObj);
    }
  );
});

// To test, lets print the credential to the console for every room join!
easyrtc.events.on("roomJoin", function (
  connectionObj,
  roomName,
  roomParameter,
  callback
) {
  console.log(
    "[" + connectionObj.getEasyrtcid() + "] Credential retrieved!",
    connectionObj.getFieldValueSync("credential")
  );
  easyrtc.events.defaultListeners.roomJoin(
    connectionObj,
    roomName,
    roomParameter,
    callback
  );
});

// Start EasyRTC server
var rtc = easyrtc.listen(app, socketServer, null, function (err, rtcRef) {
  console.log("Initiated");

  rtcRef.events.on("roomCreate", function (
    appObj,
    creatorConnectionObj,
    roomName,
    roomOptions,
    callback
  ) {
    console.log("roomCreate fired! Trying to create: " + roomName);

    appObj.events.defaultListeners.roomCreate(
      appObj,
      creatorConnectionObj,
      roomName,
      roomOptions,
      callback
    );
  });
});

//linking css AND JS FILES
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use(KindahRoutes);
app.use(AuthRoutes);

//in case of page not existing put error 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

webServer.listen(process.env.PORT || 8080, () => console.log("Alll is ok"));
//app.listen(process.env.PORT || 8080, () => console.log('Alll is ok'))
