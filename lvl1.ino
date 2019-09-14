/**
    Connect:

    Nothing
*/

void lvl1() {
  int timeout = Serial.getTimeout();
  Serial.println("Pass:");
  Serial.setTimeout(30);
  String pass = Serial.readString();
  pass.trim();
  if (pass != "admin") {
    Serial.println("Tooo slow man!");
  } else {
    Serial.println("Nice. flag_123");
  }
  Serial.setTimeout(timeout);
}
