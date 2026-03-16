arr = list(map(int, input().split()))
for i in range(1, len(arr)):
    if arr[i] * arr[i-1] > 0:
        print(arr[i-1], arr[i])
        break