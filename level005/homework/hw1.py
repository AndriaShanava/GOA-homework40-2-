my_name = "Andria"
my_age = 25  

if my_age > 18:
    user_name = input("შეიყვანეთ თქვენი სახელი: ")
    if user_name == my_name:
        print("we have same names and we are adults")
    else:
        print("we do not have same names but we are adults")
elif my_age < 18:
    print("we do not have same names and we are not adults")