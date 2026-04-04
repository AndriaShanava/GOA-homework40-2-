#1) შექმენით ფუნქცია, სადაც მოხმარებელს შემოატანინებთ რიცხვს და ამ რიცხვის გამყოფებს დააბრუნებს სიაში.

user_number = int(input("შეიყვანეთ რიცხვი: "))

def ar_iyofa(number):
    result = [] 
    for i in range(1, number):
        if number % i == 0:
            result.append(i)
    return result
print(ar_iyofa(user_number))