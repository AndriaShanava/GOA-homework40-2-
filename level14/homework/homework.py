def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

def multiplication_table(n):
    table = []
    for i in range(1, n + 1):
        table.append(f"{n} x {i} = {n * i}")
    return table

def mask_string(s):
    return '*' * len(s)

