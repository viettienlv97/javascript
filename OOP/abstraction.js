"use strict"

// tính trìu tượng

// Real phone
class Phone {
  charge
  volume
  voltage
  temperature

  homeBtn() {}
  volumeBtn() {}
  screen() {}
  verifyVolt() {}
  verifyTemp() {}
  vibrate() {}
  soundSpeaker() {}
  frontCamOn() {}
  frontCamOff() {}
  rearCamOn() {}
  rearCamOff() {}
}

// Abstract phone
class Phone {
  charge
  volume

  homeBtn() {}
  volumeBtn() {}
  screen() {}
}
