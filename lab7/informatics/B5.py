def power(a, n):
    if n == 0:
        return 1
    res = 1.0
    for i in range(n):
        res*=a
    return res

a_input = float(input())
n_input = int(input())
print(power(a_input, n_input))