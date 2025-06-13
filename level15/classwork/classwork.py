#1) დააბრუნოს კენტ ინდექსებზე მდგომი ასოები
def get_odd_index_chars(s):
    result = ''
    for i in range(len(s)):
        if i % 2 == 1:
            result += s[i]
    return result

print(get_odd_index_chars("aleqsandre"))  

#2) დააბრუნოს მხოლოდ ლუწი რიცხვები სიიდან
def filter_even_numbers(numbers):
    even_numbers = []
    for num in numbers:
        if num % 2 == 0:
            even_numbers.append(num)
    return even_numbers

print(filter_even_numbers([1, 2, 3, 4, 5, 6]))  

#3) დააბრუნოს ასოების ინდექსები სტრინგიდან (len-ის გარეშე)
def get_char_indices(s):
    indices = []
    index = 0
    for _ in s:
        indices.append(index)
        index += 1
    return indices

print(get_char_indices("fortoxali"))  

#(კვლავ) ელემენტების ინდექსები სახელების სიიდან (len-ის გარეშე)
def get_list_indices(lst):
    indices = []
    index = 0
    for _ in lst:
        indices.append(index)
        index += 1
    return indices

print(get_list_indices(["nino", "dato", "saba"]))  

#4) ამოშალოს კენტი რიცხვები და დააბრუნოს სია
def remove_odd_numbers(numbers):
    result = []
    for i in numbers:
        if i % 2 != 0:
            result.remove(i)
    return result

print(remove_odd_numbers([1, 2, 3, 4, 5]))  
