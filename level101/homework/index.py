#1)
# def switcheroo(string):
#     result = ''
#     for letter in string:
#         if letter == 'a':
#             letter = 'b'
#         elif letter == 'b':
#             letter = 'a'
#         result += letter
#     return result


#2)

# def explode(s):
#     result = ""
#     for num in s:
#         result += int(num)*num
#     return result


#3)

# def sort_my_string(S):
#     return (S[0::2] + " " + S[1::2])

#4)

# def filter_string(string):
#     result = ""
#     for i in string:
#         if i.isdigit(): 
#             result = result + i
#     return int(result)

#5)
# def largest_pair_sum(numbers): 
#     return sum(sorted(numbers)[-2:])

#6)

# def bumps(road):
#     if road.count('n') > 15:
#         return "Car Dead"
#     else:
#         return "Woohoo!"

#7)

# def sum_cubes(n):
#     result = 0
#     for i in range(n+1):
#         result = result + i**3
        
#     return result

#8)

# def no_odds(values):
#     list = []
#     for i in values:
#         if i%2==0:
#             list.append(i)
#     return list

#9)

# def arithmetic(a, b, operator):
#     if operator == "add":
#         return a + b
#     elif operator == "subtract":
#         return a - b
#     elif operator == "multiply":
#         return a * b
#     elif operator == "divide":
#         return a / (b * 1.0)


#10)

# def stray(arr):
#     for i in arr:
#         if arr.count(i) == 1:
#             return i