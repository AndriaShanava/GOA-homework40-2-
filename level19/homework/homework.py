#1.ფუნქცია – სიტყვების პირველი ასოს დიდი ასოთი დაბრუნება
def capitalize_words(sentence):
    words = sentence.split()
    capitalized = []
    for i in words:
        if i:
            capitalized.append(i[0].upper() + i[1:])
        else:
            capitalized.append(i)
    return ' '.join(capitalized)

#2.ფუნქცია – სიიდან მხოლოდ სტრინგების დაბრუნება
def filter_strings(data_list):
    result = []
    for i in data_list:
        if type(i) == str:
            result.append(i)
    return result

#3.მომხმარებლის მიერ შემოტანილი სიტყვის ასოების გამოტანა for და while ციკლებით
# with for loop
def print_letters_for(word):
    for i in word:
        print(i)

# with while loop
def print_letters_while(word):
    i = 0
    while i < len(word):
        print(word[i])
        i += 1

#4.ფუნქცია – კენტ რიცხვთა კვადრატების ჯამის გამოთვლა
def odd_squares_sum(n):
    total = 0
    for i in range(1, n + 1):
        if i % 2 == 1:
            total += i * i
    return total

#5.ფუნქცია – ლუწ ინდექსებზე მდგომი სიმბოლოების გაერთიანება
def even_index_letters(word):
    result = ''
    for i in range(len(word)):
        if i % 2 == 0:
            result += word[i]
    return result