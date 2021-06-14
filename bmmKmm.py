n, m = map(int, input().split())


def GCD(n, m):
    minimum = min(m, n)
    maximum = max(m, n)
    gcd = 1
    for i in range(minimum, 1, -1):
        if minimum % i == 0 and maximum % i == 0:
            return i

    return gcd


def LCM(n, m):
    minimum = min(m, n)
    maximum = max(m, n)
    return (n / GCD(n, m)) * m


print('GCD:', GCD(n, m))
print('LCM:', int(LCM(n, m)))
