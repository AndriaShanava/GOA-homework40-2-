# 1) ფუნქცია, რომელიც სტრინგიდან კენტ ინდექსზე მდგომ ასოებს აშორებს
def kent_indeqsze(string):
    result = []
    for i, char in enumerate(string):
        if i % 2 == 0:
            result.append(char)
    return ''.__add__(*result) if result else ''

# 2) ფუნქცია, რომელიც სიიდან კენტ ინდექსზე მდგომ კენტ რიცხვებს აშორებს და ახალ სიაში აგროვებს
def luwi_indeqsze_luwi_ricxvi(lst):
    result = []
    for i, num in(lst):
        if i % 2 == 1 and num % 2 == 1:
            result.append(num)
    return result

# 4) ფუნქცია, რომელიც მომხმარებლისგან იღებს რიცხვს და სტრინგს და აბრუნებს შესაბამის ინდექსზე მდგომ ასოს
def char_at_index():
    string = input("შეიყვანეთ სტრინგი: ")
    index = int(input("შეიყვანეთ ინდექსი: "))
    if 0 <= index < len(string):
        print(string[index])
    else:
        print("არასწორი ინდექსი")

# 5) ფუნქცია, რომელიც სიიდან აშორებს სიტყვებს, რომელთა სიგრძეც ნაკლებია 5-ზე
def aklebs_sityvas(lst):
    result = []
    for i in lst:
        if len(i) >= 5:
            result.append(i)
    return result
