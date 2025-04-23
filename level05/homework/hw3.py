number = int(input("შეიყვანეთ რიცხვი: "))

print("For loop result:")
for i in range(1, number + 1):
    print(i)


print("While loop result:")
i = 1
while i <= number:
    print(i)
    i += 1