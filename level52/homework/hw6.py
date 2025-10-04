# 6)დაწერეთ ფუნქცია multiples_of_five(lst), რომელიც აბრუნებს სიას, სადაც არის მხოლოდ ის რიცხვები, რომლებიც იყოფა 5–ზე და 3-ზე

def multiples_of_five(lst):
    result = []
    for i in lst:
        if i % 5 == 0 and i % 3 == 0:
            result.append(i)
    return result