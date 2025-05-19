#1) შექმენით ფუნქცია, სადაც მოხმარებელს შემოატანინებთ რიცხვს და ამ რიცხვის გამყოფებს დააბრუნებს სიაში.

number = int(input("შეიყვანეთ რიცხვი: "))

def get_divisors():
    for i in range(1, number + 1):
        if number % i == 0:
            return i
print(get_divisors())