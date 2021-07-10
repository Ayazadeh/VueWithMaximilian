import logging

log_format = logging.Formatter("%(asctime)s —%(name)-10s: — %(levelname)-16s — "
                               "%(msecs)s — %(message)s")
logging.basicConfig(level=logging.INFO, format="%(asctime)s —%(name)s: — %(levelname)s - %(msecs)s — %(message)s")


def is_primal(n: int):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True


def primals_func(n: int):
    res = []
    for i in range(2, n + 1):
        if is_primal(i):
            res.append(i)
    return res


def process_timer(func, *args):
    f = func
    number = args[0]
    logging.info("Function start")
    res = f(number)
    logging.info("Function finish")
    return res


print(process_timer(primals_func, 20000))
