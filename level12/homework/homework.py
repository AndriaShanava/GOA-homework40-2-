# 1) სიის ფუნქციები და მაგალითები

# append() - ამატებს ელემენტს სიის ბოლოში
lst = [1, 2, 3]
lst.append(4)  # [1, 2, 3, 4]

# extend() - ამატებს ელემენტებს სხვა სიიდან
lst.extend([5, 6])  # [1, 2, 3, 4, 5, 6]

# insert() - ამატებს ელემენტს მითითებულ ინდექსზე
lst.insert(2, 10)  # [1, 2, 10, 3, 4, 5, 6]

# remove() - შლის პირველივე მითითებულ მნიშვნელობას
lst.remove(10)  # [1, 2, 3, 4, 5, 6]

# pop() - შლის და აბრუნებს ელემენტს მითითებული ინდექსით (ან ბოლო ელემენტს)
lst.pop()  # აბრუნებს 6, სია ხდება [1, 2, 3, 4, 5]

# index() - აბრუნებს ელემენტის ინდექსს
lst.index(3)  # 2

# count() - ითვლის რამდენჯერ გვხვდება ელემენტი სიაში
lst.count(2)  # 1


# 2) ფუნქცია რომელიც აბრუნებს მხოლოდ int ტიპის ელემენტებს სიიდან

def filter_int_elements(list):
    result = []
    for element in list:
        if type(element) == int:
            result.append(element)
    return result


# 3) ფუნქცია ამოდის თუ არა ფესვი მომხმარებლის რიცხვიდან

def fesvi(num):
    if num < 0:
        return False
    root = int(num ** 0.5)
    return root * root == num



# 4) ფუნქცია რომელიც აბრუნებს რიცხვების სიას, რომლებიც არ არის 3-ის გამყოფი
def reverse_string(user):
    result = "" 
    for i in user:
        result = i + "-" + result
    return result
print(reverse_string("hello"))  

# 5) ფუნქცია რომელიც აგროვებს სიტყვებს სიაში სანამ "საკმარისია" არ შემოვა

def collect_until_enough(words):
    result = []
    i = 0
    while i < len(words) and words[i] != "საკმარისია":
        result.append(words[i])
        i += 1
    return result


# Bonus: ფუნქცია რომელიც აბრუნებს რიცხვის გამყოფების ჯამს

def sum_of_divisors(num):
    total = 0
    for i in range(1, num+1):
        if num % i == 0:
            total += i
    return total