#1)

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

#2)

def correct(s):
    return s.replace("5","S").replace("0","O").replace("1","I")

#3)

def count_sheep(n):
    counting_sheeps = ""
    for i in range(1, n +1):
        counting_sheeps += str(i) + " sheep..."
    return counting_sheeps

#4)

def reverse_seq(n):
    list = []
    for i in range(n, 0, -1):
        list.append(i)
    return list

#5)

def two_highest(arg1):
    return sorted(set(arg1), reverse = True) [0:2]