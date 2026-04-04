# 5)დაწერეთ ფუნქცია concat_strings(words), რომელიც იღებს სტრინგების სიას და აბრუნებს ერთ სტრინგად გაერთიანებულ ყველა სიტყვას.

def concat_strings(words):
    result = ""
    for i in words:
        result += i
    return result