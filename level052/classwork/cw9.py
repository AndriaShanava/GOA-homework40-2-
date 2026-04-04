# 9)ფუნქციამ მიიღოს სიტყვების სია და დააბრუნოს სია დაქანცული სიგრძის ზრდის მიხედვით.
# 👉 ["apple", "hi", "banana"] → ["hi", "apple", "banana"]

def sia(list):
    return sorted(list, key=len)