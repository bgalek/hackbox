# Hackbox

- Dostajesz pudełko, pyk, podpinasz pod usb [zadanie - wpadnij ze to serial, i odczytaj jego output]

- Dostajesz linka do strony rejestracji.
  Po zarejestrowaniu powiemy Ci jak przełączyć hackbox w tryb "zadań"

Po przełączeniu w tryb zadań:

- Na serialu dostajesz menu z listą zadań:

  ┌──────────────────┐
  │   Hackbox Menu   │
  ├──────────────────┤
  │ 1 │ Speedtest    │
  │ 2 │ Radom Password Generator      │
  │ 3 │ Zadanie      │
  │ 4 │ Zadanie      │
  │ 5 │ Zadanie      │
  └──────────────────┘

## Zadanie #1

   To zadanie dla szybkoliczących, jeśli brak Ci szybkości, wracaj do podstawówki.

   Podaj wynik: 2+2*2

   Za wolno!

### Przykładowa Implementacja:

    Użytkownik ma 50ms na podanie odpowiedzi, jeśli nie zdąży w określonym czasie, dostaje komunikat o porażce.

### Sukces

    flag_you_have_reached_ludicrous_speed

## Zadanie #2

   Losujemy szczęśliwy numerek:
   Ptaszki ćwierkają, że suma kontrolna dzisiejszego wyniku to (0x3232323)

     Wprowadź swój traf: [] <enter>

     Wyslowano: 666 suma kontrolna (0x3232323)
     Gdyby to był Twój: (0x00052)

   Przegrałeś ;(

### Przykładowa Implementacja:

   Algorytm liczy random(1,100000)*wartosc_oswietlenia_w_pomieszczeniu.
   Chodzi o to, żeby wyczaić, że jakby seedem randoma było 0 to wynik stałby się przewidywalny.

## Zadanie #3

  Czas zdesychronizowany!                      [22:56:00]
  Zadanie wymaga zegarmistrzowskiej precyzji.. [WAITING!]
  Synchronizowanie czasu                       [NTP FAIL]
  NTP serwer podstawowy                        [TIMEOUT!]
  Synchronizowanie czasu                       [NTP FAIL]
  NTP zapasowego serwera time2.hackbox.pl      [TIMEOUT!]

  +------------------------------------------------------+
  | To zadanie można rozwiązywać tylko od 02:54 do 03:00 |
  +------------------------------------------------------+

  Która godzina jest teraz w australii?

  Wprowadź godzinę: []

  Czas zdesychronizowany!                      [02:54:00]
  Synchronizowanie czasu ntp.australian.com    [WAITING!]
  Sprawdzanie odpowieździ z ntp.australian.com [NTP FAIL]

  Nie udało się zweryfikować odpowiedzi.

## Zadanie 4

