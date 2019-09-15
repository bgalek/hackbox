#include "Wire.h"

#define MY_I2C_ADDRESS 0x05
struct State {
  String currentTime;
};
State appState;

void setup() {
  Serial.begin(9600);
  Wire.begin(MY_I2C_ADDRESS);
  Wire.onReceive(getExternalState);
  Wire.onRequest(sendData);
  showMenu();
}

void loop() {
  waitForInput();
}

void waitForInput() {
  if (Serial.available()) {
    int option = Serial.parseInt();
//    serialBufferFlush();
    switch (option) {
      case 1:
        lvl1();
        break;
      case 2:
        lvl2();
        break;
      default:
        Serial.println("Not implemented");
        break;
    }
    showMenu();
  }
}
