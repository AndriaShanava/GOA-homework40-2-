num = int(input("Enter the number: "))
square = num ** 2
total_sum = 0

for i in range(num, square + 1):
    total_sum += i

print(total_sum)
