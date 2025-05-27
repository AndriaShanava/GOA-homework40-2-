# 1) ფუნქცია, რომელიც სტრინგიდან კენტ ინდექსზე მდგომ ასოებს აშორებს
def kent_indeqsze(string):
    result = []
    for i, char in enumerate(string):
        if i % 2 == 0:
            result.append(char)
    return ''.__add__(*result) if result else ''

# 2) ფუნქცია, რომელიც სიიდან კენტ ინდექსზე მდგომ კენტ რიცხვებს აშორებს და ახალ სიაში აგროვებს
def odd_index_odd_numbers(lst):
    result = []
    for i, num in enumerate(lst):
        if i % 2 == 1 and num % 2 == 1:
            result.append(num)
    return result

# 4) ფუნქცია, რომელიც მომხმარებლისგან იღებს რიცხვს და სტრინგს და აბრუნებს შესაბამის ინდექსზე მდგომ ასოს
def char_at_index():
    s = input("შეიყვანეთ სტრინგი: ")
    idx = int(input("შეიყვანეთ ინდექსი: "))
    if 0 <= idx < len(s):
        print(s[idx])
    else:
        print("არასწორი ინდექსი")

# 5) ფუნქცია, რომელიც სიიდან აშორებს სიტყვებს, რომელთა სიგრძეც ნაკლებია 5-ზე
def remove_short_words(lst):
    result = []
    for word in lst:
        if len(word) >= 5:
            result.append(word)
    return result