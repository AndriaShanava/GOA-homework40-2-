#1) შექმენით ფუნქცია,
# რომელსაც არგუმენტად გადაეცემა მომხმარებლის შემოტანილი სიტყვა.
# ხმოვნები სადაც იქნება ! ნიშნით ჩაინაცვლოს და თანხმოვნები *-ით სხვა დანარჩენი სიმბოლო იყოს ისე როგორ იქნება. 

# user_string = input("შეიყვანეთ სიტყვა: ")

# def change(user):
#     for i in user:
#         if i.lower() in "aeiou":
#             result += "!"
#         elif i.lower() in "bcdfghjklmnpqrstvwxyz":
#             result += "*"
#         else:
#             result += i
#     return result

# print(change(user_string))
    



# # 2) ფუნქცია სახელისა და ასაკის შემოწმებისთვის
# def check_license(name, age):
#     my_name = "გიორგი"  # შეცვალეთ თქვენი სახელით
#     if age > 18 and name == my_name:
#         return "თქვენ წარმატებით აიღეთ მართვის მოწმობა."
#     else:
#         return "თქვენ ჩაიჭერით."

# # 3) შექმენით ფუნქცია, რომელიც მომხმარებლის შემოტანილ float ტიპის მოცანემს გახლიჩავს. შედეგი ასე რომ იყოს :  19.27 => 19 + 0.27 

# shemotanili_float = float(input("შეიყვანეთ float ტიპის რიცხვი: "))

# def split_float(num):
#     integer_part = int(num)
#     fractional_part = round(num - integer_part, 10)
#     return f"{integer_part} + {fractional_part}"

# print(split_float(float(shemotanili_float)))

# 4)  შექმენით ფუნქცია რომელიც მომხმარებელს შემოატანინებს სიტყვას მანამ სანამ არ შემოიტანს 'საკმარისია'ს.
# ეს შემოტანილი სიტყვები დაამატეთ სიაში და გაფილტრეთ. სიაში უნდა იყოს ისეთი სიტყვები რომლის სიგრძეც არ აღემატება 5-ს და ურევია რიცხვები.

def filter_user_string():
    user_list = []
    while True:
        user = input("Enter your string: ")
        if user == "საკმარისია":
            break
        else:
            user_list.append(user)

    result = []
    for String in user_list:
        if len(String) < 5:
            for i in String:
                if i in "0123456789":
                    result.append(String)
                    break
    return user_list
print(filter_user_string())


#BONUS

number = int(input("Enter: "))

def numbers(user):
    result = []
    for i in range(1, user+1):
        for a in range(2, i):
            if i % a == 0:
                break
            else:
                result.append(i)
    return result

    sum = 1
    for i in result:
        sum *= i
    return sum
print(numbers(number))