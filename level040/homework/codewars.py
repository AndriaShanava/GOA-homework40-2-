#1)

def lovefunc( flower1, flower2 ):
    if flower1 % 2 == 0 and flower2 % 2 != 0:
        return True
    elif flower1 % 2 != 0 and flower2 % 2 == 0:
        return True
    else:
        return False
    

#2)

def disemvowel(s):
    for i in "aeiouAEIOU":
        s = s.replace(i,'')
    return s

#3)

def high_and_low(numbers):
    parts = numbers.split()
    nums = []
    for i in parts:
        nums.append(int(i))
    highest = max(nums)
    lowest = min(nums)
    return f"{highest} {lowest}"

#4)

def find_short(s):
    return min(map(len, s.split(' ')))

#5)

def friend(x):
    result = []
    for i in x:
        if len(i) == 4:
            result.append(i)
    return result
