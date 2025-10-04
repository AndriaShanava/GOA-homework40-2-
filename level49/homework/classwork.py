#1)

def small_enough(array, limit):
    for i in array:
        if i > limit:
            return False
    return True

#2)

def factorial(n):
    factorial = 1
    if n <  0 or n >12:
        raise ValueError("n must be between 0 and 12!")
    elif n == 0:
        return 1
    else:
        for i in range(n):
            factorial *= i + 1
    return factorial

#3)

def sum_digits(number):
    sum = 0 
    for i in str(number):
        if i in "0123456789":
            sum += int(i)
    return sum

#4)

def cap_me(arr):
    new_arr = []
    for i in arr:
        new_arr.append(i.capitalize())
    return new_arr

#5)

def unique_sum(lst):
    sum = 0 
    
    if lst == []:
        return None
    else:
        for i in set(lst):
            sum += i
    return sum