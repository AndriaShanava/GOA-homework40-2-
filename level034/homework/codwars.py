#1)
def calculator(txt):
    new_text = ""
    slices = txt.split()
    if slices[1] == "+":
        new_text = "." * (len(slices[0]) + len(slices[2]))
    elif slices[1] == "-":
        new_text = "." * (len(slices[0]) - len(slices[2]))
    elif slices[1] == "*":
        new_text = "." * (len(slices[0]) * len(slices[2]))
    elif slices[1] == "//":
        if len(slices[0]) > len(slices[2]):
            new_text = "." * (len(slices[0]) // len(slices[2]))
        else:
            new_text = ""
    
    return new_text

#2)
def print_array(arr):
    return ','.join(str(a) for a in arr)

#3)
def square_sum(numbers):
    sum = 0
    for i in numbers:
        sum += i * i
    return sum

#4)
def kata_13_december(lst): 
    result = []
    for i in lst: 
        if i % 2 != 0:
            result.append(i)
    return result

#5)
def logical_calc(array, op):
    arr = array[0]
    for i in array[1:]:
        if op == "AND":
            arr = arr and i
        elif op == "OR":
            arr = arr or i
        elif op == "XOR":
            arr = arr != i 
    return arr