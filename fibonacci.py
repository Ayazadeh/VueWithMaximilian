def fibonacci(n):
    a, b = 1, 1
    fibonacc = []
    while n >= 1:
        fibonacc.append(a)
        a, b = b, b + a
        n -= 1
    return fibonacc


n = int(input())
print(fibonacci(n))
