name = input("Enter your name: ")
age = int(input("Enter your age: "))

while name != "Andria" or age != 14:
    print("სახელი ან ასაკი არასწორია, სცადე თავიდან.")
    name = input("შეიყვანე სახელი: ")
    age = int(input("შეიყვანე ასაკი: "))

print("ყოჩაღ, სახელი და ასაკი სწორია!")
