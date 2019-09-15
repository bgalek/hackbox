#include "Wire.h"

void serialBufferFlush() {
  while (Serial.available() > 0) {
    char t = Serial.read();
  }
}

String printDate() {
  byte DS1307_ADDRESS = 0x68;
  Wire.beginTransmission(DS1307_ADDRESS);
  Wire.write(0x00);
  Wire.endTransmission();
  Wire.requestFrom(DS1307_ADDRESS, 7);
  int second = bcdToDec(Wire.read());
  int minute = bcdToDec(Wire.read());
  int hour = bcdToDec(Wire.read() & 0b111111); //24 hour time
  int weekDay = bcdToDec(Wire.read()); //0-6 -> sunday - Saturday
  int monthDay = bcdToDec(Wire.read());
  int month = bcdToDec(Wire.read());
  int year = bcdToDec(Wire.read());
  return String(month) + "/" + String(monthDay) + "/" + String(year) + "/" + String(hour) + ":" + String(minute) + ":" + String(second);
}

// Convert normal decimal numbers to binary coded decimal
byte decToBcd(byte val) {
  return ((val / 10 * 16) + (val % 10));
}

// Convert binary coded decimal to normal decimal numbers
byte bcdToDec(byte val)  {
  return ((val / 16 * 10) + (val % 16));
}
