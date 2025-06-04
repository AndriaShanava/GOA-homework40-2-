# 1. ფუნქცია, რომელიც ითვლის განსხვავებული ასოების რაოდენობას სიტყვაში
def count_unique_letters(word):
    return len(set(word))

# 2. for loop & while loop - თითოეული ასოს გამოტანა
def asos_dawera_for_gamoyenebit(word):
    for letter in word:
        print(letter)

def asos_dawera_while_gamoyenebit(word):
    i = 0
    while i < len(word):
        print(word[i])
        i += 1

# 3. ფუნქცია, რომელიც დაშლის float-ს
def split_float(num):
    integer_part = int(num)
    decimal_part = num - integer_part
    print(f"{integer_part} + {decimal_part} = {num}")

# 4. ფუნქცია, რომელიც პოულობს ყველაზე დიდ რიცხვს სიაში (max-ის გარეშე)
def find_max(numbers):
    if not numbers:
        return None
    max_num = numbers[0]
    for i in numbers:
        if i > max_num:
            max_num = i
    return max_num

# Bonus: ჯეირანი - ქაღალდი, მაკრატელი, ქვა

import random

def play_game():
    choices = ['ქვა', 'მაკრატელი', 'ქაღალდი']
    wageba = 0
    while wageba < 3:
        user = input("აირჩიე: ქვა, მაკრატელი, ქაღალდი: ")
        computer = random.choice(choices)
        print(f"კომპიუტერი: {computer}")
        if user == computer:
            print("ფრე!")
        elif (user == 'ქვა' and computer == 'მაკრატელი') or \
             (user == 'მაკრატელი' and computer == 'ქაღალდი') or \
             (user == 'ქაღალდი' and computer == 'ქვა'):
            print("მოიგე!")
        else:
            print("წააგე!")
            wageba += 1
    print("თამაში დასრულდა, სამჯერ წააგე.")

