num = int(input("შეიყვანეთ რიცხვი: "))

print(f"{num}-ის გამყოფებია:")

for i in range(1, num + 1):
    if num % i == 0:
        print(i)
