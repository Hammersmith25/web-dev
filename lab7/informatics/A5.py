def min_of_four(a, b, c, d):
    return min(a, b, c, d)

values = list(map(int, input().split()))
print(min_of_four(*values))