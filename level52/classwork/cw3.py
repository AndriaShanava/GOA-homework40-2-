# 3)დაწერე ფუნქცია, რომელიც მიიღებს სტრინგს და დააბრუნებს ყველაზე გრძელ სიტყვას.
# მაგ: "I love programming in Python" → "programming".

def sia(list):
    words = list.split()
    big = words[0]

    for i in words:
        if len(i) > len(big):
            big = i
    return big