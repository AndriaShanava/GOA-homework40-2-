#1)
def spacey(array):
    new_s = []
    s = ""
    for i in array:
        s+=i
        new_s.append(s)
    return new_s

#2)
def cube_odd(arr):
    res = 0
    for i in arr:
        if type(i)!=int:
            return None
        res += i**3 if i%2 else 0
    return res

#3)
def solve(s):
    lst = [0, 0, 0, 0]
    for char in s:
        if char.isupper():
            lst[0] += 1
        elif char.islower():
            lst[1] += 1
        elif char.isdigit():
            lst[2] += 1
        else:
            lst[3] += 1
    return lst

#4)
