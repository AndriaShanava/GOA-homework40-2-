# 3)ფუნქციამ მიიღოს სტრინგი და სია აკონტროლოს: დაუბრუნოს მხოლოდ ის სიტყვები, რომლებიც მეტია 3 სიმბოლოზე.
# 👉 "I love Python and AI" → ["love", "Python"]

def sia(string):
    list = string.split()
    result = []
    for i in list:
        if len(i) > 3:
            result.append(i)
    return result