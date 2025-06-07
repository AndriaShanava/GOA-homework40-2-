def mxolod_string(data_list):
    string_list = []
    for i in data_list:
        if type(i) == str:
            string_list.append(i)
    return string_list

print(mxolod_string(["kaxi", 5, "Aleqsandre", 10, "Giorgi", 20, "beqa"]))


def sashualo_aritmetikuli(data_list):
    list_sum = 0
    count = 0
    for i in data_list:
        if i > 50:
            list_sum += i
            count += 1
    if count == 0:
        return 0    
    return list_sum / count
print(sashualo_aritmetikuli([10, 20, 30, 60, 70, 80, 90]))