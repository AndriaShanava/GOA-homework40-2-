# 3)დაწერეთ ფუნქცია double_numbers(lst), რომელიც აბრუნებს ახალ სიას, სადაც თითოეული ელემენტი ორმაგია.

def double_numbers(lst):
    result = []
    for i in lst:
        result.append(i * 2)
    return result