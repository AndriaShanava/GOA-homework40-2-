# 1) მომხმარებლის მიერ შეყვანილი ორი რიცხვისთვის სხვადასხვა მათემატიკური მოქმედებების ფუნქციები

# შეკითხვის ფუნქცია
def get_numbers():
    num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
    num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))
    return num1, num2

# ჯამი
def add_numbers(a, b):
    return a + b

# გამოკლება
def subtract_numbers(a, b):
    return a - b

# გამრავლება
def multiply_numbers(a, b):
    return a * b

# გაყოფა
def divide_numbers(a, b):
    if b != 0:
        return a / b
    else:
        return "გაყოფა ნულზე შეუძლებელია"

# 2) ფუნქცია, რომელიც აბრუნებს სიის რიცხვების ჯამს
def sum_list(numbers):
    return sum(numbers)
print(sum_list([1, 2, 3, 4, 5]))

# 3) ფუნქცია, რომელიც ამოწმებს რიცხვის ლუწობას ან კენტობას
def is_even_or_odd(number):
    return "ლუწია" if number % 2 == 0 else "კენტია"

# 4) ფუნქცია, რომელიც ამოწმებს რიცხვის დადებითობას ან უარყოფითობას
def is_positive_or_negative(number):
    if number > 0:
        return "დადებითია"
    elif number < 0:
        return "უარყოფითია"
    else:
        return "ნულია"

# 5) ფუნქცია, რომელიც აბრუნებს რიცხვის საპირისპიროს
def opposite_number(number):
    return -number

# კომენტარები:
# ფუნქციები კოდის ორგანიზებისთვის და ხელახლა გამოყენებისთვის გამოიყენება.
# ისინი საშუალებას გვაძლევს, კოდი უფრო გასაგები და მარტივად შესანარჩუნებელი გავხადოთ.
# ფუნქციები იქმნება `def` საკვანძო სიტყვით, სახელით და პარამეტრებით.
# ფუნქციებს არგუმენტებად გადაეცემა მონაცემები, ხოლო ისინი აბრუნებენ შედეგს.