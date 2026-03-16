arr = list(map(int, input().split()))
for i in range(len(arr)):
    if(i - 1 >= 0 and arr[i] > arr[i-1]):
        print(arr[i])