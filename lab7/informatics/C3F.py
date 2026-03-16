import math
a = int(input())
b = int(input())

for i in range(a,b+1):
     tmp = math.floor(math.sqrt(i))
     if tmp**2 == i:
          print(i)
