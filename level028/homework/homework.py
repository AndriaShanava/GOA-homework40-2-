#1)

def square_sum(numbers):
    sum = 0
    for i in numbers:
        sum += i * i
    return sum

#2)

def are_you_playing_banjo(name):
    if name[0] == "R" or name[0] == "r":
        return name + " plays banjo"
    else:
        return name + " does not play banjo"
    
#3)

def abbrev_name(name):
    splited_str = name.split(" ")
    return splited_str[0][0].upper() + "." + splited_str[1][0].upper()

#4)

def find_average(numbers):
    if len(numbers) == 0:
        return 0
    else:
        return sum(numbers) / len(numbers)
    
#5)

def count_sheep(n):
    counting_sheeps = ""
    for i in range(1, n +1):
        counting_sheeps += str(i) + " sheep..."
    return counting_sheeps