#1)

def positive_sum(arr):
    result = 0
    for i in arr:
        if i > 0:
            result += i
    return result

#2)

def paperwork(n, m):
    if n < 0 or m < 0:
        return 0
    return n * m

#3)


def count_by(x, n):
    list = []
    for i in range(1, n + 1):
        list.append(x * i)
    return list


#4)

def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    else:
        return "Hello, " + name + "!"
    
#5)

def sum_mix(arr):
    total = 0
    for i in arr:
        total += int(i)
    return total