def increse(x):
    s = input(f'{i}) is that greater than {x}?')
    print()
    if s == 'y' or s == 'yes':
        bound[0] = x
    elif s == 'n' or s == 'no':
        bound[1] = x


attempt = 20
bound = [0, 10000]
bound1 = 0
for i in range(attempt):
    bound1 = (bound[0] + bound[1]) // 2
    if bound[1] - bound[0] <= 4:
        s1 = input(f'{i}) is that {bound1}?')
        print()
        if s1 == 'y' or s1 == 'yes':
            print('I Wooon!')
            break
        elif s1 == 'n' or s1 == 'no':
            increse(bound1)
    else:
        increse(bound1)
    