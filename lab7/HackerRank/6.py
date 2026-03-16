n = int(input())
def leap(a):
    if(a % 4 == 0 and a % 100 == 1 or a % 400 == 0): return "YES"
    else: return "NO"
print(leap(n))