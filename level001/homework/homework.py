user_name = "ნიკოლოზი"
user_age = 25
is_student = True

print(f"მომხმარებლის სახელი:, {user_name}")
print(f"მომხმარებლის ასაკი:, {user_age}")
print(f"სტუდენტია: {is_student}")

name = "goga"
name = "giorgi"
namE = "lasha"
NAME = "zoia"

# ამ კოდში შექმნილია 3 დამოუკიდებელი ცვლადი:
# 1. name     (ბოლო მნიშვნელობა იქნება "giorgi")
# 2. namE     (გამოირჩევა ერთი დიდი ასოთი, ეს სხვა ცვლადია, მნიშვნელობაა "lasha")
# 3. NAME     (ყველა დიდი ასოა, ცალკე ცვლადია, მნიშვნელობაა "zoia")

# Python-ში ცვლადების სახელები case-sensitive-ია.
# ანუ name, namE და NAME ერთმანეთისგან დამოუკიდებელი ცვლადებია.
# ამიტომ საერთო ჯამში გვაქვს 3 განსხვავებული ცვლადი.


#კონკატინაცია არის სტრიინგების შეერთების პროცესი 

# მაგალითად:
# name = "giorgi"
# surname = "giorgadze"
# full_name = name + " " + surname
# print(full_name)


first_name = "ანდრია"
last_name = "შანავა"
age = 15
height = 170 
location = "ზუგდიდი"

sentence = "ჩემი სახელი არის " + first_name + " " + last_name + ", ვარ " + str(age) + " წლის, ჩემი სიმაღლეა " + str(height) + " სმ და ვცხოვრობ ქალაქ " + location + "-ში."

print(sentence)


car_name = input("შეიყვანეთ ავტომობილის სახელი: ")
car_color = input("შეიყვანეთ ავტომობილის ფერი: ")
car_price = int(input("შეიყვანეთ ავტომობილის ფასი: "))
release_year = int(input("შეიყვანეთ გამოშვების თარიღი (წელი): "))

sentence = "თქვენი ავტომობილი არის " + car_name + ", ფერი: " + car_color + ", ფასი: " + str(car_price) + " ლარი და გამოშვებულია " + str(release_year) + " წელს."


print(sentence)


string = "Hello, World!"
integer = 42
float_number = 3.14
boolean = True



number_int = 42

number_str = str(number_int)

string_number = "123"

converted_int = int(string_number)

print("სტრინგად ქცეული რიცხვი:", number_str)
print("ინტეჯერად ქცეული სტრინგი:", converted_int)


age = int(input("Enter your age: "))
print(f"You are {age} years old.")


text = input("Enter the name: ")
integer = int(input("Enter the number: "))
print(text * integer)


float_num = float(input("Enter the number: "))
int_num = int(input("Enter the number: "))


print(f"{float_num} + {int_num} = {float_num + int_num}")
print(f"{float_num} - {int_num} = {float_num - int_num}")
print(f"{float_num} * {int_num} = {float_num * int_num}")
print(f"{float_num} / {int_num} = {float_num / int_num}")

