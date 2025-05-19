#4) მომხმარებელს შემოატანინეთ ტექსტი და ამ ტექსტში დაითვალეთ რიცხვების რაოდენობა.

user_string = input("Enter a string: ")

def count_numbers(string):
    myArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    count = 0
    for i in myArr:
        count += string.count(i)
    return count
print("Number of digits in the string:", count_numbers(user_string))