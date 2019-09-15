/*
	Connect:

    Raspberry Pi -> Arduino
    (SDA) BCM2 => A4
    (SCL) BCM3 => A5
    GND => GND
*/
void getExternalState(int howMany)
{
  Serial.print("[!] updated time: ");
  Serial.println(howMany);

  appState.currentTime = "";
  while(Wire.available()){
    appState.currentTime += (char)Wire.read();
  }
}

void sendData(){
}

  
