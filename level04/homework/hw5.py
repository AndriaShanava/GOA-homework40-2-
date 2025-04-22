correct_password = "1234"
attempts = 0

while attempts < 3:
    password = input("შეიყვანე პაროლი: ")
    if password == correct_password:
        print("პაროლი სწორია!")
        break
    else:
        print("არასწორი პაროლი!")
    attempts += 1

if attempts == 3:
    print("ცდების რაოდენობა ამოიწურა.")
