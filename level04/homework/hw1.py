text = input("Enter the text: ")
number = int(input("Enter the number: "))
result = ""

for char in text:
    result += char * number

print(result)
