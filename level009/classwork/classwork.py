# 1) გარდაქმნა სახელის პირველი ასო დიდად
name_lowercase = "giorgi"
print(name_lowercase.capitalize())  

# 2) გარდაქმნა სახელის ყველა ასო დიდად
name = "giorgi"
print(name.upper())  

# 3) გარდაქმნა სახელის ყველა ასო პატარად
name_from_uppercase = "GIORGI"
print(name_from_uppercase.lower())  

# 4) გაიგო რომელ ინდექსზე დგას ასო "l"
surname = "suxitashvili"
print(surname.index("l"))  

# 5) გაიგო რომელ ინდექსზე დგას "aleqsandre"
names_list = ["giorgi", "lasha", "beqa", "aleqsandre", 5]
print(names_list.index("aleqsandre"))  

names = ["Anna", "Ben", "Catherine", "David", "Ella", "Frank", "Grace", "Hannah", "Ian", "Julia"]
print([names.upper() for names in names])

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
if numbers % 2 == 0:
    print("even")
else:
    print("odd")
