#1)

def disemvowel(s):
    for i in "aeiouAEIOU":
        s = s.replace(i,'')
    return s

#2)

def solution(a,b):
    return(a.endswith(b))

#3)

def accum(s):
    i = 0
    result = ''
    for letter in s:
        result += letter.upper() + letter.lower() * i + '-'
        i += 1
    return result[:len(result)-1]

#4)

def capitals(word):
    uppers = []
    for i in range(len(word)):
        if word[i].isupper():
            uppers.append(i)
    return uppers

#5)

def dont_give_me_five(start,end):
    n = 0
    for i in range(start,end+1):
        if '5' not in str(i):
            n+=1
    return n