#1) ყველაზე პატარა და დიდი რიცხვი სიაში
def find_min_max(numbers):
    return min(numbers), max(numbers)
#2) სტრინგები რომლების სიგრძეც მეტია 6-ზე — შებრუნებული და Capitalized
def process_long_strings(strings):
    result = []
    for s in strings:
        if len(s) > 6:
            reversed_s = s[::-1].capitalize()
            result.append(reversed_s)
    return result
#3) წინადადების დაშლა, სიტყვების Capitalize და @-ით გაერთინება
def sentence_to_modified_string(sentence):
    words = sentence.split()
    capitalized_words = [word.capitalize() for word in words]
    return '@'.join(capitalized_words)
#4) 1-დან 100-მდე კენტი რიცხვები
#for ციკლით:
for i in range(1, 101):
    if i % 2 != 0:
        print(i)
#while ციკლით:
i = 1
while i <= 100:
    if i % 2 != 0:
        print(i)
    i += 1
#5)  1-დან 50-მდე რიცხვები რომლებიც იყოფიან 3-ზეც და 5-ზეც
#for ციკლით:
for i in range(1, 51):
    if i % 3 == 0 and i % 5 == 0:
        print(i)
#while ციკლით:
i = 1
while i <= 50:
    if i % 3 == 0 and i % 5 == 0:
        print(i)
    i += 1
#6) 100-ჯერ "hello" ტერმინალში
#for ციკლით:
for i in range(100):
    print("hello")
#while ციკლით:
i = 0
while i < 100:
    print("hello")
    i += 1
#7) 