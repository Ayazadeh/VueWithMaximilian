def flat(n):
    b = []
    for i in n:
        if len(str(i)) > 1:
            b += flat(i)
        else:
            b.append(i)
    return b


a = [1, 2, [3, [8, [3, 4], 9], 5], 6]
print(flat(a))
