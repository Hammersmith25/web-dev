def xor(a,b):
    if((a == True or b == True) and a != b):
        return True
    else: return False

a = True
b = False
print(xor(a,b))