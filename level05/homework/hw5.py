# Using for loop
user_input = int(input("Enter a number greater than 50: "))
if user_input > 50:
    print("Using for loop:")
    for i in range(1, user_input + 1, 5):
        print(i)

# Using while loop
if user_input > 50:
    print("Using while loop:")
    i = 1
    while i <= user_input:
        print(i)
        i += 5
else:
    print("The number must be greater than 50.")