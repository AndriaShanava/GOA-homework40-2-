# 8)დაწერეთ ფუნქცია total_length(words), რომელიც აბრუნებს სიაში არსებული ყველა სტრინგის სიგრძეების ჯამს.

def total_length(words):
    total = 0
    for i in words:
        total += len(i)
    return total
