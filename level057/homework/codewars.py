#1)

def merge_arrays(arr1, arr2):
    return sorted(set(arr1 + arr2))

#2)

def toCsvText(array) :
    return str(array).replace("],","\n").replace("[","").replace("]]","").replace(" ","")

#3)

def nearest_sq(n):
    return round(n ** 0.5) ** 2

#4)

def pythagorean_triple(integers):
    integers.sort()
    a, b, c = integers
    return a**2 + b**2 == c**2

#5)

def first_non_consecutive(arr):
    result = arr[0]
    for i in arr:
        if i != result:
            return i
        result += 1
    return None