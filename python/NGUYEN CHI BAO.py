n = int(input("Nhập n:"))

#CÁCH 1:

#Bài 1 - Cách 1:
print("Các ước của", n, ":", end = " ")
for i in range(1, n+1):
    if (n%i == 0):
        if (i == n):
            print(i)
        else:
            print(i, end = ",")
    

#Bài 2 - Cách 1:
S = 0
for i in range(1, n+1):
    if (n%i == 0):
        S = S + i
print("Tổng các ước của", n, "=", S)

#Bài 3 - Cách 1:
T = 1
for i in range(1, n+1):
    if (n%i == 0):
        T = T * i
print("Tích các ước của", n, "=", T)

#Bài 4 - Cách 1:
count = 0
for i in range(1, n+1):
    if (n%i == 0):
        count = count + 1
print("Số lượng ước số của", n, "=", count)

#Bài 5 - Cách 1:
print("Các ước lẻ của", n, ":", end = " ")
for i in range(1, n+1):
    if (n%i == 0 and i%2 != 0):
        print(i, end = " ")
print("\n")

#Bài 6 - Cách 1:
S = 0
for i in range(1, n+1):
    if (n%i == 0 and i%2 == 0):
        S = S + i
print("Tổng các ước chẵn của", n, "=", S)

#CÁCH 2: MODULE

#Bài 1 - Cách 2:
def BT1_Module(n):
    for i in range(1, n+1):
        if (n%i == 0):
            if (i == n):
                print(i)
            else:
                print(i, end = ",")

#Bài 2 - Cách 2:
def BT2_Module(n):
    S = 0
    for i in range(1, n+1):
        if (n%i == 0):
            S = S + i
    return S

#Bài 3 - Cách 2:
def BT3_Module(n):
    T = 1
    for i in range(1, n+1):
        if (n%i == 0):
            T = T * i
    return T

#Bài 4 - Cách 2:
def BT4_Module(n):
    count = 0
    for i in range(1, n+1):
        if (n%i == 0):
            count = count + 1
    return count

#Bài 5 - Cách 2:
def BT5_Module(n):
    for i in range(1, n+1):
        if (n%i == 0 and i%2 != 0):
            print(i, end = " ")
    print("\n")

#Bài 6 - Cách 2:
def BT6_Module(n):
    S = 0
    for i in range(1, n+1):
        if (n%i == 0 and i%2 == 0):
            S = S + i
    return S

print("CÁCH 2:")
print("Các ước của", n, ":", end = " ")
BT1_Module(n)
print("Tổng các ước của", n, "=", BT2_Module(n))
print("Tích các ước của", n, "=", BT3_Module(n))
print("Số lượng các ước của", n, "=", BT4_Module(n))
print("Các ước lẻ của", n, "=", end = " ")
BT5_Module(n)
print("Tổng các ước chẵn của", n, "=", BT6_Module(n))

#CÁCH 3: ĐỆ QUY

#Bài 2 - Cách 3:
def BT2_DQ(k):
    if (k == 1):
        return 1
    else:
        if (n%k == 0):
            return k + BT2_DQ(k-1)
        else:
            return BT2_DQ(k-1)
#Bài 3 - Cách 3:
def BT3_DQ(k):
    if (k == 1):
        return 1
    else:
        if (n%k == 0):
            return k * BT3_DQ(k-1)
        else:
            return BT3_DQ(k-1)

#Bài 4 - Cách 3:
def BT4_DQ(k):
    if (k == 1):
        return 1
    else:
        if (n%k == 0):
            return 1 + BT4_DQ(k-1)
        else:
            return BT4_DQ(k-1)

#Bài 6 - Cách 3:
def BT6_DQ(k):
    if (k == 1):
        return 0
    else:
        if (n%k == 0 and k%2 == 0):
            return k + BT6_DQ(k-1)
        else:
            return BT6_DQ(k-1)

print("CÁCH 3:")
print("Tổng các ước của", n, "=", BT2_DQ(n))
print("Tích các ước của", n, "=", BT3_DQ(n))
print("Số lượng các ước của", n, "=", BT4_DQ(n))
print("Tổng các ước chẵn của", n, "=", BT6_DQ(n))