# 1)დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მის ციფრებს ზრდადობით დალაგებულს სიაში.
# მაგ: 40251 -> [0,1,2,4,5].

def sia(list):
    result = []
    for i in str(list):
        result.append(int(i))
    return sorted(result)
    