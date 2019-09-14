/**
    Connect:

    RTC Module
    SCL => A5
    SDA => A4
    GND => GND
    VCC => 5v
*/

void lvl2() {
  Serial.println("Czas zdesychronizowany!                      [22:56:00]");
//  Serial.println(printDate());
  Serial.print("Secret time:");
  Serial.println(appState.currentTime);
}
