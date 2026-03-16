lst = []
for i in range(int(input())):
        name = input()
        score = float(input())
        lst.append([name,score])

lst.sort(key=lambda x: x[1])
print(lst)
        
