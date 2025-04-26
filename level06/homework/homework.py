# 1) მონაცემთა ტიპები და მაგალითები:
# String (სტრინგი) - ტექსტური მონაცემები. მაგალითად: "Hello, World!"
# Integer (ინტეჯერი) - მთელი რიცხვები. მაგალითად: 42
# Float (ფლოუტი) - ათწილადი რიცხვები. მაგალითად: 3.14
# Boolean (ბულეანი) - ლოგიკური მნიშვნელობები. მაგალითად: True, False
# List (ლისტი) - ელემენტების კოლექცია. მაგალითად: [1, 2, 3]
# Dictionary (დიქშენარი) - გასაღები-მნიშვნელობის წყვილები. მაგალითად: {"key": "value"}
# Tuple (ტაპლი) - უცვლელი ელემენტების კოლექცია. მაგალითად: (1, 2, 3)
\
# 2) მონაცემთა ტიპების გარდაქმნა
string_var = "123"
integer_var = 456

# String-დან Integer-ში გარდაქმნა
converted_to_int = int(string_var)

# Integer-დან String-ში გარდაქმნა
converted_to_str = str(integer_var)

# 3) მომხმარებლისგან მონაცემების მიღება და გარდაქმნა
name = input("შეიყვანეთ სახელი: ")
surname = input("შეიყვანეთ გვარი: ")
age = int(input("შეიყვანეთ ასაკი: "))
weight = float(input("შეიყვანეთ წონა: "))

# 4) მათემატიკური და შედარების ოპერატორები
num1 = 10
num2 = 5

addition = num1 + num2  # შეკრება
subtraction = num1 - num2  # გამოკლება
multiplication = num1 * num2  # გამრავლება
division = num1 / num2  # გაყოფა
modulus = num1 % num2  # ნაშთი
exponentiation = num1 ** num2  # ხარისხში აყვანა
floor_division = num1 // num2  # მთლიანი გაყოფა

greater_than = num1 > num2  # მეტია
less_than = num1 < num2  # ნაკლებია
equal_to = num1 == num2  # ტოლია
not_equal_to = num1 != num2  # არ არის ტოლი
greater_or_equal = num1 >= num2  # მეტია ან ტოლია
less_or_equal = num1 <= num2  # ნაკლებია ან ტოლია

# 5) and და or ოპერატორები
# and - აბრუნებს True-ს მხოლოდ მაშინ, როცა ორივე პირობა True-ა.
# or - აბრუნებს True-ს, თუ რომელიმე პირობა მაინც True-ა.
example_and = (5 > 3) and (2 < 4)  # True
example_or = (5 > 3) or (2 > 4)  # True

# 6) for და while ციკლები 1-დან 100-მდე 10-ის სტეპით
for i in range(1, 101, 10):
    print(i)

i = 1
while i < 101:
    print(i)
    i += 10

# 7) 1-დან 20-მდე რიცხვების ჯამი for და while ციკლებით
sum_for = 0
for i in range(1, 21):
    sum_for += i
print("ჯამი (for):", sum_for)

sum_while = 0
i = 1
while i <= 20:
    sum_while += i
    i += 1
print("ჯამი (while):", sum_while)

# 8) მომხმარებლის ასაკის შემოწმება
user_age = int(input("შეიყვანეთ ასაკი: "))
if user_age > 30:
    print("ზრდასრული ხარ")
elif user_age == 30:
    print("შენ ხარ 30 წლის")
else:
    print("კარგი ასაკი გაქვს")