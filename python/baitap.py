def BT1(n):
    if (n == 1):
        return 1
    else:
        return n + BT1(n-1)

def BT2(n):
    if (n == 1):
        return 1
    else:
        return n**2 + BT2(n-1)

def BT3(n):
    if (n == 1):
        return 1
    else:
        return 1/n + BT3(n-1)

def BT4(n):
    if (n == 1):
        return 1/2
    else:
        return 1/(2*n) + BT4(n-1)

def BT5(n):
    if (n == 0):
        return 1
    else:
        return 1/(2*n+1) + BT5(n-1)

def BT6(n):
    if (n == 1):
        return 1/2
    else:
        return 1/(n*(n+1)) + BT6(n-1)

def BT7(n):
    if (n == 1):
        return 1/2
    else:
        return n/(n+1) + BT7(n-1)

def BT8(n):
    if (n == 0):
        return 1/2
    else:
        return (2*n+1)/(2*n+2) + BT8(n-1)

def BT9(n):
    if (n == 1):
        return 1
    else:
        return n * BT9(n-1)

def BT10(x, n):
    if (n == 1):
        return x
    else:
        return x * BT10(x, n-1)


def BT11(n):
    if (n == 1):
        return 1
    else:
        return BT9(n) + BT11(n-1)

n = int(input())
x = int(input())
print("BT1:", BT1(n))
print("BT2:", BT2(n))
print("BT3:", BT3(n))
print("BT4:", BT4(n))
print("BT5:", BT5(n))
print("BT6:", BT6(n))
print("BT7:", BT7(n))
print("BT8:", BT8(n))
print("BT9:", BT9(n))
print("BT10:", BT10(x, n))
print("BT11:", BT11(n))