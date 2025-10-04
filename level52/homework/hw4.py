# 4)დაწერეთ ფუნქცია uppercase_text(text), რომელიც აბრუნებს სტრინგს, სადაც ყველა ასო არის დიდი.

def uppercase_text(text):
    result = ""
    for i in text:
        result += i.upper()
    return result