#1) სახელების სიაში მყოფი ასოების დაბეჭდვა

def print_all_letters(names):
    for name in names:
        for letter in name:
            print(letter)

print_all_letters(["nino", "dato", "saba"])

#2) ლუწი რიცხვები ლუწ ინდექსზე + საშუალო არითმეტიკული

def even_numbers_on_even_indices(nums):
    result = []
    for i in range(len(nums)):
        if i % 2 == 0 and nums[i] % 2 == 0:
            result.append(nums[i])
    
    if result:
        average = sum(result) / len(result)
    else:
        average = 0
    
    print(result)
    print(average)

even_numbers_on_even_indices([2, 3, 4, 5, 6, 7, 8])

#3) ლუწი რიცხვების ჯამი და კენტი რიცხვების რაოდენობა

def jami_da_raodenoba(number):
    even_sum = 0
    odd_count = 0
    i = 1
    while i <= number:
        if i % 2 == 0:
            even_sum += i
        else:
            odd_count += 1
        i += 1
    average = (even_sum + odd_count) / 2
    print(even_sum)
    print(odd_count)
    print(average)


#4) სახელი + რიცხვი → იპოვე ასობგერა

name = input("შეიყვანე სახელი: ")
index = int(input("შეიყვანე რიცხვი: "))

if 0 <= index < len(name):
    print(f"{index}-ზე მდგომი ასო არის: {name[index]}")
else:
    print("არასწორი ინდექსი")

#5) WHILE და FOR ციკლით ყოველი მეორე ასოს დაბეჭდვა

#WHILE:
name = input("შეიყვანე სახელი: ")
i = 1
while i < len(name):
    print(name[i])
    i += 2

#for:
name = input("შეიყვანე სახელი: ")
for i in range(1, len(name), 2):
    print(name[i])

#6) პაროლის შემოწმება სანამ არ დაემთხვევა
correct_password = "admin123"
user_password = input("შეიყვანე პაროლი: ")

while user_password != correct_password:
    print("არასწორი პაროლი. სცადე თავიდან.")
    user_password = input("შეიყვანე პაროლი: ")

print("CORRECT")
