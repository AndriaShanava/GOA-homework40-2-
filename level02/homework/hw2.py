name = input("შეიყვანე შენი სახელი ან სიმბოლო: ")

new_value = name * 5

if type(new_value) == str or type(new_value) == int:
    print("ახალი ცვლადი არის ან სტრინგი ან ინტეჯერი.")
else:
    print("არ არის არც სტრინგი და არც ინტეჯერი.")
