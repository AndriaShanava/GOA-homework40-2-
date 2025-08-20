#1)
def points(games):
    total = 0
    for i in games:
        parts = i.split(":")
        x = int(parts[0])
        y = int(parts[1])
        if x > y:
            total += 3
        elif x == y:
            total += 1
    return total

#2)
def lovefunc( flower1, flower2 ):
    if flower1 % 2 == 0 and flower2 % 2 != 0:
        return True
    elif flower1 % 2 != 0 and flower2 % 2 == 0:
        return True
    else:
        return False
    

#3)
def hoop_count(n):
    if n >= 10:
        return "Great, now move on to tricks"
    else:
        return "Keep at it until you get it"


#4)
def minimum(arr):
    min = arr[0]
    for i in arr:
        if i < min:
            min = i
    return min
def maximum(arr):
    max = arr[0]
    for i in arr:
        if i > max:
            max = i
    return max