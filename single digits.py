def single_digit(x) -> str:
    while len(x) > 1:
        x = str(sum(map(int, x)))
    return x


n = input()
print(single_digit(n))
