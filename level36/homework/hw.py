# 1)
def to_alternating_case(string):
    result = ""
    for i in string:
        if i.isupper():
            result += i.lower()
        else:
            result += i.upper()
    return result

#2)






#3)
def bonus_time(salary, bonus):
    if bonus:
        salary *= 10
    return f"${salary}"

#4)



#5)

def capitalize_word (word : str):
    return word[0].upper() + word[1:]