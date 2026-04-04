# 2)დაწერეთ ფუნქცია categorize_numbers(lst), რომელიც იღებს რიცხვების სიას და ამოწმებს თუ რიცხვი:

# "positive" – დადებითი რიცხვები

# "negative" – უარყოფითი რიცხვები

# "zero" – ნულების რაოდენობა

def categorize_lst(list):
    positive = 0
    negative = 0
    zero = 0
    for i in list:
        if i > 0:
            positive += i
        elif i < 0:
            negative += i
        else:
            zero.count(0)
    return positive, negative, zero
            