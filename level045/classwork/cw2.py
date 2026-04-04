# 2)შექმენით სია რომელსაც გადაეცემა  სახელი და გვარები მაგ --> ["გოგა ჩალაური" , "ანდრია შანავა" , "დათო მირიბიანი"] , 
#თქვენი დავალებაა რომ ამ სიაში მყოფი ე;ემენტების სახელები
# მოათავსოთ სიაში რომელსაც ერქმევა names და გვარები მოათავსოთ სხვა სიაში რომელსაც ერქმევა surnames

list = ["Andria Shanava", "Dato Miribiani", "Goga Chalauri", "Nikoloz Wereteli"]
names = []
surnames = []

for i in list:
    name = i.split()
    surname = i.split()
    names.append(name)
    surnames.append(surname)

print(names, surnames)
        
