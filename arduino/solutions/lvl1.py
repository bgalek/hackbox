#!/usr/bin/python
import serial
import sys, getopt

def hack(device, bps):
    ser = serial.Serial(device, timeout=1, baudrate=bps)  # open serial port
    print(ser)
    print(readline(ser))
    print(readline(ser))
    print(readline(ser))
    print(readline(ser))
    print(readline(ser))
    print(readline(ser))
    writeline(ser, '1')
    print(readline(ser))
    writeline(ser, 'admin')
    print(readline(ser))

def readline(ser):
    return ser.readline().decode().rstrip("\n\r")

def writeline(ser, input):
    return ser.write(str.encode(input + '\n'))

def main(argv):
    device = "/dev/cu.usbmodem14101"
    bps = 115200
    try:
      opts, args = getopt.getopt(argv,"hd:b:",["device=","bps="])
    except getopt.GetoptError:
      print('lvl1.py -d <device> -b <bps>')
      sys.exit(2)
    for opt, arg in opts:
       if opt == '-h':
           print('lvl1.py -d <device> -b <bps>')
           sys.exit()
       elif opt in ("-d", "--device"):
           device = arg
       elif opt in ("-b", "--bps"):
           bps = arg
    hack(device, bps)

if __name__ == "__main__":
   main(sys.argv[1:])
