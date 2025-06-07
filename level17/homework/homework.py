# 1. ფუნქცია, რომელიც ითვლის განსხვავებული ასოების რაოდენობას სიტყვაში
def count_unique_letters(word):
    string = ""
    for i in word:
        if i not in string:
            string += i
    return len(string)
print(count_unique_letters("ალექსანდრე"))  

# 2. for loop & while loop - თითოეული ასოს გამოტანა
def asos_dawera_for_gamoyenebit(word):
    for i in word:
        print(i)

def asos_dawera_while_gamoyenebit(word):
    i = 0
    while i < len(word):
        print(word[i])
        i += 1
print(asos_dawera_while_gamoyenebit("ალექსანდრე"))

# 3. ფუნქცია, რომელიც დაშლის float-ს 5.2, 5 + 0.2
def float(num):
    integer = int(num)
    decimal_part = num - integer
    print(integer, "+", decimal_part)
print(float(5.2))
# 4. ფუნქცია, რომელიც პოულობს ყველაზე დიდ რიცხვს სიაში (max-ის გარეშე)
def find_max(numbers):
    max_num = numbers[0]
    for i in numbers:
        if i > max_num:
            max_num = i
    return max_num
print(find_max([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


#Bonus: შექმენით ფუნქცია, სადაც მომხმარებელი ითამაშებს ჯეირანს მანამ სანამ სამჯერ არ წააგებს. 
player1 = input("player1: ")
player2 = input("player2: ")
def play_game(first, second):
    player1_score = 0
    player2_score = 0
    while player1_score < 3 and player2_score < 3:
        player1_choice = input(first, "შეარჩიეთ ქვა, ქაღალდი ან მაკრატელი:" )
        player2_choice = input(second, "შეარჩიეთ ქვა, ქაღალდი ან მაკრატელი:" )

        if player1_choice == player2_choice:
            print("გადაწყვეტილება: ფრედ!")
        elif (player1_choice == "ქვა" and player2_choice == "მაკრატელი") or \
             (player1_choice == "მაკრატელი" and player2_choice == "ქაღალდი") or \
             (player1_choice == "ქაღალდი" and player2_choice == "ქვა"):
            print(first, "იგებს!")
            player1_score += 1
        else:
            print(second, "იგებს!")
            player2_score += 1

        print("Score -  "+ first +":" + player1_score, second + ":" + player2_score)


print(play_game(player1, player2))