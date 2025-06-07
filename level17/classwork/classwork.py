#1)
def gaxlichavs(aleqsandre):
    return aleqsandre.split("ე")
print(gaxlichavs("ალექსანდრე")) 

#2)
def stringi(text, index):
    return text[:index]
print(stringi("ჰიდროელექტროსადგური", 7))


#3)
def sheerteba_siis(list1, list2):
    sheerteba = list1 + list2
    return " ".join(sheerteba)
print(sheerteba_siis(["apple", "banana"], ["orange", "kiwi"]))

#4)
def is_first_letter_uppercase(text):
    if not text:  
        return False
    return text[0].isupper()

#5)
def sityvebis_washla(words):
    result = []
    for i in words:
        if len(i) < 5:
            result.remove(i)
    return result

#6) 
def get_capitalized_words(words):
    result = []
    for i in words:
        if i == i[0].isupper():
            result.append(i)
    return result

print(get_capitalized_words(["kaxi", "ana", "Aleqsandre", "ia", "Giorgi", "Iamze", "beqa"]))

#7)
def integeris_amoshla_siidan(lst):
    result = []
    for i in lst:
        if not isinstance(i, int):
            result.append(i)
    return result

print(integeris_amoshla_siidan(["kaxi", 5, "Aleqsandre", 10, "Giorgi", 20, "beqa"]))