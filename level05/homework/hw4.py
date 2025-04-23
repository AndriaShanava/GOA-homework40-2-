number = int(input("შეიყვანეთ ათზე მაღალი რიცხვი: "))

if number <= 10:
    print("გთხოვთ, შეიყვანეთ ათზე მაღალი რიცხვი.")
else:
    # For loop-ის გამოყენებით
    total_sum = 0
    for i in range(5, number + 1):
        total_sum += i
    print("For loop result:", total_sum)

    # While loop-ის გამოყენებით
    total_sum = 0
    i = 5
    while i <= number:
        total_sum += i
        i += 1
    print("While loop result:", total_sum)