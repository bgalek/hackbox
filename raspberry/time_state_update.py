#!/usr/bin/env python
import socket
import struct
from datetime import datetime
from socket import AF_INET, SOCK_DGRAM

from smbus2 import smbus2

bus = smbus2.SMBus(1)
address = 0x05


def writeString(value):
    b = bytearray()
    b.extend(value)
    bus.write_i2c_block_data(address, 0, b)
    return -1


def readString():
    smsMessage = ""
    data = bus.read_i2c_block_data(address, 0, 30)
    for i in range(len(data)):
        if (data[i] < 128):
            smsMessage += chr(data[i])
    return smsMessage


def getNTPTime(host="pool.ntp.org"):
    port = 123
    buf = 1024
    address = (host, port)
    msg = '\x1b' + 47 * '\0'
    TIME1970 = 2208988800L  # 1970-01-01 00:00:00
    client = socket.socket(AF_INET, SOCK_DGRAM)
    client.sendto(msg, address)
    msg, address = client.recvfrom(buf)
    t = struct.unpack("!12I", msg)[10]
    t -= TIME1970
    return datetime.utcfromtimestamp(t).strftime('%Y-%m-%d %H:%M:%S')


if __name__ == "__main__":
    writeString(getNTPTime())

