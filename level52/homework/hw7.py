# 7)დაწერეთ ფუნქცია index_of_max(lst), რომელიც აბრუნებს სიაში ყველაზე დიდი რიცხვის ინდექსს.

def index_of_max(lst):
    max_value = lst[0]
    max_index = 0
    for i in range(len(lst)):
        if lst[i] > max_value:
            max_value = lst[i]
            max_index = i
    return max_index