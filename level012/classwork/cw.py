user_string = input("Enter a string: ") 
def count_a_letters(input_string):
    return input_string.lower().count('a')

print(f"The letter 'a' appears {count_a_letters(user_string)} times.")